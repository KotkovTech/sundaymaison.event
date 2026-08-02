'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl = 'https://wa.me/353870000000?text=Hello%20Sunday%20Maison!%20I%20would%20like%20to%20inquire%20about%20an%20event.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-sans text-xs font-semibold pl-0 group-hover:pl-2">
        Chat with Us
      </span>
    </a>
  );
}
