import Link from 'next/link';
import { Locale } from '@/i18n/config';
import { Mail, MapPin, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/InstagramIcon';

interface FooterProps {
  dict: any;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="bg-[#1F1916] text-[#FAF7F2] pt-16 pb-12 border-t border-[#C9A96E]/30 relative overflow-hidden">
      {/* Background Subtle Shimmer Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#FAF7F2]/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href={`/${locale}/`} className="inline-block">
              <span className="font-serif text-2xl tracking-widest text-[#FAF7F2]">
                SUNDAY MAISON
              </span>
              <p className="text-[10px] uppercase font-sans tracking-widest text-[#C9A96E] mt-0.5">
                {dict.footer.luxuryEvents || 'LUXURY EVENTS IRELAND'}
              </p>
            </Link>
            <p className="text-xs text-[#E5D5B5]/80 font-sans leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/sundaymaison.events?igsh=MW95NWpidDhidHFuZQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5D5B5] hover:bg-[#C9A96E] hover:text-[#1F1916] transition-all duration-200"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:sundaymaison.events@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center text-[#E5D5B5] hover:bg-[#C9A96E] hover:text-[#1F1916] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base text-[#E5D5B5] tracking-wider mb-4">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-[#FAF7F2]/70">
              <li>
                <Link href={`/${locale}/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/packages/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.packages}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact/`} className="hover:text-[#C9A96E] transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-base text-[#E5D5B5] tracking-wider mb-4">
              {dict.footer.contactHeader}
            </h3>
            <ul className="space-y-3 text-xs font-sans text-[#FAF7F2]/80 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0 mt-0.5" />
                <span>{dict.footer.location || 'Killarney, County Kerry, Ireland (Nationwide Available)'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <a href="mailto:sundaymaison.events@gmail.com" className="hover:text-[#C9A96E] transition-colors">
                  sundaymaison.events@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <a
                  href="https://www.instagram.com/sundaymaison.events?igsh=MW95NWpidDhidHFuZQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A96E] transition-colors"
                >
                  @sundaymaison.events
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action Box */}
          <div className="bg-[#FAF7F2]/5 rounded-2xl p-5 border border-[#C9A96E]/20 space-y-3">
            <div className="flex items-center gap-2 text-[#C9A96E]">
              <Sparkles className="w-4 h-4" />
              <span className="font-serif text-sm font-semibold tracking-wide">{dict.footer.readyCelebrate || 'Ready to Celebrate?'}</span>
            </div>
            <p className="text-xs text-[#FAF7F2]/70 font-sans leading-relaxed">
              {dict.footer.readyDesc || 'Let us craft your stress-free luxury hen party or bridal event in Ireland.'}
            </p>
            <Link
              href={`/${locale}/contact/`}
              className="inline-block w-full text-center py-2.5 rounded-full gold-gradient-bg text-white text-xs font-sans font-medium tracking-wide shadow-md hover:opacity-90 transition-all"
            >
              {dict.nav.getQuote}
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-[#FAF7F2]/50 gap-4">
          <p>© {new Date().getFullYear()} {dict.footer.rights}</p>
          <div className="flex items-center gap-1">
            <span>{dict.footer.craftedBy ? dict.footer.craftedBy : 'Crafted with ♥ by BlackCat'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
