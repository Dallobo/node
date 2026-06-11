import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import type { ContactMessage } from '@/lib/types'

export async function POST(req: Request) {
  const body: ContactMessage = await req.json()

  if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  const supabase = createClient()
  const { error } = await supabase.from('contact_messages').insert({
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone?.trim() ?? null,
    investment_intent: body.investment_intent ?? null,
    message: body.message.trim(),
  })

  if (error) {
    console.error('Supabase insert error:', error.message)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
