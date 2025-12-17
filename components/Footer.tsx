import Link from 'next/link'
import type { TranslationKeys } from '@/lib/i18n'

interface FooterProps {
  locale: string
  t: TranslationKeys
}

export default function Footer({ locale, t }: FooterProps) {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-500"
              >
                <ellipse cx="50" cy="58" rx="22" ry="20" stroke="currentColor" strokeWidth="2.5" fill="none" />
                <circle cx="38" cy="48" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
                <circle cx="62" cy="48" r="9" stroke="currentColor" strokeWidth="2.5" fill="none" />
                <circle cx="38" cy="48" r="4" fill="currentColor" />
                <circle cx="62" cy="48" r="4" fill="currentColor" />
                <path d="M 28 40 Q 38 36 48 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 52 40 Q 62 36 72 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 47 55 L 50 62 L 53 55 Z" fill="currentColor" />
                <path d="M 38 82 L 33 88 L 38 88 Z" fill="currentColor" />
                <path d="M 62 82 L 57 88 L 62 88 Z" fill="currentColor" />
              </svg>
              <div className="flex flex-col leading-[1.1]">
                <span className="text-orange-500 font-extralight text-lg tracking-[0.15em]">MENA</span>
                <span className="text-orange-500 font-extralight text-lg tracking-[0.15em]">RUSH</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
            <p className="text-gray-500 text-xs mt-2">{t.footer.registered}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.legal}</h4>
            <p className="text-gray-400 text-xs mb-2">{t.footer.registered}</p>
            <div className="space-y-1">
              <Link href={`/${locale}/privacy`} className="block text-gray-400 hover:text-accent-primary text-xs transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="block text-gray-400 hover:text-accent-primary text-xs transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.contact}</h4>
            <p className="text-gray-400 text-xs">{t.footer.location}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-border">
          <div className="text-center space-y-2 mb-4">
            <p className="text-gray-400 text-xs font-medium">
              {t.footer.paymentDisclaimer}
            </p>
            <p className="text-gray-500 text-xs">
              {t.footer.paymentNote}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} MENARUSH Commerce – {t.footer.egypt}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

