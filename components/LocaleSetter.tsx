'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LocaleSetter() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const locale = pathname.startsWith('/ar') ? 'ar' : 'en'
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    
    const html = document.documentElement
    html.lang = locale
    html.dir = dir
    
    // Update body font family based on locale
    const body = document.body
    if (locale === 'ar') {
      body.style.fontFamily = 'var(--font-arabic)'
    } else {
      body.style.fontFamily = 'var(--font-inter)'
    }
  }, [pathname])

  return null
}


