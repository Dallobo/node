'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Leaf } from 'lucide-react'

const links = [
  { label: 'Solution', href: '#solution' },
  { label: 'Modèle', href: '#business-model' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-700">
            <Leaf className="w-6 h-6" />
            AgroSource
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-600 hover:text-brand-700 font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <Link href="/login" className="btn-primary text-sm py-2">
              Espace investisseur
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
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
                className="text-gray-600 hover:text-brand-700 font-medium"
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
