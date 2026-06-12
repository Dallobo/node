import { TrendingUp, Wallet, BarChart3, Shield } from 'lucide-react'

const revenues = [
  { label: 'Fruits & légumes',       pct: 45, color: 'bg-ocean-500' },
  { label: 'Miel premium',           pct: 25, color: 'bg-fluo-500' },
  { label: 'Lombricompost',          pct: 20, color: 'bg-ocean-300' },
  { label: 'Formation / tourisme',   pct: 10, color: 'bg-fluo-300' },
]

const terms = [
  { icon: Wallet,    label: 'Ticket minimum', value: '5 000 MAD' },
  { icon: TrendingUp,label: 'Rendement visé', value: '8 – 12 % / an' },
  { icon: BarChart3, label: 'Horizon',        value: '5 ans' },
  { icon: Shield,    label: 'Structure',      value: 'Parts agricoles' },
]

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-24 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            Modèle économique
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700">
            Un investissement rentable et responsable
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            Votre capital finance la création de fermes productives. Vous partagez les revenus générés par la production agricole.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Revenue breakdown */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-navy-700 mb-6">Sources de revenus</h3>
            <div className="space-y-5">
              {revenues.map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-medium text-navy-700 mb-2">
                    <span>{label}</span>
                    <span>{pct} %</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${color} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment terms */}
          <div>
            <h3 className="text-xl font-semibold text-navy-700 mb-6">Conditions d&apos;investissement</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {terms.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  {/* Icône sur fond bleu océan → blanche */}
                  <div className="w-9 h-9 bg-ocean-500 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-navy-700">{value}</div>
                  <div className="text-sm text-navy-700/60 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Simulation box : fond vert fluo → texte blanc */}
            <div className="bg-fluo-500 rounded-2xl p-6">
              <p className="text-white text-sm leading-relaxed">
                <strong>Simulation :</strong> Un investissement de 50 000 MAD sur 5 ans génère une
                estimation de revenus de 5 000 à 7 500 MAD par an, soit 25 000 – 37 500 MAD sur la
                durée. Les rendements ne sont pas garantis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
