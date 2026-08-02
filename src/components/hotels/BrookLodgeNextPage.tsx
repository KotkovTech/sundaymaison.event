'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Sparkles, Calendar, Coffee, Trees, Bed, Award, X, Check, ArrowUpRight, Compass, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function BrookLodgeNextPage({ locale }: { locale: string }) {
  const [activeModal, setActiveModal] = useState<{ title: string; content: string; image?: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const suites = [
    {
      title: 'Penthouse Garden Sanctuary',
      tag: 'Top Floor Executive Penthouse',
      price: '€320',
      period: 'per night',
      img: '/sites/brook-lodge/assets/images/brook_af6a6672.jpg',
      desc: 'Top-floor sanctuary featuring floor-to-ceiling garden views, plush king bed, marble jacuzzi bathroom, and private espresso bar.'
    },
    {
      title: 'Georgian Luxury King Suite',
      tag: 'Manor Heritage',
      price: '€240',
      period: 'per night',
      img: '/sites/brook-lodge/assets/images/brook_af6a6670.jpg',
      desc: 'Classic Georgian architecture meets modern comfort. Egyptian cotton linens, dual vanity ensuite, and peaceful courtyard views.'
    },
    {
      title: 'Boutique Garden View Double',
      tag: 'Sanctuary Comfort',
      price: '€185',
      period: 'per night',
      img: '/sites/brook-lodge/assets/images/brook_af6a6675.jpg',
      desc: 'Overlooking manicured beech and lime tree gardens. Perfect for peaceful rest after exploring the Ring of Kerry.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#05100B] text-[#F5E6C8] font-sans antialiased overflow-x-hidden relative selection:bg-[#F5E6C8] selection:text-[#05100B]">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#030906] border-b border-[#F5E6C8]/20 py-2.5 px-4 text-center text-xs tracking-widest uppercase font-medium text-[#F5E6C8]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#F5E6C8] animate-pulse" />
            4-STAR SANCTUARY IN SECLUDED PRIVATE GARDENS OFF HIGH STREET
          </span>
          <span className="sm:hidden font-semibold">4-STAR BOUTIQUE SANCTUARY</span>
          <div className="flex items-center gap-6 text-[11px] text-[#A3B8AD]">
            <a href="tel:+353646632388" className="hover:text-[#F5E6C8] transition-colors flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#F5E6C8]" /> +353 (0)64 663 2388</a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@brooklodgekillarney.com" className="hidden md:flex items-center gap-1.5 hover:text-[#F5E6C8] transition-colors"><Mail className="w-3 h-3 text-[#F5E6C8]" /> info@brooklodgekillarney.com</a>
          </div>
        </div>
      </div>

      {/* Floating Header Navbar */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 py-4 bg-[#0A1B14]/85 backdrop-blur-xl border-b border-[#F5E6C8]/20 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${locale}/brook-lodge`} className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-wider uppercase text-white group-hover:text-[#F5E6C8] transition-colors">
              BROOK LODGE
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#F5E6C8] font-semibold">
              BOUTIQUE HOTEL & GARDENS • KILLARNEY
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#A3B8AD]">
            <a href="#overview" className="hover:text-[#F5E6C8] transition-colors">Overview</a>
            <a href="#sanctuary" className="hover:text-[#F5E6C8] transition-colors">Private Gardens</a>
            <a href="#suites" className="hover:text-[#F5E6C8] transition-colors">Luxury Suites</a>
            <a href="#breakfast" className="hover:text-[#F5E6C8] transition-colors">Artisanal Breakfast</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              className="bg-gradient-to-r from-[#F5E6C8] via-[#FFF] to-[#C9A96E] hover:from-[#FFF] hover:to-[#F5E6C8] text-[#05100B] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm shadow-[0_0_20px_rgba(245,230,200,0.3)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Sanctuary
            </Button>

            <button 
              className="lg:hidden p-2 text-[#F5E6C8] rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <div className="space-y-1.5 w-6"><div className="h-0.5 bg-[#F5E6C8] rounded-full"></div><div className="h-0.5 bg-[#F5E6C8] rounded-full"></div><div className="h-0.5 bg-[#F5E6C8] rounded-full"></div></div>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A1B14] border-b border-[#F5E6C8]/30 px-6 py-6 space-y-4 text-sm uppercase tracking-widest font-medium text-[#F5E6C8]"
          >
            <nav className="flex flex-col gap-4">
              <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Sanctuary Overview</a>
              <a href="#sanctuary" onClick={() => setMobileMenuOpen(false)}>Private Gardens</a>
              <a href="#suites" onClick={() => setMobileMenuOpen(false)}>Suites & Penthouse</a>
              <a href="#breakfast" onClick={() => setMobileMenuOpen(false)}>Artisanal Kerry Breakfast</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,16,11,0.6), rgba(5,16,11,0.95)), url('/sites/brook-lodge/assets/images/brook_brook_lodge_1.jpg')` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E2017]/80 border border-[#F5E6C8]/40 text-[11px] font-semibold tracking-[0.3em] text-[#F5E6C8] uppercase shadow-lg backdrop-blur-md"
          >
            <Trees className="w-3.5 h-3.5" />
            GEORGIAN MANOR ESTATE • PRIVATE MANICURED GARDENS
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-white leading-tight tracking-tight"
          >
            Understated Luxury & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#F5E6C8] to-[#C9A96E] bg-clip-text text-transparent italic font-normal">
              Tranquil Natural Beauty
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-[#A3B8AD] font-light leading-relaxed"
          >
            A deeply pretty Georgian manor house set in secluded private gardens off High Street. Featuring 30 bespoke rooms and penthouses, artisanal Kerry breakfasts, and peaceful sleep.
          </motion.p>

          {/* Interactive Booking Widget */}
          <motion.div 
            id="bookingWidget"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-[#0E2017]/90 backdrop-blur-2xl border border-[#F5E6C8]/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left max-w-4xl mx-auto"
          >
            <form onSubmit={(e) => { e.preventDefault(); showToast('Direct guaranteed rates checked for Brook Lodge!'); }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-end">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#F5E6C8] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Arrival Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#F5E6C8] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#F5E6C8] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Departure Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#F5E6C8] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#F5E6C8] font-bold">Suite Category</label>
                <select className="w-full bg-[#152E22] border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#F5E6C8] transition-colors">
                  <option>Penthouse Garden Sanctuary</option>
                  <option>Georgian Luxury King Suite</option>
                  <option>Boutique Garden View Double</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#F5E6C8] to-[#C9A96E] hover:from-white hover:to-[#F5E6C8] text-[#05100B] font-bold text-xs uppercase tracking-widest py-3 rounded-md shadow-lg transition-all cursor-pointer">
                Check Best Rates
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Sanctuary Overview */}
      <section id="sanctuary" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#F5E6C8] uppercase flex items-center gap-2">
              <Trees className="w-4 h-4 text-[#F5E6C8]" /> PRIVATE HIGH STREET HAVEN
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              Manicured Gardens & Peaceful Rest
            </h2>
            <p className="text-xs sm:text-sm text-[#A3B8AD] leading-relaxed font-light">
              Hidden away at the end of High Street, Brook Lodge feels like a world of its own. Stone fountains, ancient lime trees, and quiet garden terraces provide the ultimate peaceful weekend getaway.
            </p>
          </div>

          <div className="h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-[#F5E6C8]/30 shadow-2xl group">
            <img src="/sites/brook-lodge/assets/images/brook_brook_lodge_3.jpg" alt="Brook Lodge Gardens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Suites Showcase */}
      <section id="suites" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold tracking-[0.3em] text-[#F5E6C8] uppercase">SUITES COLLECTION</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">Bespoke Accommodations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((s, idx) => (
            <motion.div key={idx} className="bg-[#0E2017] border border-[#F5E6C8]/25 hover:border-[#F5E6C8] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#05100B]/85 backdrop-blur-md border border-[#F5E6C8]/40 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#F5E6C8] font-semibold">
                  {s.tag}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-[#A3B8AD] leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#F5E6C8]">{s.price} <span className="text-[10px] font-sans font-normal uppercase text-[#A3B8AD]">{s.period}</span></span>
                  <Button className="bg-[#F5E6C8] text-[#05100B] font-bold text-xs uppercase tracking-widest cursor-pointer" onClick={() => setActiveModal({ title: s.title, content: s.desc, image: s.img })}>
                    Reserve
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030906] border-t border-white/10 py-12 px-4 text-center text-xs text-[#A3B8AD]">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-serif text-xl text-white font-light uppercase tracking-wider">Brook Lodge Boutique Hotel</p>
          <p>© 2026 Brook Lodge Boutique Hotel. All rights reserved. Redesigned with World-Class Hyper-Luxury Standards.</p>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-[#0E2017] border border-[#F5E6C8]/50 max-w-lg w-full p-6 sm:p-8 rounded-xl relative space-y-5 shadow-2xl">
              <button className="absolute top-4 right-4 text-[#A3B8AD] hover:text-white" onClick={() => setActiveModal(null)}><X className="w-6 h-6" /></button>
              {activeModal.image && <div className="h-44 rounded-lg overflow-hidden border border-white/10"><img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" /></div>}
              <h3 className="font-serif text-2xl text-white">{activeModal.title}</h3>
              <p className="text-xs text-[#A3B8AD] whitespace-pre-line leading-relaxed">{activeModal.content}</p>
              <Button className="w-full bg-[#F5E6C8] text-[#05100B] font-bold text-xs uppercase tracking-widest py-3 rounded cursor-pointer" onClick={() => setActiveModal(null)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-6 right-6 z-50 bg-[#0E2017] border-l-4 border-[#F5E6C8] px-6 py-4 rounded-lg shadow-2xl text-xs text-white font-medium">
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Booking Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1B14]/95 backdrop-blur-lg border-t border-[#F5E6C8]/30 p-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase text-[#F5E6C8] font-semibold block">Brook Lodge</span>
          <span className="text-xs text-white font-bold">Best Direct Rate Guarantee</span>
        </div>
        <Button 
          className="bg-[#F5E6C8] text-[#05100B] font-bold text-xs uppercase tracking-wider px-5 py-2 rounded shadow-lg cursor-pointer"
          onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </Button>
      </div>

    </div>
  );
}
