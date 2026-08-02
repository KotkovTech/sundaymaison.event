'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ExternalLink, ShieldCheck, Compass, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MasterPortalNextPage({ locale }: { locale: string }) {
  const hotels = [
    {
      id: 'eviston',
      title: 'Eviston House Hotel',
      subtitle: 'Town Centre Heritage & Danny Mann Pub',
      desc: 'Obsidian & Gold luxury retreat located in Killarney town centre. Home to traditional Danny Mann pub live music, Colleen Bawn candlelight dining, and fitness suite.',
      img: '/sites/assets/eviston_facade.jpg',
      url: `/${locale}/eviston`,
      externalUrl: 'https://kotkovtech.github.io/eviston-house-hotel/',
      badge: 'Heritage & Live Music'
    },
    {
      id: 'brook',
      title: 'Brook Lodge Boutique Hotel',
      subtitle: '4-Star Sanctuary & Private Gardens',
      desc: 'Emerald Silk & Champagne Gold 4-star boutique hotel. Featuring private landscaped beech gardens, artisanal Kerry breakfast, and quiet Georgian manor sleep.',
      img: '/sites/assets/brook_facade.jpg',
      url: `/${locale}/brook-lodge`,
      externalUrl: 'https://kotkovtech.github.io/brook-lodge-hotel/',
      badge: 'Boutique & Gardens'
    },
    {
      id: 'killeen',
      title: 'Killeen House Hotel',
      subtitle: '19th-Century Estate & Rozzers Fine Dining',
      desc: 'Stately Manor Green & Vintage Gold estate in Aghadoe. Home to award-winning Rozzers Fine Dining Restaurant and the world-famous 9,000+ Golf Ball Bar.',
      img: '/sites/assets/killeen_golden_sunset_manor_2026.jpg',
      url: `/${locale}/killeen`,
      externalUrl: 'https://kotkovtech.github.io/killeen-house-hotel/',
      badge: 'Fine Dining & Golf'
    }
  ];

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F3F4F6] font-sans antialiased py-20 px-4 sm:px-8 selection:bg-[#D4AF37] selection:text-[#07080A]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1812]/80 border border-[#D4AF37]/40 text-[11px] font-semibold tracking-[0.35em] text-[#D4AF37] uppercase shadow-lg backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5" />
            WORLD-CLASS ULTRA-LUXURY REDESIGN COLLECTION
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-extralight tracking-tight"
          >
            Killarney Luxury Hotels
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#9BA1B0] leading-relaxed font-light max-w-2xl mx-auto"
          >
            Three iconic Killarney hotel destinations completely reimagined with top world-class editorial aesthetics, Next.js App Router, Tailwind v4, Motion animations, and interactive booking widgets.
          </motion.p>
        </div>

        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
          {hotels.map((hotel, idx) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#11141A] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hotel.img} 
                  alt={hotel.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <span className="absolute top-4 left-4 bg-[#07080A]/85 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {hotel.badge}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block mb-1">{hotel.subtitle}</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white mb-3 font-normal">{hotel.title}</h2>
                  <p className="text-xs text-[#9BA1B0] leading-relaxed font-light">{hotel.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link href={hotel.url} className="w-full block">
                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B89628] hover:from-white hover:to-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-widest py-3 rounded shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2">
                      <span>Explore Next.js App</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <a href={hotel.externalUrl} target="_blank" rel="noreferrer" className="block">
                    <Button variant="outline" className="w-full border-white/20 text-white/80 hover:text-white text-[11px] uppercase tracking-wider py-2.5 cursor-pointer flex items-center justify-center gap-1.5">
                      <span>Live GitHub Pages</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-[#9BA1B0] pt-12 border-t border-white/10">
          <p>© 2026 Killarney Luxury Hotels Collection • Published to GitHub: KotkovTech/killarney-hotels-portal</p>
        </footer>
      </div>
    </div>
  );
}
