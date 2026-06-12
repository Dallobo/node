import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Land to Life — Agriculture régénérative au Maroc',
  description:
    "Transformer les zones arides en terres productives grâce à la captation d'eau atmosphérique et l'agriculture régénérative au Maroc.",
  keywords: ['agritech', 'maroc', 'agriculture durable', 'investissement', 'eau atmosphérique', 'land to life'],
  openGraph: {
    title: 'Land to Life',
    description: 'A Reason to Exist — Transformer le désert en terres productives.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-navy-700 antialiased">{children}</body>
    </html>
  )
}
