import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// ==========================================
// TOGGLE THIS TO true TO ACTIVATE THE MAINTENANCE / LOCK PAGE.
// SET TO false TO TURN IT OFF AND RESTORE NORMAL OPERATION.
// ==========================================
const IS_MAINTENANCE_MODE = true;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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
