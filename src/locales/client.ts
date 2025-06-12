'use client';

import { createI18nClient } from 'next-international/client';
import { locales, defaultLocale } from './config';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = createI18nClient({
  [locales[0]]: () => import('./en'), // en
  [locales[1]]: () => import('./ru'), // ru
  [locales[2]]: () => import('./hy'), // hy
}, {
  // Optional: Set a fallback locale if the current locale is not found
  // This will be used if the current locale messages are not loaded yet
  fallbackLocale: defaultLocale,
});
