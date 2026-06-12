'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Leaf, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [showPwd, setShowPwd] = useState(false)
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email ou mot de passe incorrect.')
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-gray-200 text-navy-700 placeholder-navy-700/30 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20 outline-none transition'

  return (
    /* Fond : bleu océan foncé → dégradé */
    <div className="min-h-screen bg-gradient-to-br from-ocean-900 via-ocean-700 to-ocean-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo : blanc sur fond bleu */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl">
            <Leaf className="w-7 h-7 text-fluo-400" />
            AgroSource
          </Link>
          <p className="text-ocean-200 mt-2">Espace investisseur</p>
        </div>

        {/* Card : fond blanc, texte navy */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-navy-700 mb-6">Connexion</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5" htmlFor="email">
                Adresse email
              </label>
              <input id="email" type="email" required value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com" className={inputCls} />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5" htmlFor="password">
                Mot de passe
              </label>
              <div className="relative">
                <input id="password" type={showPwd ? 'text' : 'password'} required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`${inputCls} pr-11`} />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-700/40 hover:text-navy-700"
                >
                  {showPwd ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3">{error}</div>
            )}

            {/* Bouton : fond bleu océan → texte blanc */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-navy-700/60">
              Pas encore de compte ?{' '}
              <a href="#contact" className="text-ocean-500 hover:text-ocean-600 font-medium">
                Contactez-nous
              </a>
            </p>
          </div>
        </div>

        {/* Lien retour : blanc sur fond bleu */}
        <p className="text-center text-ocean-200 text-xs mt-6">
          <Link href="/" className="hover:text-white transition-colors">
            ← Retour au site
          </Link>
        </p>
      </div>
    </div>
  )
}
