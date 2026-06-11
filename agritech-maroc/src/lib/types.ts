export interface Investment {
  id: string
  user_id: string
  amount: number
  surface_ha: number
  created_at: string
  project_id: string
}

export interface Project {
  id: string
  name: string
  location: string
  status: 'en_preparation' | 'en_cours' | 'production'
  start_date: string
  description: string
  total_surface_ha: number
  target_amount: number
  raised_amount: number
}

export interface FieldData {
  id: string
  project_id: string
  recorded_at: string
  humidity_pct: number
  temperature_c: number
  water_collected_l: number
}

export interface ContactMessage {
  name: string
  email: string
  phone?: string
  message: string
  investment_intent?: string
}

export type ProjectStatus = Project['status']

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  en_preparation: 'En préparation',
  en_cours: 'En cours',
  production: 'En production',
}

export const PROJECT_STATUS_COLORS: Record<ProjectStatus, string> = {
  en_preparation: 'bg-yellow-100 text-yellow-800',
  en_cours: 'bg-blue-100 text-blue-800',
  production: 'bg-green-100 text-green-800',
}
