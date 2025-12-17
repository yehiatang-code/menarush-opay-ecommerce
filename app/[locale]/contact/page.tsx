import { getTranslations } from '@/lib/i18n'
import ContactForm from '@/components/ContactForm'
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
    title: t.contact.title,
    description: t.contact.subtitle,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'en': '/en/contact',
        'ar': '/ar/contact',
        'x-default': '/en/contact',
      },
    },
  }
}

export default async function ContactPage({
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
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t.contact.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {locale === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-primary mt-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">
                        {locale === 'ar' ? 'الموقع' : 'Location'}
                      </p>
                      <p className="text-sm text-gray-400">
                        {locale === 'ar' ? 'مصر · القاهرة' : 'Egypt · Cairo'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent-primary mt-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </p>
                      <p className="text-sm text-gray-400">
                        {locale === 'ar' ? 'info@menarush.tech' : 'info@menarush.tech'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-card border border-dark-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {locale === 'ar' ? 'وقت الاستجابة' : 'Response Time'}
                </h3>
                <p className="text-sm text-gray-400">
                  {locale === 'ar' 
                    ? 'نحن نهدف للرد على جميع الاستفسارات خلال 24-48 ساعة خلال أيام العمل.' 
                    : 'We aim to respond to all inquiries within 24-48 hours during business days.'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm locale={locale} t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
