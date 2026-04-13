import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['es', 'en', 'ru', 'uk'] as const;
const DEFAULT_LOCALE = 'es';

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if ((LOCALES as readonly string[]).includes(firstSegment)) {
    const rest = '/' + segments.slice(2).join('/');
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = rest === '/' ? '/' : rest.replace(/\/$/, '');
    const response = NextResponse.rewrite(rewriteUrl);
    response.headers.set('x-locale', firstSegment);
    return response;
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    '/((?!api|_next|studio|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|mp4|webm|pdf|txt|xml|json|woff|woff2|ttf|otf|css|js|map)).*)',
  ],
};
