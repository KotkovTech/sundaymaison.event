'use client';

import { motion } from 'motion/react';
import { Sparkles, Heart, ShieldCheck, Camera, Palette, UserCheck } from 'lucide-react';

interface WhyChooseUsProps {
  dict: any;
}

export function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const icons = [ShieldCheck, Palette, Heart, Camera, Sparkles, UserCheck];

  return (
    <section className="py-24 bg-[#FFFDF9] border-y border-[#C9A96E]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
            {dict.whyChooseUs.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light">
            {dict.whyChooseUs.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.whyChooseUs.items.map((item: any, idx: number) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#C9A96E]/25 hover:border-[#C9A96E] hover:shadow-lg transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F5E6C8]/60 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-[#2C2623] font-normal">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#6B5B4E] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
