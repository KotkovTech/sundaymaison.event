import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import { GalleryClient } from '@/components/gallery/GalleryClient';
import fs from 'fs';
import path from 'path';
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
    title: `${dict.gallery.title} — Sunday Maison Events`,
    description: 'Visual portfolio of luxury hen parties, bridal events, tablescapes, grazing setups, and private celebrations across Ireland.',
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  // Read manifest
  const manifestPath = path.join(process.cwd(), 'public/gallery/manifest.json');
  let items = [];
  try {
    const data = fs.readFileSync(manifestPath, 'utf8');
    items = JSON.parse(data);
  } catch (err) {
    console.error('Manifest read error:', err);
  }

  return (
    <div className="pt-36 sm:pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
          {dict.gallery.tag}
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C2623] font-light">
          {dict.gallery.title}
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed">
          {dict.gallery.pageSubtitle || "Explore our real event setups, luxury styling details, gourmet grazing tables, and celebration moments."}
        </p>
        <div className="w-20 h-0.5 bg-[#C9A96E] mx-auto pt-2" />
      </div>

      <GalleryClient dict={dict} items={items} />
    </div>
  );
}
