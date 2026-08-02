import { locales, Locale } from '@/i18n/config';
import { BrookLodgeNextPage } from '@/components/hotels/BrookLodgeNextPage';
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
    title: 'Brook Lodge Boutique Hotel | 4-Star Luxury Sanctuary Killarney',
    description: 'Official Next.js luxury page for 4-Star Brook Lodge Boutique Hotel Killarney. Featuring 30 bespoke rooms and suites, private landscaped gardens, artisanal Kerry breakfast.',
  };
}

export default async function BrookLodgePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLocale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;

  return <BrookLodgeNextPage locale={currentLocale} />;
}
