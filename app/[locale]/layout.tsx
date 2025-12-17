import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getTranslations } from '@/lib/i18n'

const locales = ['en', 'ar'] as const
type Locale = (typeof locales)[number]

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

// Enable static generation for all locale routes
export const dynamicParams = false

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const typedLocale = locale as Locale
  
  if (!locales.includes(typedLocale)) {
    notFound()
  }

  const t = await getTranslations(typedLocale)

  return (
    <>
      <Header locale={typedLocale} t={t} />
      <main className="flex-1">{children}</main>
      <Footer locale={typedLocale} t={t} />
    </>
  )
}

