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

    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next).*)']
}