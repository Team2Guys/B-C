// middleware.ts
import { fetchRedirectUrlById } from 'config/fetch';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function middleware(req: NextRequest) {
    const { pathname, origin } = req.nextUrl;
    const fullUrl = req.url;
           let redirectedProduct = await fetchRedirectUrlById(pathname.replace(/^\/+|\/+$/g, ''))
console.log(redirectedProduct, "redirectedProduct")
    if (!fullUrl.endsWith('/')) {
        return NextResponse.redirect(
            new URL(`${req.nextUrl.pathname}/`, req.nextUrl), 301
        )
    }
    if (redirectedProduct?.redirectedUrl) {
        const redirectPath = redirectedProduct.redirectedUrl == '/' ? '/' : redirectedProduct.redirectedUrl + '/';
        const absoluteUrl = new URL(redirectPath, origin);
        return NextResponse.redirect(absoluteUrl, 301);
    }


    return NextResponse.next();
}


export const config = {
    matcher: [
        '/((?!api|_next|.*\\.).+)',
    ],
};