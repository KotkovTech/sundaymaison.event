'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n/config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  dict: any;
  locale: Locale;
}

export function Navbar({ dict, locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}/`, label: dict.nav.home },
    { href: `/${locale}/services/`, label: dict.nav.services },
    { href: `/${locale}/packages/`, label: dict.nav.packages },
    { href: `/${locale}/gallery/`, label: dict.nav.gallery },
    { href: `/${locale}/about/`, label: dict.nav.about },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}/`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname?.startsWith(href.replace(/\/$/, ''));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-sm'
          : 'bg-[#FAF7F2]/90 backdrop-blur-md py-4 border-b border-[#C9A96E]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href={`/${locale}/`} className="group flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#2C2623] group-hover:text-[#C9A96E] transition-colors duration-200">
              SUNDAY MAISON
            </span>
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#C9A96E] font-medium border-l border-[#C9A96E]/40 pl-2 hidden sm:inline-block">
              EVENTS IRELAND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs xl:text-sm font-sans font-medium tracking-wide transition-colors duration-200 relative py-1 ${
                    active
                      ? 'text-[#2C2623] font-semibold'
                      : 'text-[#6B5B4E] hover:text-[#2C2623]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A96E] rounded-full animate-in fade-in duration-200" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Language + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LanguageSwitcher currentLocale={locale} />

            <Link
              href={`/${locale}/contact/`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full gold-gradient-bg text-white text-xs font-sans font-medium tracking-wide shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{dict.nav.planEvent}</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-[#2C2623] hover:bg-[#F0E6D6] transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#FFFDF9]/95 backdrop-blur-xl border-b border-[#C9A96E]/20 shadow-2xl py-6 px-6 animate-in slide-in-from-top duration-300 z-50">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-serif tracking-wide py-2 border-b border-[#F0E6D6] flex items-center justify-between ${
                    active ? 'text-[#C9A96E] font-semibold pl-2' : 'text-[#2C2623]'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#C9A96E]" />}
                </Link>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href={`/${locale}/contact/`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full gold-gradient-bg text-white text-sm font-sans font-medium tracking-wide shadow-md"
              >
                {dict.nav.planEvent}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
