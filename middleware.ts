import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.') // Skip files with extensions
  ) {
    return NextResponse.next()
  }

  const pathnameHasLocale = pathname.startsWith('/en') || pathname.startsWith('/ar')

  // If root path, redirect to /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // If no locale in pathname, redirect to /en with the path
  if (!pathnameHasLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}


