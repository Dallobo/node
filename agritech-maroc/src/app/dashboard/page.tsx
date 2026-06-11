import { createClient } from '@/lib/supabase/server'
import {
  Wallet,
  Map,
  TrendingUp,
  Droplets,
  Thermometer,
  Activity,
  Calendar,
} from 'lucide-react'
import {
  PROJECT_STATUS_LABELS,
  PROJECT_STATUS_COLORS,
} from '@/lib/types'
import type { Investment, Project, FieldData } from '@/lib/types'

async function getDashboardData(userId: string) {
  const supabase = createClient()

  const [investmentsRes, projectsRes, fieldDataRes] = await Promise.all([
    supabase
      .from('investments')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false }),
    supabase.from('projects').select('*').limit(3),
    supabase
      .from('field_data')
      .select('*')
      .order('recorded_at', { ascending: false })
      .limit(1),
  ])

  return {
    investments: (investmentsRes.data as Investment[]) ?? [],
    projects: (projectsRes.data as Project[]) ?? [],
    latestFieldData: (fieldDataRes.data?.[0] as FieldData) ?? null,
  }
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat('fr-MA', { style: 'decimal', maximumFractionDigits: 0 }).format(n) + ' MAD'
}

export default async function DashboardPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { investments, projects, latestFieldData } = await getDashboardData(user!.id)

  const totalInvested = investments.reduce((s, i) => s + i.amount, 0)
  const totalSurface = investments.reduce((s, i) => s + i.surface_ha, 0)
  const estimatedYield = totalInvested * 0.10

  const stats = [
    {
      icon: Wallet,
      label: 'Total investi',
      value: totalInvested > 0 ? formatCurrency(totalInvested) : '—',
      color: 'text-brand-600',
      bg: 'bg-brand-50',
    },
    {
      icon: Map,
      label: 'Surface allouée',
      value: totalSurface > 0 ? `${totalSurface} ha` : '—',
      color: 'text-sky-600',
      bg: 'bg-sky-50',
    },
    {
      icon: TrendingUp,
      label: 'Rendement estimé / an',
      value: totalInvested > 0 ? formatCurrency(estimatedYield) : '—',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      icon: Activity,
      label: 'Projets actifs',
      value: projects.filter((p) => p.status === 'en_cours' || p.status === 'production').length.toString(),
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
  ]

  return (
    <div className="container-max section-padding py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-500 mt-1">Bienvenue dans votre espace investisseur AgroSource.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="stat-card">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
              <Icon className={`w-5 h-5 ${color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{value}</div>
            <div className="text-sm text-gray-500">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Projects */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Projets en cours</h2>
          {projects.length === 0 ? (
            <div className="card text-center py-12 text-gray-400">
              <Map className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>Aucun projet disponible pour le moment.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="card">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900">{project.name}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${PROJECT_STATUS_COLORS[project.status]}`}
                        >
                          {PROJECT_STATUS_LABELS[project.status]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-lg font-bold text-brand-700">{project.total_surface_ha} ha</div>
                      <div className="text-xs text-gray-400">surface totale</div>
                    </div>
                  </div>

                  {/* Funding progress */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{formatCurrency(project.raised_amount)} levés</span>
                      <span>Objectif : {formatCurrency(project.target_amount)}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-brand-500 transition-all"
                        style={{
                          width: `${Math.min(100, Math.round((project.raised_amount / project.target_amount) * 100))}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {Math.min(100, Math.round((project.raised_amount / project.target_amount) * 100))} % financé
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Field data panel */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Données terrain</h2>
          <div className="card space-y-5">
            {latestFieldData ? (
              <>
                <div className="flex items-center gap-3 p-4 bg-sky-50 rounded-xl">
                  <Droplets className="w-8 h-8 text-sky-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {latestFieldData.humidity_pct} %
                    </div>
                    <div className="text-sm text-gray-500">Humidité</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl">
                  <Thermometer className="w-8 h-8 text-orange-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {latestFieldData.temperature_c}°C
                    </div>
                    <div className="text-sm text-gray-500">Température</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-brand-50 rounded-xl">
                  <Droplets className="w-8 h-8 text-brand-500" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {latestFieldData.water_collected_l} L
                    </div>
                    <div className="text-sm text-gray-500">Eau captée aujourd&apos;hui</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    Mis à jour le{' '}
                    {new Date(latestFieldData.recorded_at).toLocaleDateString('fr-MA', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <Activity className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-sm">Aucune donnée disponible</p>
              </div>
            )}
          </div>

          {/* My investments */}
          <h2 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Mes investissements</h2>
          <div className="card">
            {investments.length === 0 ? (
              <div className="text-center py-6 text-gray-400 text-sm">
                Aucun investissement enregistré.
              </div>
            ) : (
              <div className="space-y-3">
                {investments.map((inv) => (
                  <div key={inv.id} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <div className="text-sm text-gray-600">
                      {new Date(inv.created_at).toLocaleDateString('fr-MA')}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {formatCurrency(inv.amount)}
                    </div>
                    <div className="text-xs text-gray-400">{inv.surface_ha} ha</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
