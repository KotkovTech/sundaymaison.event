'use client';

import Link from 'next/link';
import { Locale } from '@/i18n/config';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { getAssetPath } from '@/lib/assets';

interface HeroSectionProps {
  dict: any;
  locale: Locale;
}

export function HeroSection({ dict, locale }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={getAssetPath('/gallery/gallery_5.mp4')} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1916]/70 via-[#1F1916]/50 to-[#1F1916]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8 pt-36 sm:pt-28 pb-20">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-sans text-white/90 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
          <span>{dict.hero.locationBadge}</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h2 className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase text-[#C9A96E] font-semibold">
            {dict.hero.subtitle}
          </h2>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-serif font-light text-white leading-[1.15] tracking-tight drop-shadow-lg">
            {dict.hero.title}
          </h1>
        </motion.div>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm sm:text-base font-sans text-white/80 leading-relaxed font-normal"
        >
          {dict.hero.description}
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href={`/${locale}/contact/`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-white font-sans text-xs sm:text-sm font-medium tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{dict.hero.ctaPrimary}</span>
          </Link>

          <Link
            href={`/${locale}/packages/`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-sans text-xs sm:text-sm font-medium tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{dict.hero.ctaPackages}</span>
            <ArrowRight className="w-4 h-4 text-[#C9A96E]" />
          </Link>
        </motion.div>
      </div>

      {/* Custom Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer group"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C9A96E] font-medium group-hover:text-white transition-colors">
          {dict.hero.scrollDown || 'Scroll Down'}
        </span>
        {/* Animated Custom Arrow Badge */}
        <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-[#C9A96E]/50 group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/20 flex items-center justify-center shadow-lg transition-all duration-300">
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
}
