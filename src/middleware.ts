
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/old-path') {
    const url = req.nextUrl.clone();
    url.pathname = '/new-path'; 
    return NextResponse.redirect(url, 301); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/old-path', '/another-old-path'],  
};
