import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { PackagesPreview } from '@/components/home/PackagesPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { HowItWorks } from '@/components/home/HowItWorks';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ContactCTA } from '@/components/home/ContactCTA';
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
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.hero.title} — Sunday Maison Events Ireland`,
    description: dict.hero.description,
    keywords: [
      'Hen Party Ireland',
      'Hen Party Killarney',
      'Hen Party Kerry',
      'Luxury Hen Party Ireland',
      'Bridal Events Ireland',
      'Bridal Brunch Ireland',
      'Event Planner Killarney',
      'Girls Weekend Ireland',
      'Private Events Ireland',
    ],
    openGraph: {
      title: `${dict.hero.title} — Sunday Maison Events Ireland`,
      description: dict.hero.description,
      locale: locale,
      type: 'website',
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection dict={dict} locale={locale} />
      <IntroSection dict={dict} />
      <ServicesPreview dict={dict} locale={locale} />
      <WhyChooseUs dict={dict} />
      <PackagesPreview dict={dict} locale={locale} />
      <GalleryPreview dict={dict} locale={locale} />
      <HowItWorks dict={dict} />
      <AboutPreview dict={dict} locale={locale} />
      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
