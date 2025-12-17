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
    title: t.products.title,
    description: t.products.subtitle,
    alternates: {
      canonical: `/${locale}/products`,
      languages: {
        'en': '/en/products',
        'ar': '/ar/products',
        'x-default': '/en/products',
      },
    },
  }
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations(locale)

  const categories = [
    {
      key: 'mobile',
      title: t.products.categories.mobile.title,
      description: t.products.categories.mobile.description,
      icon: '📱',
    },
    {
      key: 'jewelry',
      title: t.products.categories.jewelry.title,
      description: t.products.categories.jewelry.description,
      icon: '💍',
    },
    {
      key: 'apparel',
      title: t.products.categories.apparel.title,
      description: t.products.categories.apparel.description,
      icon: '👔',
    },
    {
      key: 'lifestyle',
      title: t.products.categories.lifestyle.title,
      description: t.products.categories.lifestyle.description,
      icon: '👜',
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t.products.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={category.key}
              className="bg-dark-card border border-dark-border rounded-lg p-8 hover:border-accent-primary/50 transition-all animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <div className="bg-gradient-to-br from-dark-card to-dark-surface border border-dark-border rounded-lg p-12">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t.products.comingSoon}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {locale === 'en'
                ? 'We are curating a selection of quality products for you. Check back soon for updates!'
                : 'نحن نختار مجموعة من المنتجات عالية الجودة لك. تحقق مرة أخرى قريباً للحصول على التحديثات!'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-primary/50 transition-all transform hover:scale-105"
            >
              {t.contact.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


