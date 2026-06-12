import { Quote, ExternalLink } from 'lucide-react'

const stats = [
  { value: '300+',  label: 'hectares reboisés',         source: 'Sand to Green' },
  { value: '100K+', label: 'arbres plantés',            source: 'Sand to Green' },
  { value: '30+',   label: 'emplois locaux créés',      source: 'Projet pilote' },
  { value: '85 %',  label: 'taux de survie des plants', source: 'Données terrain' },
]

export default function Proof() {
  return (
    <section id="preuve" className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            Preuve de concept
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700">
            Inspiré de modèles qui ont fait leurs preuves
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            L&apos;approche Land to Life s&apos;appuie sur les résultats documentés de Sand to Green,
            pionnière de l&apos;agriculture régénérative dans les zones arides marocaines.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ value, label, source }) => (
            <div key={label} className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="text-4xl font-bold text-ocean-500 mb-2">{value}</div>
              <div className="text-navy-700 font-medium text-sm mb-1">{label}</div>
              <div className="text-xs text-navy-700/50">{source}</div>
            </div>
          ))}
        </div>

        {/* Citation : fond bleu océan → texte blanc */}
        <div className="bg-ocean-500 rounded-3xl p-10 text-white relative overflow-hidden">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed mb-6 font-light">
              &ldquo;Au Maroc, l&apos;air contient suffisamment d&apos;humidité pour produire de l&apos;eau
              en quantité agricole significative. Combinée à des pratiques régénératives, cette
              ressource peut transformer des zones désertiques en écosystèmes productifs et résilients.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {/* Avatar : fond vert fluo → initiales blanches */}
              <div className="w-10 h-10 bg-fluo-500 rounded-full flex items-center justify-center font-bold text-white text-sm">
                L2L
              </div>
              <div>
                <div className="font-semibold">Approche Land to Life</div>
                <div className="text-ocean-100 text-sm">Inspirée de Sand to Green, Maroc</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a href="https://www.sandtogreen.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fluo-300 hover:text-white transition-colors">
              En savoir plus sur Sand to Green
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
