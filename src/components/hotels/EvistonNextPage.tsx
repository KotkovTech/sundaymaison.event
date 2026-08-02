'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Sparkles, Calendar, Coffee, Dumbbell, Music, Utensils, 
  ChevronRight, Star, ShieldCheck, Award, X, Check, ArrowUpRight, Compass, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EvistonNextPage({ locale }: { locale: string }) {
  const [activeTab, setActiveTab] = useState<'all' | 'suite' | 'deluxe' | 'family'>('all');
  const [activeModal, setActiveModal] = useState<{ title: string; content: string; image?: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const roomCategories = [
    {
      id: 'suite-1',
      type: 'suite',
      title: 'The Danny Mann Executive Suite',
      tag: 'Ultra-Luxury Master Suite',
      price: '€285',
      period: 'per night',
      img: '/sites/eviston-house/assets/images/eviston_af6a6649.jpg',
      features: ['King Four-Poster Bed', 'Private Whirlpool Spa Bath', 'Town Centre Park View', 'Espresso Machine & Champagne Welcome']
    },
    {
      id: 'deluxe-1',
      type: 'deluxe',
      title: 'Colleen Bawn Deluxe King Room',
      tag: 'Heritage Comfort',
      price: '€195',
      period: 'per night',
      img: '/sites/eviston-house/assets/images/eviston_af6a6642.jpg',
      features: ['Super King Plush Bedding', 'Marble Ensuite Bathroom', 'High-Speed Wi-Fi 6', 'Complimentary Sauna & Gym Access']
    },
    {
      id: 'family-1',
      type: 'family',
      title: 'Killarney Heritage Family Suite',
      tag: 'Spacious Family Haven',
      price: '€240',
      period: 'per night',
      img: '/sites/eviston-house/assets/images/eviston_af6a6647.jpg',
      features: ['1 King Bed + 2 Twin Beds', 'Spacious Lounge Area', 'Smart Flat Screen TV', 'Full Cooked Irish Breakfast Included']
    },
    {
      id: 'deluxe-2',
      type: 'deluxe',
      title: 'Traditional Townside Double',
      tag: 'Boutique Classic',
      price: '€165',
      period: 'per night',
      img: '/sites/eviston-house/assets/images/eviston_af6a6652.jpg',
      features: ['Orthopedic King Mattress', 'Rainfall Showerhead', '24/7 Room Service', 'Walk to National Park']
    }
  ];

  const filteredRooms = activeTab === 'all' 
    ? roomCategories 
    : roomCategories.filter(r => r.type === activeTab);

  return (
    <div className="min-h-screen bg-[#07080A] text-[#F3F4F6] font-sans antialiased overflow-x-hidden relative selection:bg-[#D4AF37] selection:text-[#07080A]">
      
      {/* Ultra-Luxury Gold Announcement Bar */}
      <div className="bg-gradient-to-r from-[#0D0E12] via-[#1C170C] to-[#0D0E12] border-b border-[#D4AF37]/20 py-2.5 px-4 text-center text-xs tracking-widest uppercase font-medium text-[#D4AF37]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            DIRECT BOOKING GUARANTEE: Complimentary Welcome Drink at Danny Mann Pub
          </span>
          <span className="sm:hidden font-semibold">TOWN CENTRE LUXURY RETREAT</span>
          <div className="flex items-center gap-6 text-[11px] text-[#A6ADB8]">
            <a href="tel:+353646631600" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#D4AF37]" /> +353 (0)64 663 1600</a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:info@evistonhouse.com" className="hidden md:flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors"><Mail className="w-3 h-3 text-[#D4AF37]" /> info@evistonhouse.com</a>
          </div>
        </div>
      </div>

      {/* Floating Glassmorphism Sticky Navigation Header */}
      <header className="sticky top-0 z-50 px-4 sm:px-8 py-4 bg-[#090A0C]/85 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${locale}/eviston`} className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-wider uppercase text-white group-hover:text-[#D4AF37] transition-colors">
              EVISTON HOUSE
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#D4AF37] font-semibold">
              LUXURY HOTEL & DANNY MANN PUB • KILLARNEY
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#C4C9D4]">
            <a href="#overview" className="hover:text-[#D4AF37] transition-colors">Overview</a>
            <a href="#rooms" className="hover:text-[#D4AF37] transition-colors">Suites</a>
            <a href="#dannymann" className="hover:text-[#D4AF37] transition-colors">Danny Mann Pub</a>
            <a href="#dining" className="hover:text-[#D4AF37] transition-colors">Colleen Bawn</a>
            <a href="#wellness" className="hover:text-[#D4AF37] transition-colors">Fitness & Sauna</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] hover:from-[#FFF] hover:to-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve Stay
            </Button>

            <button 
              className="lg:hidden p-2 text-[#D4AF37] rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <div className="space-y-1.5 w-6"><div className="h-0.5 bg-[#D4AF37] rounded-full"></div><div className="h-0.5 bg-[#D4AF37] rounded-full"></div><div className="h-0.5 bg-[#D4AF37] rounded-full"></div></div>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0E12] border-b border-[#D4AF37]/30 px-6 py-6 space-y-4 text-sm uppercase tracking-widest font-medium text-[#D4AF37]"
          >
            <nav className="flex flex-col gap-4">
              <a href="#overview" onClick={() => setMobileMenuOpen(false)}>Hotel Overview</a>
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)}>Luxury Suites & Rooms</a>
              <a href="#dannymann" onClick={() => setMobileMenuOpen(false)}>Danny Mann Traditional Pub</a>
              <a href="#dining" onClick={() => setMobileMenuOpen(false)}>Colleen Bawn Candlelight Dining</a>
              <a href="#wellness" onClick={() => setMobileMenuOpen(false)}>Sauna & Fitness Suite</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ultra-Luxury Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-[0.45] scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `linear-gradient(to bottom, rgba(7,8,10,0.6), rgba(7,8,10,0.95)), url('/sites/eviston-house/assets/images/eviston_hero.jpg')` }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1812]/80 border border-[#D4AF37]/40 text-[11px] font-semibold tracking-[0.3em] text-[#D4AF37] uppercase shadow-lg backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5" />
            TOWN CENTRE HERITAGE RETREAT • KILLARNEY NATIONAL PARK GATEWAY
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl font-extralight text-white leading-tight tracking-tight"
          >
            Timeless Hospitality & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent italic font-normal">
              Authentic Irish Spirit
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-[#B0B7C4] font-light leading-relaxed"
          >
            Located steps from Killarney National Park on New Street. Offering 76 refined guestrooms, traditional candlelight dining at Colleen Bawn, live nightly traditional Irish music at Danny Mann Pub, and private sauna facilities.
          </motion.p>

          {/* Interactive Liquid Glass Booking Bar Widget */}
          <motion.div 
            id="bookingWidget"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 p-6 bg-[#11141A]/90 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left max-w-4xl mx-auto"
          >
            <form onSubmit={(e) => { e.preventDefault(); showToast('Direct guaranteed rates checked for Eviston House!'); }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 items-end">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Arrival Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> Departure Date
                </label>
                <input type="date" required className="w-full bg-white/5 border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#D4AF37] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Suite Category</label>
                <select className="w-full bg-[#181C24] border border-white/15 rounded-md px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#D4AF37] transition-colors">
                  <option>Danny Mann Executive Suite</option>
                  <option>Colleen Bawn Deluxe King</option>
                  <option>Killarney Family Suite</option>
                  <option>Traditional Double & Twin</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B89628] hover:from-white hover:to-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-widest py-3 rounded-md shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer">
                Check Best Rates
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Hotel Overview & Highlights */}
      <section id="overview" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D4AF37]" /> OVER 150 YEARS OF HOSPITALITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light leading-tight">
              An Iconic Killarney Town Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A7B5] leading-relaxed font-light">
              Family owned and operated for generations, Eviston House Hotel seamlessly combines historic Kerry charm with high-end modern amenities. Located directly in Killarney town centre, guests enjoy instant access to shopping, dining, and the breathtaking lakes of Killarney National Park.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#11141A] border border-[#D4AF37]/20 rounded-lg">
                <span className="text-2xl font-serif font-bold text-[#D4AF37] block">76</span>
                <span className="text-[11px] text-[#A0A7B5] uppercase tracking-wider">Luxury Guestrooms</span>
              </div>
              <div className="p-4 bg-[#11141A] border border-[#D4AF37]/20 rounded-lg">
                <span className="text-2xl font-serif font-bold text-[#D4AF37] block">7 Nights</span>
                <span className="text-[11px] text-[#A0A7B5] uppercase tracking-wider">Live Traditional Music</span>
              </div>
            </div>
          </div>

          <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl group">
            <img src="/sites/eviston-house/assets/images/eviston_facade.jpg" alt="Eviston House Hotel Facade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#090A0C]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-lg text-xs text-white">
              <p className="font-semibold text-[#D4AF37]">Prime Central Location</p>
              <p className="text-[11px] text-[#A0A7B5]">New Street, Town Centre, Killarney, Co. Kerry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Showcase */}
      <section id="rooms" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">ACCOMMODATION COLLECTION</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">Refined Suites & Guestrooms</h2>
          <p className="text-xs sm:text-sm text-[#A0A7B5]">Every room is individually styled with plush bedding, marble ensuite bathrooms, and high-speed Wi-Fi.</p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 pt-6 flex-wrap">
            {[
              { id: 'all', label: 'All Rooms' },
              { id: 'suite', label: 'Suites' },
              { id: 'deluxe', label: 'Deluxe' },
              { id: 'family', label: 'Family Rooms' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-[#D4AF37] text-[#07080A] shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                    : 'bg-[#11141A] text-[#A0A7B5] border border-white/10 hover:border-[#D4AF37]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRooms.map(room => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#11141A] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={room.img} alt={room.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#07080A]/85 backdrop-blur-md border border-[#D4AF37]/40 px-3 py-1 rounded text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {room.tag}
                </span>
                <span className="absolute bottom-4 right-4 bg-[#D4AF37] text-[#07080A] px-3.5 py-1.5 rounded font-serif font-bold text-sm">
                  {room.price} <span className="text-[10px] font-sans font-normal uppercase">{room.period}</span>
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-serif text-2xl text-white">{room.title}</h3>
                <ul className="space-y-2 text-xs text-[#A0A7B5]">
                  {room.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full mt-4 bg-transparent border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#07080A] text-white font-bold text-xs uppercase tracking-widest py-2.5 rounded transition-all cursor-pointer"
                  onClick={() => setActiveModal({
                    title: room.title,
                    content: `Category: ${room.tag}\nRates from ${room.price} per night.\n\nIncluded Features:\n• ${room.features.join('\n• ')}\n\nComplimentary breakfast and sauna access included with direct booking.`,
                    image: room.img
                  })}
                >
                  View Details & Book
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Danny Mann Pub Section */}
      <section id="dannymann" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-t border-white/5">
        <div className="bg-gradient-to-r from-[#0D0E12] via-[#161922] to-[#0D0E12] border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase flex items-center gap-2">
              <Music className="w-4 h-4 text-[#D4AF37]" /> TRADITIONAL IRISH MUSIC HUB
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-light">
              The World-Famous Danny Mann Pub
            </h2>
            <p className="text-xs sm:text-sm text-[#A0A7B5] leading-relaxed font-light">
              Recognized worldwide for top traditional Irish musicians playing 7 nights a week. Enjoy hearty pub dining, perfectly poured pints of creamy Guinness, and warm fireside storytelling.
            </p>
            <div className="pt-2">
              <Button 
                className="bg-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded cursor-pointer hover:bg-white transition-all"
                onClick={() => setActiveModal({
                  title: 'Danny Mann Live Music Schedule',
                  content: '🎵 Live Irish Music: 7 Nights a Week from 8:30 PM till late!\n\nFeatured Artists:\n• The Kerry Balladeers (Mon & Wed)\n• Fiddlers Green Traditional Group (Tue & Thu)\n• Killarney Legends Band (Fri & Sat & Sun)\n\nNo cover charge for hotel guests!'
                })}
              >
                View Live Music Lineup
              </Button>
            </div>
          </div>

          <div className="h-72 sm:h-96 rounded-xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            <img src="/sites/eviston-house/assets/images/eviston_dannymann.jpg" alt="Danny Mann Pub" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050608] border-t border-white/10 py-12 px-4 text-center text-xs text-[#A0A7B5]">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="font-serif text-xl text-white font-light uppercase tracking-wider">Eviston House Hotel Killarney</p>
          <p>© 2026 Eviston House Hotel. All rights reserved. Redesigned with World-Class Hyper-Luxury Standards.</p>
        </div>
      </footer>

      {/* Modal Dialog */}
      <AnimatePresence>
        {activeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#11141A] border border-[#D4AF37]/50 max-w-lg w-full p-6 sm:p-8 rounded-xl relative space-y-5 shadow-2xl overflow-hidden"
            >
              <button className="absolute top-4 right-4 text-[#A0A7B5] hover:text-white" onClick={() => setActiveModal(null)}>
                <X className="w-6 h-6" />
              </button>
              {activeModal.image && (
                <div className="h-44 rounded-lg overflow-hidden border border-white/10">
                  <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="font-serif text-2xl text-white">{activeModal.title}</h3>
              <p className="text-xs text-[#A0A7B5] whitespace-pre-line leading-relaxed">{activeModal.content}</p>
              <Button className="w-full bg-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-widest py-3 rounded cursor-pointer" onClick={() => setActiveModal(null)}>
                Close Window
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-6 right-6 z-50 bg-[#11141A] border-l-4 border-[#D4AF37] px-6 py-4 rounded-lg shadow-2xl text-xs text-white font-medium">
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Mobile Booking Button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090A0C]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 p-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase text-[#D4AF37] font-semibold block">Eviston House</span>
          <span className="text-xs text-white font-bold">Best Direct Rate Guarantee</span>
        </div>
        <Button 
          className="bg-[#D4AF37] text-[#07080A] font-bold text-xs uppercase tracking-wider px-5 py-2 rounded shadow-lg cursor-pointer"
          onClick={() => document.getElementById('bookingWidget')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </Button>
      </div>

    </div>
  );
}
