import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Heart, CheckCircle2, Award } from 'lucide-react';
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
    title: `${dict.about.title} — Sunday Maison Events`,
    description: 'Learn about Sunday Maison: a female-led luxury event brand in Ireland combining beauty, styling, gourmet dining, and stress-free planning.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-36 sm:pt-32 pb-24 space-y-20">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
          {dict.about.tag}
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C2623] font-light">
          {dict.about.title}
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed max-w-2xl mx-auto">
          We combine beauty, food, styling, and atmosphere to make every celebration feel effortless, beautiful, and truly special.
        </p>
        <div className="w-20 h-0.5 bg-[#C9A96E] mx-auto pt-2" />
      </section>

      {/* Main Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden glass-card border border-[#C9A96E]/30 shadow-xl">
            <Image
              src={getAssetPath('/gallery/gallery_2.jpg')}
              alt="Sunday Maison Brand Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card text-xs font-sans text-[#2C2623] border border-[#C9A96E]/40 flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#C9A96E] shrink-0 fill-[#C9A96E]" />
              <span>Killarney, Co. Kerry • Serving all of Ireland</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2623] font-normal leading-tight">
              Creating Stress-Free Luxury Experiences
            </h2>
            <p className="text-xs sm:text-sm font-sans text-[#6B5B4E] leading-relaxed">
              Sunday Maison is a female-led event brand born out of a passion for elevated aesthetics, genuine Irish hospitality, and professional beauty services.
            </p>
            <p className="text-xs sm:text-sm font-sans text-[#6B5B4E] leading-relaxed">
              With deep roots in the beauty industry and hospitality management, we understand that planning an event — whether a hen party for 10 or a bridal morning — can quickly become overwhelming. Our mission is simple: to take care of every detail so that the host and guests can simply arrive, relax, look gorgeous, and celebrate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#F0E6D6]">
              {dict.about.values.map((v: any, i: number) => (
                <div key={i} className="space-y-1.5 p-4 rounded-2xl bg-[#FAF7F2] border border-[#C9A96E]/20">
                  <h3 className="text-sm font-serif text-[#2C2623] font-semibold">{v.title}</h3>
                  <p className="text-[11px] font-sans text-[#6B5B4E] leading-snug">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href={`/${locale}/contact/`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-gradient-bg text-white text-xs font-sans font-medium tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Planning With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
