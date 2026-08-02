'use client';

import Link from 'next/link';
import { Locale } from '@/i18n/config';
import { Sparkles, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactCTAProps {
  dict: any;
  locale: Locale;
}

export function ContactCTA({ dict, locale }: ContactCTAProps) {
  return (
    <section className="py-24 bg-[#1F1916] text-[#FAF7F2] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A96E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#C9A96E]/30 text-xs font-sans text-[#E5D5B5]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span>{dict.contactCTA?.tag || 'SUNDAY MAISON EVENTS'}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF7F2] font-light leading-tight"
        >
          {dict.contact.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs sm:text-sm font-sans text-[#FAF7F2]/70 max-w-xl mx-auto leading-relaxed"
        >
          {dict.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            href={`/${locale}/contact/`}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient-bg text-white font-sans text-xs sm:text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>{dict.nav.contact}</span>
          </Link>

          <a
            href="https://wa.me/353870000000?text=Hello%20Sunday%20Maison!%20I%20would%20like%20to%20inquire%20about%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FAF7F2]/10 border border-[#C9A96E]/40 text-[#FAF7F2] hover:bg-[#C9A96E] hover:text-[#1F1916] font-sans text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{dict.contactCTA?.whatsapp || 'WhatsApp'}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
