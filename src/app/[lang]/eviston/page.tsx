import { locales, Locale } from '@/i18n/config';
import { EvistonNextPage } from '@/components/hotels/EvistonNextPage';
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
    title: 'Eviston House Hotel | Luxury Town Centre Hotel & Danny Mann Pub Killarney',
    description: 'Official Next.js luxury page for Eviston House Hotel Killarney. Luxury guestrooms, Colleen Bawn Candlelight Dining, Danny Mann Traditional Pub, Fitness & Sauna Suite.',
  };
}

export default async function EvistonPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLocale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;

  return <EvistonNextPage locale={currentLocale} />;
}
