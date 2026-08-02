'use client';

import { Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/InstagramIcon';

interface ContactFormClientProps {
  dict: any;
}

export function ContactFormClient({ dict }: ContactFormClientProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Primary Contact Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#C9A96E]/40 shadow-xl space-y-8 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#C9A96E]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#F5E6C8]/30 rounded-full blur-2xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E6C8]/40 border border-[#C9A96E]/30 text-xs font-sans text-[#2C2623]">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
          <span>{dict.contact.info.title || 'Get in Touch'}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
          {/* Email */}
          <a
            href="mailto:sundaymaison.events@gmail.com"
            className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#C9A96E]/20 hover:border-[#C9A96E] hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#C9A96E] font-semibold">
                {dict.contact.emailUs || 'Email Us'}
              </span>
              <Mail className="w-5 h-5 text-[#C9A96E] group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="text-sm font-sans font-medium text-[#2C2623] break-all">
                sundaymaison.events@gmail.com
              </p>
              <p className="text-xs font-sans text-[#6B5B4E] mt-1">
                {dict.contact.forInquiries || 'For detailed inquiries & quotes'}
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sundaymaison.events?igsh=MW95NWpidDhidHFuZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#C9A96E]/20 hover:border-[#C9A96E] hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-sans uppercase tracking-widest text-[#C9A96E] font-semibold">
                {dict.contact.instagramTitle || 'Instagram'}
              </span>
              <InstagramIcon className="w-5 h-5 text-[#C9A96E] group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <p className="text-sm font-sans font-medium text-[#2C2623]">
                @sundaymaison.events
              </p>
              <p className="text-xs font-sans text-[#6B5B4E] mt-1">
                {dict.contact.instagramDesc || 'Direct messages & portfolio updates'}
              </p>
            </div>
          </a>
        </div>

        {/* WhatsApp Big CTA */}
        <div className="pt-2">
          <a
            href="https://wa.me/353870000000?text=Hello%20Sunday%20Maison!%20I%20would%20like%20to%20inquire%20about%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 rounded-2xl bg-[#25D366] text-white font-sans text-sm font-semibold tracking-wide flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>{dict.contact.whatsappButton || dict.contact.info.whatsapp || 'Chat via WhatsApp Direct'}</span>
          </a>
        </div>

        {/* Location Info */}
        <div className="pt-4 border-t border-[#F0E6D6] flex items-center justify-center gap-2 text-xs font-sans text-[#6B5B4E]">
          <MapPin className="w-4 h-4 text-[#C9A96E] shrink-0" />
          <span>{dict.contact.info.location || 'Killarney, Co. Kerry, Ireland (Services available nationwide)'}</span>
        </div>
      </div>

      {/* Booking Note */}
      <div className="p-6 rounded-2xl bg-[#F0E6D6]/40 border border-[#C9A96E]/20 text-xs font-sans text-[#6B5B4E] text-center leading-relaxed space-y-1">
        <p className="font-semibold text-[#2C2623]">{dict.contact.bookingNoteTitle || 'Important Booking Note:'}</p>
        <p>
          {dict.contact.bookingNoteText || 'Final pricing depends on guest headcount, location, styling depth, and selected add-ons. Travel fees may apply outside Killarney / County Kerry. A deposit is required to secure your requested date.'}
        </p>
      </div>
    </div>
  );
}
