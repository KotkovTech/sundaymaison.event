'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface IntroSectionProps {
  dict: any;
}

export function IntroSection({ dict }: IntroSectionProps) {
  return (
    <section className="py-20 bg-[#FFFDF9] border-y border-[#C9A96E]/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[#C9A96E] text-xs font-sans tracking-[0.2em] uppercase font-semibold"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{dict.intro.tag}</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl sm:text-5xl font-serif text-[#2C2623] tracking-wide leading-tight max-w-3xl mx-auto"
        >
          {dict.intro.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base font-sans text-[#6B5B4E] leading-relaxed max-w-2xl mx-auto"
        >
          {dict.intro.description}
        </motion.p>

        <div className="pt-6 flex justify-center">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />
        </div>
      </div>
    </section>
  );
}
