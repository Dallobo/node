import { Droplets, Sprout, Bug, Package, Recycle } from 'lucide-react'

const steps = [
  {
    icon: Droplets,
    iconBg: 'bg-ocean-500',
    tag: 'Eau',
    title: "Gestion de l'eau",
    description:
      "Nos collecteurs extraient jusqu'a 100 litres d'eau par jour depuis l'air ambiant, sans dependre des pluies ni des forages profonds.",
  },
  {
    icon: Sprout,
    iconBg: 'bg-fluo-500',
    tag: 'Sol',
    title: 'Regeneration des sols',
    description:
      "Permaculture, paillage et cultures compagnes pour restaurer la fertilite des sols tout en maximisant les rendements avec un minimum d'intrants chimiques.",
  },
  {
    icon: Bug,
    iconBg: 'bg-ocean-500',
    tag: 'Biodiversite',
    title: 'Biodiversite',
    description:
      "Creation d'ecosystemes vivants : haies melliferes, corridors ecologiques, insectes auxiliaires et micro-organismes benefiques du sol.",
  },
  {
    icon: Package,
    iconBg: 'bg-fluo-500',
    tag: 'Production',
    title: 'Production durable',
    description:
      "Fruits, legumes, miel d'abeilles et lombricompost — des productions complementaires qui generent des revenus tout au long de l'annee.",
  },
  {
    icon: Recycle,
    iconBg: 'bg-ocean-500',
    tag: 'Economie circulaire',
    title: 'Ecosystemes circulaires',
    description:
      "Zero dechet : les residus vegetaux alimentent les lombrics qui produisent le compost qui nourrit les cultures. Un cycle ferme et rentable.",
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            Notre approche
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700">
            5 piliers pour transformer la terre
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            Une approche systemique qui combine technologie et nature pour rendre
            l&apos;agriculture profitable dans des zones jusqu&apos;ici inexploitables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, iconBg, tag, title, description }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-4 p-8 rounded-2xl bg-white border border-gray-100 hover:border-ocean-300 hover:shadow-md transition-all duration-200
                ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center ${iconBg}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-bold text-ocean-400 uppercase tracking-wider">{tag}</span>
              </div>
              <h3 className="text-lg font-semibold text-navy-700">{title}</h3>
              <p className="text-navy-700/70 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
