import Link from 'next/link'
import { ArrowRight, Droplets, TreePine } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-900 via-brand-800 to-sky-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-300 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-brand-500/20 text-brand-200 text-sm font-medium rounded-full border border-brand-400/30">
              Agritech · Maroc
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transformer le désert{' '}
            <span className="text-brand-300">en terres productives</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-100 mb-10 leading-relaxed max-w-2xl">
            Nous captons l&apos;eau dans l&apos;air pour irriguer des exploitations agricoles
            durables dans les zones arides du Maroc — produisant fruits, légumes, miel et compost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary bg-white text-brand-800 hover:bg-brand-50 shadow-xl">
              Investir maintenant
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#solution" className="btn-secondary border-white/40 text-white hover:bg-white/10">
              Découvrir la solution
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { icon: Droplets, label: "Eau atmosphérique", value: "100 L/jour/unité" },
              { icon: TreePine, label: "Surface cultivée", value: "50+ ha visés" },
              { icon: ArrowRight, label: "Retour visé", value: "8–12 % / an" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-1">
                <Icon className="w-6 h-6 text-brand-300" />
                <div className="text-lg font-bold text-white">{value}</div>
                <div className="text-xs text-brand-200">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
