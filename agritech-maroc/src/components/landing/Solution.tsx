import { Droplets, Sprout, Package, Recycle } from 'lucide-react'

const steps = [
  {
    icon: Droplets,
    iconBg: 'bg-ocean-500',
    title: "Captation d'eau atmosphérique",
    description:
      "Nos collecteurs extraient jusqu'à 100 litres d'eau par jour depuis l'air ambiant — même en zone aride — sans dépendre des pluies ni des forages.",
  },
  {
    icon: Sprout,
    iconBg: 'bg-fluo-500',
    title: 'Agriculture régénérative',
    description:
      'Techniques de permaculture, paillage, et cultures compagnes pour restaurer la fertilité des sols tout en maximisant les rendements avec un minimum d\'intrants.',
  },
  {
    icon: Package,
    iconBg: 'bg-ocean-500',
    title: 'Production diversifiée',
    description:
      'Fruits, légumes, miel d\'abeilles et lombricompost — des productions complémentaires qui génèrent des revenus tout au long de l\'année.',
  },
  {
    icon: Recycle,
    iconBg: 'bg-fluo-500',
    title: 'Valorisation des déchets',
    description:
      'Zéro déchet : les résidus végétaux alimentent les lombrics qui produisent le compost qui nourrit les cultures. Un cycle fermé et rentable.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            Notre solution
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700">
            L&apos;agriculture du futur, aujourd&apos;hui
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            Une approche systémique qui combine technologie et nature pour rendre l&apos;agriculture profitable dans des zones jusque-là inexploitables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map(({ icon: Icon, iconBg, title, description }, i) => (
            <div
              key={title}
              className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 hover:border-ocean-300 hover:shadow-md transition-all duration-200"
            >
              {/* Icône : fond bleu ou vert fluo → texte blanc */}
              <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${iconBg}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-ocean-400">0{i + 1}</span>
                  <h3 className="text-lg font-semibold text-navy-700">{title}</h3>
                </div>
                <p className="text-navy-700/70 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
