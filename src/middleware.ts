import { createI18nMiddleware } from 'next-international/middleware';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './locales/config';

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  // Optionally, you can add URL prefixing strategies here
  // urlMappingStrategy: 'rewrite', // or 'redirect'
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*|favicon.ico).*)'],
};
