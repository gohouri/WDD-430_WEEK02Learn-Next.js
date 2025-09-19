import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // Check if the request is for dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check for authentication cookie
    const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
    
    console.log('Middleware - Path:', request.nextUrl.pathname);
    console.log('Middleware - Cookie:', request.cookies.get('isAuthenticated'));
    console.log('Middleware - Is authenticated:', isAuthenticated);
    
    if (!isAuthenticated) {
      console.log('Middleware - Redirecting to login');
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
};
