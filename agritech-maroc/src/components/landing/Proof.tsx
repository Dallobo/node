import { Quote, ExternalLink } from 'lucide-react'

const stats = [
  { value: '300+', label: 'hectares reboisés', source: 'Sand to Green' },
  { value: '100K+', label: 'arbres plantés', source: 'Sand to Green' },
  { value: '30+', label: 'emplois locaux créés', source: 'Projet pilote' },
  { value: '85 %', label: 'taux de survie des plants', source: 'Données terrain' },
]

export default function Proof() {
  return (
    <section id="preuve" className="py-24 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
            Preuve de concept
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Inspiré de modèles qui ont fait leurs preuves
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Notre approche s&apos;appuie sur les résultats documentés de Sand to Green, pionnière de l&apos;agriculture régénérative dans les zones arides marocaines.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ value, label, source }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="text-4xl font-bold text-brand-700 mb-2">{value}</div>
              <div className="text-gray-700 font-medium text-sm mb-1">{label}</div>
              <div className="text-xs text-gray-400">{source}</div>
            </div>
          ))}
        </div>

        {/* Testimonial / quote */}
        <div className="bg-gradient-to-r from-brand-700 to-sky-700 rounded-3xl p-10 text-white relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-6 font-light">
              &ldquo;Au Maroc, l&apos;air contient suffisamment d&apos;humidité pour produire de l&apos;eau en quantité
              agricole significative. Combinée à des pratiques régénératives, cette ressource peut
              transformer des zones désertiques en écosystèmes productifs et résilients.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                AG
              </div>
              <div>
                <div className="font-semibold">Approche AgroSource</div>
                <div className="text-brand-200 text-sm">Inspirée de Sand to Green, Maroc</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://www.sandtogreen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white transition-colors"
            >
              En savoir plus sur Sand to Green
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
