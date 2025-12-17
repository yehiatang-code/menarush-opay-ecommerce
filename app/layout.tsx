import type { Metadata } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import LocaleSetter from '@/components/LocaleSetter'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MENARUSH.TECH - Local Payment Enablement for Global Digital Services',
    template: '%s | MENARUSH.TECH',
  },
  description: 'Empowering international games and digital platforms with secure, compliant, and localized payment solutions in Egypt.',
  keywords: ['payment enablement', 'Egypt', 'digital services', 'payment integration', 'system integration'],
  authors: [{ name: 'MENARUSH.TECH' }],
  creator: 'MENARUSH.TECH',
  metadataBase: new URL('https://menarush.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_EG',
    siteName: 'MENARUSH.TECH',
    title: 'MENARUSH.TECH - Local Payment Enablement for Global Digital Services',
    description: 'Empowering international games and digital platforms with secure, compliant, and localized payment solutions in Egypt.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${notoSansArabic.variable}`}>
      <body className="font-sans antialiased">
        <LocaleSetter />
        {children}
      </body>
    </html>
  )
}

