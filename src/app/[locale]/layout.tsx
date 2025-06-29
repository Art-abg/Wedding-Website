import { ReactNode } from 'react';
import { locales } from '@/locales/config';
import { SpeedInsights } from "@vercel/speed-insights/next";

import MainLayout from '@/components/layout/MainLayout';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: {}, // We don't need to destructure locale since it's not used
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <MainLayout>
      <SpeedInsights />
      {children}
    </MainLayout>
  );
}
