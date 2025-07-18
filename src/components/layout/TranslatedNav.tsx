'use client';

import { useI18n } from '@/locales/client';

export default function useTranslatedNav() {
  const t = useI18n();

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'attend', label: t('nav.attend') },
  ];

  return navLinks;
}
