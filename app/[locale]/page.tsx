import { getTranslations } from '@/lib/i18n'
import Link from 'next/link'
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
    title: t.home.hero.title,
    description: t.home.hero.subtitle,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'ar': '/ar',
        'x-default': '/en',
      },
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations(locale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t.home.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.home.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/${locale}/products`}
                className="px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all transform hover:scale-105"
              >
                {t.home.hero.ctaPrimary}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="px-8 py-3 border-2 border-dark-border text-white font-semibold rounded-lg hover:border-accent-primary hover:bg-dark-card transition-all"
              >
                {t.home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.home.whoWeAre.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              {t.home.whoWeAre.layer1}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.home.whoWeAre.layer2}
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              {t.home.whatWeOffer.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.home.whatWeOffer.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-accent-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-accent-primary rounded-full mt-2 mr-4 rtl:mr-0 rtl:ml-4"></div>
                    <p className="text-gray-300 text-lg">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              {t.home.categories.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.home.categories.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-dark-card border border-dark-border rounded-lg text-center hover:border-accent-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-white font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why MENARUSH */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              {t.home.whyMenarush.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.home.whyMenarush.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-dark-card to-dark-surface border border-dark-border rounded-lg hover:border-accent-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-gray-300 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


