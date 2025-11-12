import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Check if the request is for the app subdomain
  const isAppSubdomain = hostname.startsWith('app.') || 
                         hostname === 'app.smartlockcapital.com' || 
                         hostname.includes('app.smartlockcapital.com') ||
                         hostname.includes('app.localhost')
  
  if (isAppSubdomain) {
    // Rewrite to /app route for app subdomain
    if (!url.pathname.startsWith('/app') && !url.pathname.startsWith('/_next') && !url.pathname.startsWith('/api')) {
      url.pathname = `/app${url.pathname === '/' ? '' : url.pathname}`
      return NextResponse.rewrite(url)
    }
  } else {
    // For main domain, block access to /app route (redirect to home)
    if (url.pathname.startsWith('/app') && url.pathname !== '/app') {
      return NextResponse.redirect(new URL('/', url))
    }
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

