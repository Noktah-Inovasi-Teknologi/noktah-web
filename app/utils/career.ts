// Shared by the career pages. The Hub sends brand_key (eskala, venyu, noktah) and unit_name for every Opening.
export const UNIT_ORDER = ['eskala', 'venyu', 'noktah']

export type CareerOpening = {
  slug: string
  title: string
  unit?: string
  unit_name?: string
  brand_key?: string
  location?: string | null
  employment_type?: string | null
  closes_on?: string | null
}

export const unitKey = (o: CareerOpening) => (o.brand_key || o.unit_name || o.unit || '').toLowerCase()
export const unitName = (o: CareerOpening) => o.unit_name || o.unit || ''
export const unitLogo = (key: string) =>
  UNIT_ORDER.includes(key) ? `/images/brands/${key}-horizontal-${key === 'venyu' ? 'light' : 'primary'}.svg` : ''

export const formatCloseDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'id-ID', { dateStyle: 'long' }).format(new Date(`${iso}T00:00:00`))
