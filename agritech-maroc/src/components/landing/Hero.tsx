import Image from 'next/image'
import { ArrowRight, Droplets, TreePine, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-ocean-900 via-ocean-700 to-ocean-500 overflow-hidden">
      {/* Halos décoratifs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fluo-500 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-max section-padding py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texte gauche */}
          <div>
            <div className="mb-6">
              <span className="badge-fluo">Agritech · Maroc</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3 tracking-tight uppercase">
              Land to Life
            </h1>
            <p className="text-fluo-400 font-semibold tracking-[0.3em] uppercase text-sm mb-6">
              — A Reason to Exist —
            </p>
            <p className="text-lg sm:text-xl text-ocean-100 mb-10 leading-relaxed">
              Nous captons l&apos;eau dans l&apos;air pour irriguer des exploitations agricoles
              durables dans les zones arides du Maroc — produisant fruits, légumes, miel et compost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-700 hover:bg-ocean-50 font-semibold rounded-xl transition-all duration-200 shadow-xl hover:-translate-y-0.5"
              >
                Investir maintenant
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/50 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200"
              >
                Découvrir la solution
              </a>
            </div>

            {/* Métriques */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { icon: Droplets,   label: 'Eau / jour / unité',  value: '100 L' },
                { icon: TreePine,   label: 'Surface visée',        value: '50+ ha' },
                { icon: TrendingUp, label: 'Retour estimé',        value: '8–12 %' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <Icon className="w-5 h-5 text-fluo-400" />
                  <div className="text-xl font-bold text-white">{value}</div>
                  <div className="text-xs text-ocean-200">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo droite */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Halo derrière le logo */}
              <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-110" />
              <Image
                src="/images/logo.png"
                alt="Land to Life"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
