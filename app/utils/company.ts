/**
 * Single source of truth for Noktah's contact details.
 *
 * These were previously hardcoded across five templates — the footer, About,
 * Contact, Privacy Policy and Terms — which meant a phone number change was a
 * 20-occurrence edit spread over three formats (display text, `tel:` href and
 * `wa.me` URL) and it was easy to miss one. Change them here instead.
 *
 * Deliberately NOT in the i18n locale files: an address and a phone number are
 * the same in every language, so duplicating them per-locale would just create
 * a second way for the two to drift apart.
 *
 * Auto-imported by Nuxt from `app/utils/`, so templates can use `COMPANY`
 * directly with no import statement.
 */
export const COMPANY = {
  legalName: 'CV. Amerta Meta Data',
  brandName: 'Noktah Inovasi Teknologi',

  email: 'core@noktah.co',
  emailHref: 'mailto:core@noktah.co',

  /** Human-readable form, shown to readers. */
  phoneDisplay: '+62 851 9098 0511',
  /** Dialable form — digits only, no spaces. */
  phoneHref: 'tel:+6285190980511',
  /** WhatsApp deep link — country code, no `+` or spaces. */
  whatsappHref: 'https://wa.me/6285190980511',

  /** Rendered one line per entry; keep the postal line last. */
  addressLines: [
    'Jl. Perumnas Seturan No. 279',
    'Kledokan, Caturtunggal, Kec. Depok',
    'Kab. Sleman, Yogyakarta, Indonesia 55281',
  ],

  instagramUrl: 'https://instagram.com/noktah.it',
  instagramHandle: '@noktah.it',
  linkedinUrl: 'https://www.linkedin.com/company/noktah-it/',
} as const
