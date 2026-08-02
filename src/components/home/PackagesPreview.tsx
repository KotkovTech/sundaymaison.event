'use client';

import Link from 'next/link';
import { Locale } from '@/i18n/config';
import { Sparkles, ArrowRight, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface PackagesPreviewProps {
  dict: any;
  locale: Locale;
}

export function PackagesPreview({ dict, locale }: PackagesPreviewProps) {
  const packages = [
    {
      key: 'essential',
      data: dict.packages.essential,
      price: '€750',
      popular: false,
    },
    {
      key: 'signature',
      data: dict.packages.signature,
      price: '€1,650',
      popular: true,
    },
    {
      key: 'luxury',
      data: dict.packages.luxury,
      price: '€3,500',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
            {dict.packages.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light">
            {dict.packages.title}
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#6B5B4E]">
            {dict.packages.subtitle}
          </p>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4" />
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => {
            const isPop = pkg.popular;
            return (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  isPop
                    ? 'bg-[#FFFDF9] border-2 border-[#C9A96E] shadow-xl scale-100 lg:-translate-y-2'
                    : 'glass-card border border-[#C9A96E]/30 hover:border-[#C9A96E]/60 shadow-md'
                }`}
              >
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient-bg text-white text-[11px] font-sans font-semibold tracking-wider flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-white text-white" />
                    <span>{dict.packages.mostPopular}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2 border-b border-[#F0E6D6] pb-6">
                    <h3 className="text-2xl font-serif text-[#2C2623] font-normal">
                      {pkg.data.name}
                    </h3>
                    <p className="text-xs font-sans text-[#6B5B4E] leading-relaxed">
                      {pkg.data.subtitle}
                    </p>
                    <div className="pt-2 flex items-baseline gap-1">
                      <span className="text-xs font-sans text-[#6B5B4E] uppercase">{dict.packages.startingFrom}</span>
                      <span className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2623]">{pkg.price}</span>
                    </div>
                    <p className="text-[11px] font-sans text-[#C9A96E] font-medium pt-1">
                      {pkg.data.guests}
                    </p>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {pkg.data.includes.map((inc: string, i: number) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#2C2623]">
                        <Check className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-8 border-t border-[#F0E6D6] mt-8">
                  <Link
                    href={`/${locale}/packages/`}
                    className={`w-full py-3 rounded-full text-xs font-sans font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isPop
                        ? 'gold-gradient-bg text-white shadow-md hover:shadow-lg'
                        : 'bg-[#FAF7F2] text-[#2C2623] border border-[#C9A96E]/40 hover:border-[#C9A96E]'
                    }`}
                  >
                    <span>{dict.packages.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-xs font-sans text-[#6B5B4E] max-w-2xl mx-auto">
            {dict.packages.customQuoteNote}
          </p>
        </div>
      </div>
    </section>
  );
}
