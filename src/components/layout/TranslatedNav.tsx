'use client';

import { useI18n } from '@/locales/client';

export default function TranslatedNav() {
  const t = useI18n();

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'attend', label: t('nav.attend') },
    { key: 'details', label: t('nav.details') },
    { key: 'gallery', label: t('nav.gallery') },
  ];

  return navLinks;
}
