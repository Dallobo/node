'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Leaf } from 'lucide-react'

const links = [
  { label: 'Solution',  href: '#solution' },
  { label: 'Modèle',   href: '#business-model' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">

          {/* Logo : vert fluo + texte navy */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-navy-700">
            <Leaf className="w-6 h-6 text-fluo-500" />
            AgroSource
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-navy-700 hover:text-ocean-500 font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link href="/login" className="btn-primary text-sm py-2">
              Espace investisseur
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 flex flex-col gap-4 border-t border-gray-100">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-navy-700 hover:text-ocean-500 font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Link href="/login" className="btn-primary text-sm py-2 self-start">
              Espace investisseur
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
