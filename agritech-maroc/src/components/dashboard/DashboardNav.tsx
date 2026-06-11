'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Leaf, LogOut } from 'lucide-react'

export default function DashboardNav({ userEmail }: { userEmail: string }) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-16 flex items-center">
      <div className="container-max section-padding w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-brand-700">
          <Leaf className="w-5 h-5" />
          AgroSource
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden sm:block">{userEmail}</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:block">Déconnexion</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
