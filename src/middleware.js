import {NextRequest, NextResponse, NextFetchEvent} from "next/server";
// import { match } from '@formatjs/intl-localematcher';
// import Negotiator from 'negotiator';
// let headers = { 'accept-language': 'en-US,en;q=0.5' };
// let languages = new Negotiator({ headers }).languages();
let locales = ['en', 'hy', 'ru'];
let defaultLocale = 'en';
let adminPath = 'admin';
// match(languages, locales, defaultLocale);

export function middleware(request, event) {

    const { pathname } = request.nextUrl;

    if(pathname.startsWith(`/${adminPath}/`) || pathname === `/${adminPath}`){
        return;
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    // const locale = getLocale(request);
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);


    // if(request.nextUrl.pathname.startsWith('/about')){
    //     return NextResponse.redirect((new URL('/home', request.url)));
    // }
    // if(request.nextUrl.pathname.startsWith('/dashboard')){
    //     return NextResponse.redirect((new URL('/', request.url)));
    // }
    // return NextResponse.redirect((new URL('/products', request.url)));
}

export const config = {
    // matcher: '/about/:path*'
    // matcher: ['/((?!_next).*)', '/about/:path*', '/dashboard/:path+', '/tdmp/:pathos?', '/zmbrd/(.*)']
    matcher: ['/((?!_next).*)']
}