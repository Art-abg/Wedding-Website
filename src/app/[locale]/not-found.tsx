export const dynamic = 'force-dynamic';

import { useTranslations } from 'next-intl';
 
export default function NotFound() {
  const t = useTranslations('NotFound');
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg">{t('description')}</p>
    </div>
  );
}
