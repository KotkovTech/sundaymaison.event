'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n/config';
import { ArrowRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { getAssetPath } from '@/lib/assets';

interface AboutPreviewProps {
  dict: any;
  locale: Locale;
}

export function AboutPreview({ dict, locale }: AboutPreviewProps) {
  return (
    <section className="py-24 bg-[#FFFDF9] border-y border-[#C9A96E]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden border border-[#C9A96E]/30 shadow-xl"
          >
            <Image
              src={getAssetPath('/gallery/gallery_2.jpg')}
              alt="About Sunday Maison Founder"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-card text-xs font-sans text-[#2C2623] border border-[#C9A96E]/40 flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#C9A96E] shrink-0 fill-[#C9A96E]" />
              <span>{dict.about.values[0].desc}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
              {dict.about.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light leading-tight">
              {dict.about.title}
            </h2>
            <p className="text-sm font-sans text-[#6B5B4E] leading-relaxed">
              {dict.about.text1}
            </p>
            <p className="text-sm font-sans text-[#6B5B4E] leading-relaxed">
              {dict.about.text2}
            </p>

            <div className="pt-4">
              <Link
                href={`/${locale}/about/`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient-bg text-white text-xs font-sans font-medium tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{dict.nav.about}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
