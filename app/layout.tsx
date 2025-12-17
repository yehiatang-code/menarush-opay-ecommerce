import './globals.css'
import { ReactNode } from 'react'
import LocaleSetter from '@/components/LocaleSetter'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LocaleSetter />
        {children}
      </body>
    </html>
  )
}
