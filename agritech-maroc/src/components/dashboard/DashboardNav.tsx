'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogOut } from 'lucide-react'

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
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Land to Life" width={32} height={32} className="object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-navy-700 text-sm tracking-wide uppercase">Land to Life</span>
            <span className="text-[9px] text-ocean-500 font-medium tracking-widest uppercase">A Reason to Exist</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-sm text-navy-700/50 hidden sm:block">{userEmail}</span>
          <button onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-navy-700/60 hover:text-red-600 transition-colors">
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:block">Déconnexion</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
