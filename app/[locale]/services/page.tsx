import { getTranslations } from '@/lib/i18n'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations(locale)

  return {
    title: t.services.title,
    description: t.services.api.description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        'en': '/en/services',
        'ar': '/ar/services',
        'x-default': '/en/services',
      },
    },
  }
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations(locale)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Digital Commerce Services */}
        <section className="max-w-6xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.services.digital.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.services.digital.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 rtl:mr-0 rtl:ml-4"></div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Support */}
        <section className="max-w-6xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.services.support.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.services.support.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 rtl:mr-0 rtl:ml-4"></div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


