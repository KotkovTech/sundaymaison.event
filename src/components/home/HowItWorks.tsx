'use client';

import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface HowItWorksProps {
  dict: any;
}

export function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
            {dict.howItWorks.tag}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light">
            {dict.howItWorks.title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A96E] mx-auto mt-4" />
        </div>

        {/* 5 Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {dict.howItWorks.steps.map((step: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-6 border border-[#C9A96E]/30 relative flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                <span className="text-3xl font-serif text-[#C9A96E] font-semibold block group-hover:scale-110 transition-transform origin-left">
                  {step.num}
                </span>
                <h3 className="text-lg font-serif text-[#2C2623] font-normal">
                  {step.title}
                </h3>
                <p className="text-xs font-sans text-[#6B5B4E] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < 4 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[#C9A96E]/40 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
