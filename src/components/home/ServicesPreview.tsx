'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n/config';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { getAssetPath } from '@/lib/assets';

interface ServicesPreviewProps {
  dict: any;
  locale: Locale;
}

export function ServicesPreview({ dict, locale }: ServicesPreviewProps) {
  const servicesList = [
    {
      key: 'henParties',
      data: dict.services.henParties,
      image: '/gallery/gallery_1.jpg',
      badge: dict.services.badges?.hen || 'Popular Choice',
    },
    {
      key: 'bridalEvents',
      data: dict.services.bridalEvents,
      image: '/gallery/gallery_14.jpg',
      badge: dict.services.badges?.bridal || 'Bridal Morning',
    },
    {
      key: 'privateCelebrations',
      data: dict.services.privateCelebrations,
      image: '/gallery/gallery_4.jpg',
      badge: dict.services.badges?.private || 'Birthdays & Picnics',
    },
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
            {dict.services.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light">
            {dict.services.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4" />
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col border border-[#C9A96E]/30"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={getAssetPath(service.image)}
                  alt={service.data.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md text-[10px] font-sans font-medium text-[#2C2623] shadow-xs">
                  {service.badge}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-serif text-white tracking-wide">
                  {service.data.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm font-sans text-[#6B5B4E] leading-relaxed">
                  {service.data.desc}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#F0E6D6]">
                  {service.data.items.slice(0, 4).map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-sans text-[#2C2623]">
                      <Check className="w-3.5 h-3.5 text-[#C9A96E] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href={`/${locale}/services/`}
                    className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#C9A96E] hover:text-[#B59458] group-hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    <span>{dict.services.viewAll}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
