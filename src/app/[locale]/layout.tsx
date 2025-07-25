import { ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { setRequestLocale } from 'next-intl/server';
import MainLayout from '@/components/layout/MainLayout';

// Force dynamic rendering to bypass static export errors
export const dynamic = 'force-dynamic';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <MainLayout>
      <SpeedInsights />
      {children}
    </MainLayout>
  );
}
