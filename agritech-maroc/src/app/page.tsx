import Image from 'next/image'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/landing/Hero'
import Problem from '@/components/landing/Problem'
import Solution from '@/components/landing/Solution'
import BusinessModel from '@/components/landing/BusinessModel'
import Proof from '@/components/landing/Proof'
import ContactForm from '@/components/landing/ContactForm'
import { Mail, Phone } from 'lucide-react'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <BusinessModel />
      <Proof />

      {/* Section contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider">
                Nous contacter
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-navy-700 mb-6">
                Prêt à rejoindre l&apos;aventure ?
              </h2>
              <p className="text-lg text-navy-700/70 mb-8 leading-relaxed">
                Remplissez le formulaire et notre équipe vous recontacte dans les 48 heures pour
                discuter de votre investissement et répondre à toutes vos questions.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail,  text: 'contact@landtolife.ma' },
                  { icon: Phone, text: '+212 5XX XXX XXX' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-navy-700">
                    <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer : fond bleu océan → blanc */}
      <footer className="bg-ocean-500 text-white py-12">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Land to Life"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-white tracking-wide uppercase">
                  Land to Life
                </span>
                <span className="text-[10px] text-fluo-300 tracking-widest uppercase">
                  A Reason to Exist
                </span>
              </div>
            </div>
            <p className="text-sm text-center text-ocean-100">
              © {new Date().getFullYear()} Land to Life. Les rendements présentés sont des
              estimations et ne constituent pas une garantie financière.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
