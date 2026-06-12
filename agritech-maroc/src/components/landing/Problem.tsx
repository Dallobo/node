import { Thermometer, CloudOff, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: CloudOff,
    title: 'Stress hydrique croissant',
    description:
      'Le Maroc fait face à une baisse de 30 % des précipitations depuis 30 ans. Les nappes phréatiques s\'épuisent à un rythme alarmant.',
  },
  {
    icon: Thermometer,
    title: 'Températures en hausse',
    description:
      '+2°C en moyenne d\'ici 2050 selon les projections. Les zones semi-arides se désertifient progressivement, menaçant des millions d\'agriculteurs.',
  },
  {
    icon: TrendingDown,
    title: 'Sécurité alimentaire menacée',
    description:
      'L\'agriculture représente 14 % du PIB marocain mais dépend à 90 % des pluies. Une agriculture résiliente est une nécessité nationale.',
  },
]

export default function Problem() {
  return (
    <section id="probleme" className="py-24 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
            Le problème
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700">
            Le Maroc face à la sécheresse
          </h2>
          <p className="mt-4 text-lg text-navy-700/70 max-w-2xl mx-auto">
            Le changement climatique compromet l&apos;avenir agricole d&apos;un pays entier. Nous proposons une réponse concrète.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-ocean-200 transition-all duration-200"
            >
              {/* Icône sur fond bleu océan clair → icône blanche */}
              <div className="w-12 h-12 bg-ocean-500 rounded-xl flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-700 mb-3">{title}</h3>
              <p className="text-navy-700/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
