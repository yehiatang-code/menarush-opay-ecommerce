import { redirect } from 'next/navigation'

// This page should never be reached due to middleware,
// but we include it as a fallback
export default function RootPage() {
  redirect('/en')
}

// Force static generation
export const dynamic = 'force-static'


