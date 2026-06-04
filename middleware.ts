import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ==========================================
// TOGGLE THIS TO true TO ACTIVATE THE MAINTENANCE / LOCK PAGE.
// SET TO false TO TURN IT OFF AND RESTORE NORMAL OPERATION.
// ==========================================
const IS_MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rewrite POST requests from /quick-quote to /api/quick-quote to prevent Page/Route conflict
  if (pathname === '/quick-quote' && request.method === 'POST') {
    return NextResponse.rewrite(new URL('/api/quick-quote', request.url))
  }

  // Rewrite POST requests from /contact to /api/contact to prevent Page/Route conflict
  if (pathname === '/contact' && request.method === 'POST') {
    return NextResponse.rewrite(new URL('/api/contact', request.url))
  }

  // Rewrite POST requests from /shipping-guidance to /api/shipping-guidance to prevent Page/Route conflict
  if (pathname === '/shipping-guidance' && request.method === 'POST') {
    return NextResponse.rewrite(new URL('/api/shipping-guidance', request.url))
  }

  // 1. Allow the request to pass through if maintenance mode is disabled
  if (!IS_MAINTENANCE_MODE) {
    return NextResponse.next()
  }

  // 2. Allow static files, assets, API routes, and the maintenance page itself to load normally
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/assets') ||
    pathname.includes('.') || // allows files like .png, .svg, .ico
    pathname === '/maintenance'
  ) {
    return NextResponse.next()
  }

  // 3. Rewrite all user-facing pages to the maintenance page
  return NextResponse.rewrite(new URL('/maintenance', request.url))
}

// Apply middleware to all paths except common static and system routes
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
