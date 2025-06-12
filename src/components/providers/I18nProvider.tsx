'use client';

import { I18nProviderClient } from '@/locales/client'; // Corrected import path
import React from 'react';

type Props = {
  locale: string;
  children: React.ReactNode;
};

export default function I18nProvider({ locale, children }: Props) {
  return (
    <I18nProviderClient locale={locale} fallback={<p>Loading...</p>}>
      {children}
    </I18nProviderClient>
  );
}
