export const locales = ['en', 'ru', 'hy'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: typeof locales[number] = 'en';
