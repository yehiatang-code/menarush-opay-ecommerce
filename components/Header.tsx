'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'
import type { TranslationKeys } from '@/lib/i18n'

interface HeaderProps {
  locale: string
  t: TranslationKeys
}

type NavKey = keyof TranslationKeys['nav']

interface NavItem {
  key: NavKey
  href: string
}

export default function Header({ locale, t }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { key: 'home', href: `/${locale}` },
    { key: 'products', href: `/${locale}/products` },
    { key: 'services', href: `/${locale}/services` },
    { key: 'about', href: `/${locale}/about` },
    { key: 'contact', href: `/${locale}/contact` },
  ]

  const switchLocale = () => {
    if (typeof window === 'undefined') return
    const newLocale = locale === 'en' ? 'ar' : 'en'
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    window.location.href = `/${newLocale}${pathWithoutLocale}`
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo locale={locale} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <button
              onClick={switchLocale}
              className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white border border-dark-border rounded-md hover:border-accent-primary transition-colors"
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <button
              onClick={switchLocale}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-white border border-dark-border rounded-md hover:border-accent-primary transition-colors"
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

