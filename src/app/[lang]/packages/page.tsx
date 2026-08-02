import { locales, Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/get-dictionary';
import Link from 'next/link';
import { Check, Star, Sparkles, Plus, AlertCircle } from 'lucide-react';
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
    title: `${dict.packages.title} — Sunday Maison Events`,
    description: 'Curated celebration packages in Ireland: Essential (€750), Signature (€1,650), Luxury (€3,500), Mini Styling, plus custom add-ons.',
  };
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'en') as Locale;
  const dict = await getDictionary(locale);

  const mainPackages = [
    { key: 'essential', data: dict.packages.essential, price: '€750', popular: false },
    { key: 'signature', data: dict.packages.signature, price: '€1,650', popular: true },
    { key: 'luxury', data: dict.packages.luxury, price: '€3,500', popular: false },
  ];

  const addOnCategories = dict.packages.addOnCategories || [
    {
      title: 'Beauty & Glam',
      items: [
        { name: 'Makeup Services', price: 'from €80–€130 per person' },
        { name: 'Hairstyling Services', price: 'from €80–€130 per person' },
        { name: 'Bride / VIP Glam Package', price: 'from €180' },
        { name: 'Full Group Glam Package', price: 'custom quote' },
      ],
    },
  ];

  return (
    <div className="pt-36 sm:pt-32 pb-24 space-y-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
          {dict.packages.tag}
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C2623] font-light">
          {dict.packages.title}
        </h1>
        <p className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed max-w-2xl mx-auto">
          {dict.packages.subtitle}
        </p>
        <div className="w-20 h-0.5 bg-[#C9A96E] mx-auto pt-2" />
      </section>

      {/* Main 3 Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {mainPackages.map((pkg) => {
            const isPop = pkg.popular;
            return (
              <div
                key={pkg.key}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPop
                    ? 'glass-card border-2 border-[#C9A96E] shadow-2xl scale-[1.02] bg-[#FFFDF9]/95 z-10'
                    : 'glass-card border border-[#C9A96E]/30 shadow-lg hover:border-[#C9A96E]/60 bg-[#FAF7F2]/80'
                }`}
              >
                {isPop && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient-bg text-white text-[10px] font-sans font-semibold tracking-widest uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{dict.packages.mostPopular}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Pricing */}
                  <div className="border-b border-[#F0E6D6] pb-6 space-y-2 text-center sm:text-left">
                    <h2 className="text-2xl font-serif text-[#2C2623] font-medium">
                      {pkg.data.name}
                    </h2>
                    <p className="text-xs font-sans text-[#6B5B4E] leading-relaxed min-h-[36px]">
                      {pkg.data.subtitle}
                    </p>
                    <div className="pt-2">
                      <span className="text-[11px] uppercase font-sans text-[#6B5B4E] block">
                        {dict.packages.startingFrom}
                      </span>
                      <span className="text-3xl font-serif font-light text-[#2C2623]">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Headcount */}
                  <div className="space-y-1 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#C9A96E]/20 text-xs font-sans">
                    <div className="font-semibold text-[#2C2623]">{pkg.data.guests}</div>
                    <div className="text-[11px] text-[#6B5B4E]">{pkg.data.extraGuest}</div>
                  </div>

                  {/* Included Items */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-sans font-semibold uppercase tracking-wider text-[#2C2623]">
                      {dict.packages.inclusionsHeader || 'Package Inclusions:'}
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.data.includes.map((inc: string, i: number) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#2C2623]">
                          <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Add-ons */}
                  <div className="space-y-2 pt-4 border-t border-[#F0E6D6]">
                    <h3 className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#6B5B4E]">
                      {dict.packages.addonsHeader || 'Popular Optional Add-ons:'}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.data.addons.map((add: string, i: number) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[10px] font-sans text-[#2C2623] border border-[#C9A96E]/20">
                          + {add}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#F0E6D6] mt-8">
                  <Link
                    href={`/${locale}/contact/`}
                    className={`w-full py-3.5 rounded-full text-xs font-sans font-semibold tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isPop
                        ? 'gold-gradient-bg text-white shadow-md hover:shadow-lg'
                        : 'bg-[#FAF7F2] text-[#2C2623] border border-[#C9A96E]/40 hover:border-[#C9A96E]'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{dict.packages.inquirePrefix || 'Inquire for'} {pkg.data.name}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mini Styling Setup Footnote */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#C9A96E]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#C9A96E] font-semibold">{dict.packages.optionalSetup || 'Optional Small Setup'}</span>
            <h3 className="text-xl font-serif text-[#2C2623]">{dict.packages.mini.name}</h3>
            <p className="text-xs font-sans text-[#6B5B4E]">{dict.packages.mini.subtitle}</p>
            <p className="text-xs font-sans font-semibold text-[#2C2623] pt-1">{dict.packages.mini.price} • <span className="font-normal italic text-[#C9A96E]">{dict.packages.mini.note}</span></p>
          </div>
          <Link
            href={`/${locale}/contact/`}
            className="px-6 py-2.5 rounded-full bg-[#FFFDF9] border border-[#C9A96E]/50 text-xs font-sans text-[#2C2623] font-medium hover:border-[#C9A96E] whitespace-nowrap cursor-pointer"
          >
            {dict.packages.inquireMini || 'Inquire Mini Setup'}
          </Link>
        </div>
      </section>

      {/* Comprehensive Add-Ons Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
            {dict.packages.customiseTag || 'CUSTOMISE YOUR EXPERIENCE'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2623] font-light">
            {dict.packages.addOnsTitle || 'Optional Event Add-Ons'}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOnCategories.map((cat: any, idx: number) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-[#C9A96E]/30 space-y-4">
              <div className="flex items-center gap-2 border-b border-[#F0E6D6] pb-3 text-[#C9A96E]">
                <Plus className="w-4 h-4" />
                <h3 className="font-serif text-lg text-[#2C2623] font-normal">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item: any, i: number) => (
                  <li key={i} className="flex items-baseline justify-between gap-2 text-xs font-sans">
                    <span className="text-[#2C2623]">{item.name}</span>
                    <span className="text-[#C9A96E] font-medium shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Important Notes */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#C9A96E]/20 space-y-4 text-xs font-sans text-[#6B5B4E]">
          <div className="flex items-center gap-2 text-[#2C2623] font-semibold">
            <AlertCircle className="w-4 h-4 text-[#C9A96E]" />
            <span>{dict.packages.termsTitle || 'Important Terms & Booking Information'}</span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-disc list-inside leading-relaxed">
            {(dict.packages.terms || [
              "Final pricing depends on guest headcount, location & requested add-ons.",
              "Travel fees apply for locations outside Killarney / County Kerry.",
              "Custom packages are fully tailored to your preferred theme & budget.",
              "Venue hire, accommodation & 3rd-party transport are not included unless stated.",
              "A deposit is required to secure your requested date.",
              "Setup, styling, and post-event clean-up are included in core packages."
            ]).map((term: string, idx: number) => (
              <li key={idx}>{term}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
