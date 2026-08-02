'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Sparkles, Calendar, Utensils, Flag, Award, X, Check, ArrowUpRight, Compass, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function KilleenNextPage({ locale }: { locale: string }) {
  const [activeModal, setActiveModal] = useState<{ title: string; content: string; image?: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const rooms = [
    {
      title: 'Golfers Executive Manor Suite',
      tag: 'Spacious Estate Suite',
      price: '€290',
      period: 'per night',
      img: '/sites/killeen-house/assets/images/killeen_2.jpg',
      desc: 'Top-tier estate suite featuring dedicated lounge area, four-poster bed, rainfall shower, and views over Aghadoe rolling hills.'
    },
    {
      title: 'Superior Garden View Room',
      tag: 'Garden View Comfort',
      price: '€210',
      period: 'per night',
      img: '/sites/killeen-house/assets/images/killeen_3.jpg',
      desc: 'Overlooking 1.5 acres of manicured estate lawns. Features orthopedic king mattress and luxury Kerry toiletries.'
    },
    {
      title: 'Manor Classic Double',
      tag: '19th-Century Heritage',
      price: '€175',
      period: 'per night',
      img: '/sites/killeen-house/assets/images/killeen_4.jpg',
      desc: 'Charming country house decor, original period details, high-speed Wi-Fi, and cooked-to-order breakfast.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#040D09] text-[#E6C887] font-sans antialiased overflow-x-hidden relative selection:bg-[#C5A059] selection:text-[#040D09]">
      
      {/* Top Announcement Bar */}
      <div className="bg-[#020705] border-b border-[#C5A059]/20 py-2.5 px-4 text-center text-xs tracking-widest uppercase font-medium text-[#C5A059]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
            HOME TO ROZZERS FINE DINING & WORLD-FAMOUS 9,000+ GOLF BALL BAR IN AGHADOE
          </span>
          <span className="sm:hidden font-semibold">ROZZERS FINE DINING & GOLF BAR</span>
          <div className="flex items-center gap-6 text-[11px] text-[#9BB3A7]">
            <a href="tel:+353646631711" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#C5A059]" /> +353 (0)64 663 1711</a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@killeenhousehotel.com" className="hidden md:flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"><Mail className="w-3 h-3 text-[#C5A059]" /> info@killeenhousehotel.com</a>
          </div>
        </div>
      </div>

      {/* Floating Header Navbar */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 py-4 bg-[#0A1B13]/85 backdrop-blur-xl border-b border-[#C5A059]/20 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${locale}/killeen`} className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-wider uppercase text-white group-hover:text-[#C5A059] transition-colors">
              KILLEEN HOUSE
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#C5A059] font-semibold">
              HOTEL & ROZZERS RESTAURANT • AGHADOE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#9BB3A7]">
            <a href="#overview" className="hover:text-[#C5A059] transition-colors">Overview</a>
            <a href="#rozzers" className="hover:text-[#C5A059] transition-colors">Rozzers Fine Dining</a>
            <a href="#golfbar" className="hover:text-[#C5A059] transition-colors">Golf Ball Bar</a>
            <a href="#rooms" className="hover:text-[#C5A059] transition-colors">Manor Rooms</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              className="bg-gradient-to-r from-[#C5A059] via-[#E6C887] to-[#997736] hover:from-white hover:to-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Manor Stay
            </Button>

            <button 
              className="lg:hidden p-2 text-[#C5A059] rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <div className="space-y-1.5 w-6"><div className="h-0.5 bg-[#C5A059] rounded-full"></div><div className="h-0.5 bg-[#C5A059] rounded-full"></div><div className="h-0.5 bg-[#C5A059] rounded-full"></div></div>}
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
            className="lg:hidden bg-[#0A1B13] border-b border-[#C5A059]/30 px-6 py-6 space-y-4 text-sm uppercase tracking-widest font-medium text-[#C5A059]"
          >
            <nav className="flex flex-col gap-4">
              <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Estate Overview</a>
              <a href="#rozzers" onClick={() => setMobileMenuOpen(false)}>Rozzers Fine Dining</a>
              <a href="#golfbar" onClick={() => setMobileMenuOpen(false)}>Famous Golf Ball Bar</a>
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)}>Manor Guestrooms</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(4,13,9,0.6), rgba(4,13,9,0.95)), url('/sites/killeen-house/assets/images/killeen_building.jpg')` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A1B13]/80 border border-[#C5A059]/40 text-[11px] font-semibold tracking-[0.3em] text-[#C5A059] uppercase shadow-lg backdrop-blur-md"
          >
            <Flag className="w-3.5 h-3.5" />
            19TH-CENTURY MANOR RETREAT • AGHADOE, KILLARNEY
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-white leading-tight tracking-tight"
          >
            Culinary Excellence & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#E6C887] to-[#C5A059] bg-clip-text text-transparent italic font-normal">
              Golfing Heritage
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-[#9BB3A7] font-light leading-relaxed"
          >
            Nestled on 1.5 acres of manicured gardens in peaceful Aghadoe. Home to award-winning Rozzers Restaurant and the world-famous Golf Ball Bar with 9,000+ logo balls.
          </motion.p>

          {/* Booking Widget */}
          <motion.div 
            id="bookingWidget"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-[#0A1B13]/90 backdrop-blur-2xl border border-[#C5A059]/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left max-w-4xl mx-auto"
          >
            <form onSubmit={(e) => { e.preventDefault(); showToast('Direct guaranteed rates checked for Killeen House!'); }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-end">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Arrival Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#C5A059] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Departure Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#C5A059] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">Manor Category</label>
                <select className="w-full bg-[#132A1F] border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#C5A059] transition-colors">
                  <option>Golfers Executive Manor Suite</option>
                  <option>Superior Garden View Room</option>
                  <option>Manor Classic Double</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#C5A059] to-[#997736] hover:from-white hover:to-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-widest py-3 rounded-md shadow-lg transition-all cursor-pointer">
                Check Best Rates
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Rozzers Fine Dining */}
      <section id="rozzers" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="bg-gradient-to-r from-[#040D09] via-[#0D241A] to-[#040D09] border border-[#C5A059]/30 rounded-2xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase flex items-center gap-2">
              <Utensils className="w-4 h-4 text-[#C5A059]" /> FINE DINING DESTINATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              Award-Winning Rozzers Restaurant
            </h2>
            <p className="text-xs sm:text-sm text-[#9BB3A7] leading-relaxed font-light">
              Helmed by Head Chef Dermot Brennan, Rozzers is voted Kerry's Fine Dining Restaurant of the Year. Indulge in fresh Atlantic seafood, prime Kerry beef, and world-class wine pairings.
            </p>
            <Button className="bg-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded cursor-pointer hover:bg-white transition-all" onClick={() => setActiveModal({ title: 'Rozzers Fine Dining Menu', content: 'Open Daily 6:30 PM - 9:30 PM.\n\n• Pan-Seared Dingle Scallops\n• Prime Fillet of Kerry Beef with Truffle Jus\n• Wild Kerry Venison Saddle\n\nReservations highly recommended!' })}>
              View Dinner Menu
            </Button>
          </div>

          <div className="h-72 sm:h-96 rounded-xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
            <img src="/sites/killeen-house/assets/images/killeen_rozzers.jpg" alt="Rozzers Fine Dining" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section id="rooms" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold tracking-[0.3em] text-[#C5A059] uppercase">MANOR ACCOMMODATIONS</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">Manor Rooms & Suites</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((r, idx) => (
            <motion.div key={idx} className="bg-[#0A1B13] border border-[#C5A059]/25 hover:border-[#C5A059] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={r.img} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#040D09]/85 backdrop-blur-md border border-[#C5A059]/40 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                  {r.tag}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">{r.title}</h3>
                  <p className="text-xs text-[#9BB3A7] leading-relaxed">{r.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-[#C5A059]">{r.price} <span className="text-[10px] font-sans font-normal uppercase text-[#9BB3A7]">{r.period}</span></span>
                  <Button className="bg-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-widest cursor-pointer" onClick={() => setActiveModal({ title: r.title, content: r.desc, image: r.img })}>
                    Reserve
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020705] border-t border-white/10 py-12 px-4 text-center text-xs text-[#9BB3A7]">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-serif text-xl text-white font-light uppercase tracking-wider">Killeen House Hotel & Rozzers Restaurant</p>
          <p>© 2026 Killeen House Hotel. All rights reserved. Redesigned with World-Class Hyper-Luxury Standards.</p>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="bg-[#0A1B13] border border-[#C5A059]/50 max-w-lg w-full p-6 sm:p-8 rounded-xl relative space-y-5 shadow-2xl">
              <button className="absolute top-4 right-4 text-[#9BB3A7] hover:text-white" onClick={() => setActiveModal(null)}><X className="w-6 h-6" /></button>
              {activeModal.image && <div className="h-44 rounded-lg overflow-hidden border border-white/10"><img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" /></div>}
              <h3 className="font-serif text-2xl text-white">{activeModal.title}</h3>
              <p className="text-xs text-[#9BB3A7] whitespace-pre-line leading-relaxed">{activeModal.content}</p>
              <Button className="w-full bg-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-widest py-3 rounded cursor-pointer" onClick={() => setActiveModal(null)}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-6 right-6 z-50 bg-[#0A1B13] border-l-4 border-[#C5A059] px-6 py-4 rounded-lg shadow-2xl text-xs text-white font-medium">
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Booking Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1B13]/95 backdrop-blur-lg border-t border-[#C5A059]/30 p-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase text-[#C5A059] font-semibold block">Killeen House</span>
          <span className="text-xs text-white font-bold">Best Direct Rate Guarantee</span>
        </div>
        <Button 
          className="bg-[#C5A059] text-[#040D09] font-bold text-xs uppercase tracking-wider px-5 py-2 rounded shadow-lg cursor-pointer"
          onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </Button>
      </div>

    </div>
  );
}
