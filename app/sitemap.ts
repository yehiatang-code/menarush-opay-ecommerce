import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://menarush.tech'
  const locales = ['en', 'ar']
  const routes = ['', '/about', '/services', '/contact', '/privacy', '/terms']
  
  const urls: MetadataRoute.Sitemap = []
  
  locales.forEach((locale) => {
    routes.forEach((route) => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })
  
  return urls
}

