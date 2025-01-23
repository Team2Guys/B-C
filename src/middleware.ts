// middleware.ts (or middleware.js)

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
console.log(pathname, "pathname")
  // Example redirect logic
  if (pathname === '/old-path') {
    const url = req.nextUrl.clone();
    url.pathname = '/new-path';  // Set the redirect path
    return NextResponse.redirect(url, 301);  // Permanent Redirect (301)
  }

  // If no match, continue to the requested route
  return NextResponse.next();
}

// Optionally, set matcher to control specific path matching
export const config = {
  matcher: ['/old-path', '/another-old-path'],  // Specify paths to be intercepted
};
