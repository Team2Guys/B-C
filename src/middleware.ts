// middleware.ts
import { newblogPostUrl } from 'data/urls';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export function middleware(req: NextRequest) {
    const { pathname, origin } = req.nextUrl;
    const splited = pathname.split('/')[1];
    const fullUrl = req.url;
    
    const redirectedProduct = splited !== 'school-blinds' && newblogPostUrl.find((prod) => {
        return prod.url + "/" === pathname.toLowerCase();
    });

    if (!fullUrl.endsWith('/')) {
        return NextResponse.redirect(
            new URL(`${req.nextUrl.pathname}/`, req.nextUrl), 301
        )
    }
    if (redirectedProduct) {
        const absoluteUrl = new URL(redirectedProduct.redirectUrl, origin);
        return NextResponse.redirect(absoluteUrl, 301);
    }


    return NextResponse.next();
}


export const config = {
    matcher: [
        '/((?!api|_next|.*\\.).+)',
    ],
};