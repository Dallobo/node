import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgroSource Maroc — Agriculture régénérative',
  description:
    "Transformer les zones arides en terres productives grâce à la captation d'eau atmosphérique et l'agriculture régénérative au Maroc.",
  keywords: ['agritech', 'maroc', 'agriculture durable', 'investissement', 'eau atmosphérique'],
  openGraph: {
    title: 'AgroSource Maroc',
    description: "Transformer le désert en terres productives.",
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  )
}
