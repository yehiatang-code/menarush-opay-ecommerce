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
    title: t.privacy.title,
    description: t.privacy.intro,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: {
        'en': '/en/privacy',
        'ar': '/ar/privacy',
        'x-default': '/en/privacy',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations(locale)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.privacy.title}
            </h1>
            {t.privacy.legalContext && (
              <p className="text-gray-400 text-xs sm:text-sm mb-3 italic border-l-2 border-accent-primary/50 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                {t.privacy.legalContext}
              </p>
            )}
            <p className="text-gray-400 text-sm">
              {t.privacy.lastUpdated}: {t.privacy.lastUpdatedDate}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8 animate-slide-up">
            <div className="bg-dark-card border border-dark-border rounded-lg p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                {t.privacy.intro}
              </p>
            </div>
          </section>

          {/* Sections */}
          <div className="space-y-8">
            {t.privacy.sections.map((section: any, index: number) => (
              <section key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-dark-card border border-dark-border rounded-lg p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  {section.content && (
                    <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                      {Array.isArray(section.content) ? (
                        section.content.map((item: string, i: number) => (
                          <p key={i}>{item}</p>
                        ))
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 rtl:mr-0 rtl:ml-4"></div>
                          <span className="text-gray-300 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <section className="mt-8 animate-slide-up">
            <div className="bg-gradient-to-br from-dark-card to-dark-surface border border-dark-border rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {t.privacy.contact.title}
              </h2>
              {t.privacy.contact.content && (
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {t.privacy.contact.content}
                </p>
              )}
              <div className="text-gray-300 text-lg leading-relaxed space-y-2">
                <p className="font-semibold text-white">MENARUSH Commerce</p>
                <p>
                  <span className="font-medium">{t.privacy.contact.email}:</span>{' '}
                  <a href="mailto:privacy@menarush.tech" className="text-accent-primary hover:text-accent-secondary transition-colors">
                    privacy@menarush.tech
                  </a>
                </p>
                <p>
                  <span className="font-medium">{t.privacy.contact.country}:</span> {t.privacy.contact.egypt}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

