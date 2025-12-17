import enTranslations from '@/locales/en.json'
import arTranslations from '@/locales/ar.json'

export type TranslationKeys = typeof enTranslations

const translations: Record<string, TranslationKeys> = {
  en: enTranslations,
  ar: arTranslations,
}

export function getTranslations(locale: string): TranslationKeys {
  return translations[locale] || translations.en
}

export function getLocaleFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  return segments[0] === 'ar' ? 'ar' : 'en'
}


