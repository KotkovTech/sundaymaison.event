import { locales, Locale } from '@/i18n/config';
import { KilleenNextPage } from '@/components/hotels/KilleenNextPage';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Killeen House Hotel & Rozzers Restaurant | Country House Retreat Killarney',
    description: 'Official Next.js luxury page for Killeen House Hotel & Rozzers Restaurant in Aghadoe, Killarney. Featuring 23 manor rooms, award-winning fine dining, the world-famous Golf Ball Bar.',
  };
}

export default async function KilleenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLocale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;

  return <KilleenNextPage locale={currentLocale} />;
}
