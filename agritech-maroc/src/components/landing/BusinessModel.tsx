import { TrendingUp, Wallet, BarChart3, Shield } from 'lucide-react'

const revenues = [
  { label: 'Fruits & légumes', pct: 45, color: 'bg-brand-500' },
  { label: 'Miel premium', pct: 25, color: 'bg-earth-600' },
  { label: 'Lombricompost', pct: 20, color: 'bg-sky-500' },
  { label: 'Formation / tourisme', pct: 10, color: 'bg-purple-500' },
]

const terms = [
  { icon: Wallet, label: 'Ticket minimum', value: '5 000 MAD' },
  { icon: TrendingUp, label: 'Rendement visé', value: '8 – 12 % / an' },
  { icon: BarChart3, label: 'Horizon', value: '5 ans' },
  { icon: Shield, label: 'Structure', value: 'Parts agricoles' },
]

export default function BusinessModel() {
  return (
    <section id="business-model" className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            Modèle économique
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Un investissement rentable et responsable
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Votre capital finance la création de fermes productives. Vous partagez les revenus générés par la production agricole.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Revenue breakdown */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Sources de revenus</h3>
            <div className="space-y-5">
              {revenues.map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
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
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Conditions d&apos;investissement</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {terms.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <Icon className="w-5 h-5 text-brand-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
              <p className="text-brand-800 text-sm leading-relaxed">
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
