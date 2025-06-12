import { createI18nServer } from 'next-international/server';
import { defaultLocale } from './config'; // Removed 'locales' import

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer(
  {
    // Explicitly define imports for each locale
    en: () => import('./en'),
    ru: () => import('./ru'),
    hy: () => import('./hy'),
  },
  {
    // Configure fallback behavior for server components
    fallbackLocale: defaultLocale,
  },
);
