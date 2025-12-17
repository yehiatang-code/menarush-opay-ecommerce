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
    title: t.about.title,
    description: t.about.overview.layer1,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'ar': '/ar/about',
        'x-default': '/en/about',
      },
    },
  }
}

export default async function AboutPage({
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
            {t.about.title}
          </h1>
        </div>

        {/* Company Overview */}
        <section className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.about.overview.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {t.about.overview.layer1}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {t.about.overview.layer2}
            </p>
            {t.about.overview.note && (
              <p className="text-gray-400 text-base leading-relaxed italic mt-4 pt-4 border-t border-dark-border">
                {t.about.overview.note}
              </p>
            )}
          </div>
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.about.mission.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.about.mission.content}
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.about.values.title}
            </h2>
            <div className="space-y-4">
              {t.about.values.items.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 rtl:mr-0 rtl:ml-4"></div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <div className="bg-dark-card border border-dark-border rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              {t.about.different.title}
            </h2>
            <div className="space-y-4">
              {t.about.different.items.map((item, index) => (
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


