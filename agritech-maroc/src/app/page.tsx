import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/landing/Hero'
import Problem from '@/components/landing/Problem'
import Solution from '@/components/landing/Solution'
import BusinessModel from '@/components/landing/BusinessModel'
import Proof from '@/components/landing/Proof'
import ContactForm from '@/components/landing/ContactForm'
import { Leaf, Mail, Phone } from 'lucide-react'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <BusinessModel />
      <Proof />

      {/* Contact section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-brand-600 font-semibold text-sm uppercase tracking-wider">
                Nous contacter
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Prêt à rejoindre l&apos;aventure ?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Remplissez le formulaire et notre équipe vous recontacte dans les 48 heures pour
                discuter de votre investissement et répondre à toutes vos questions.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-600" />
                  </div>
                  <span>contact@agrosource.ma</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-600" />
                  </div>
                  <span>+212 5XX XXX XXX</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-900 text-brand-200 py-12">
        <div className="container-max section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <Leaf className="w-5 h-5" />
              AgroSource Maroc
            </div>
            <p className="text-sm text-center">
              © {new Date().getFullYear()} AgroSource. Les rendements présentés sont des estimations
              et ne constituent pas une garantie financière.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
