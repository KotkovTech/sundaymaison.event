import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { getAssetPath } from '@/lib/assets';
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
    title: `${dict.services.title} — Sunday Maison Events`,
    description: 'Bespoke event services in Ireland: Hen parties, bridal mornings, brunches, private dinners, picnics, and milestone celebrations.',
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  const services = [
    {
      key: 'henParties',
      data: dict.services.henParties,
      image: '/gallery/gallery_1.jpg',
      longDesc: dict.services.longDescHen || dict.services.henParties.desc,
    },
    {
      key: 'bridalEvents',
      data: dict.services.bridalEvents,
      image: '/gallery/gallery_14.jpg',
      longDesc: dict.services.longDescBridal || dict.services.bridalEvents.desc,
    },
    {
      key: 'privateCelebrations',
      data: dict.services.privateCelebrations,
      image: '/gallery/gallery_26.jpg',
      longDesc: dict.services.longDescPrivate || dict.services.privateCelebrations.desc,
    },
  ];

  return (
    <div className="pt-36 sm:pt-32 pb-24 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
          {dict.services.tag}
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C2623] font-light">
          {dict.services.title}
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed max-w-2xl mx-auto">
          {dict.services.pageSubtitle}
        </p>
        <div className="w-20 h-0.5 bg-[#C9A96E] mx-auto pt-2" />
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {services.map((srv, idx) => (
          <div
            key={srv.key}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className={`lg:col-span-6 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden glass-card border border-[#C9A96E]/30 shadow-lg ${
              idx % 2 === 1 ? 'lg:order-2' : ''
            }`}>
              <Image
                src={getAssetPath(srv.image)}
                alt={srv.data.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/40 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-2">
                <span className="text-xs font-sans tracking-widest text-[#C9A96E] uppercase font-semibold">
                  {dict.services.servicePrefix || 'Service'} 0{idx + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2623] font-normal">
                  {srv.data.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm font-sans text-[#6B5B4E] leading-relaxed">
                {srv.longDesc}
              </p>

              <div className="space-y-3 pt-2 border-t border-[#F0E6D6]">
                <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2C2623]">
                  {dict.services.whatsIncluded || "What's Included:"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {srv.data.items.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#2C2623]">
                      <Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/${locale}/contact/`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient-bg text-white text-xs font-sans font-medium tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{dict.services.inquirePrefix || 'Inquire for'} {srv.data.title}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
