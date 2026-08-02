import { locales, Locale } from '@/i18n/config';
import { MasterPortalNextPage } from '@/components/hotels/MasterPortalNextPage';
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
    title: 'Killarney Luxury Hotels Collection | Redesign Portal',
    description: 'Three iconic Killarney hotel websites completely reimagined with modern editorial design, Next.js, Tailwind v4, shadcn/ui and Motion.',
  };
}

export default async function HotelsPortalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLocale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;

  return <MasterPortalNextPage locale={currentLocale} />;
}
