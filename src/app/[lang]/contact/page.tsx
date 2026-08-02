import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { ContactFormClient } from '@/components/contact/ContactFormClient';
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
    title: `${dict.contact.title} — Sunday Maison Events`,
    description: 'Inquire for your hen party, bridal event, or private celebration in Ireland. Contact Sunday Maison via form, email, WhatsApp, or Instagram.',
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-36 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
          {dict.contact.tag}
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C2623] font-light">
          {dict.contact.title}
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed">
          {dict.contact.subtitle}
        </p>
        <div className="w-20 h-0.5 bg-[#C9A96E] mx-auto pt-2" />
      </div>

      <ContactFormClient dict={dict} />
    </div>
  );
}
