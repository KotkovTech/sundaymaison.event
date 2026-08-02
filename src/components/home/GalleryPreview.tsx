'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Locale } from '@/i18n/config';
import { ArrowRight } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { motion } from 'motion/react';
import { getAssetPath } from '@/lib/assets';

interface GalleryPreviewProps {
  dict: any;
  locale: Locale;
}

export function GalleryPreview({ dict, locale }: GalleryPreviewProps) {
  const images = [
    { src: '/gallery/gallery_1.jpg', alt: 'Styled Table Setup', title: 'Table Styling' },
    { src: '/gallery/gallery_12.jpg', alt: 'Outdoor Celebration', title: 'Girls Weekend' },
    { src: '/gallery/gallery_22.jpg', alt: 'Gourmet Grazing', title: 'Gourmet Grazing' },
    { src: '/gallery/gallery_25.jpg', alt: 'Wedding Details', title: 'Bridal Morning' },
    { src: '/gallery/gallery_17.jpg', alt: 'Champagne & Details', title: 'Wedding Details' },
    { src: '/gallery/gallery_26.jpg', alt: 'Private Dinner', title: 'Private Dinners' },
  ];

  return (
    <section className="py-24 bg-[#FFFDF9] border-y border-[#C9A96E]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-sans tracking-[0.2em] uppercase text-[#C9A96E] font-semibold">
              {dict.gallery.tag}
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#2C2623] font-light">
              {dict.gallery.title}
            </h2>
          </div>

          <Link
            href={`/${locale}/gallery/`}
            className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#C9A96E] hover:text-[#B59458] transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-64 sm:h-80 rounded-2xl overflow-hidden group border border-[#C9A96E]/20 shadow-sm"
            >
              <Image
                src={getAssetPath(img.src)}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-serif tracking-wide block">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-4">
          <a
            href="https://www.instagram.com/sundaymaison.events?igsh=MW95NWpidDhidHFuZQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans text-[#6B5B4E] hover:text-[#C9A96E] transition-colors"
          >
            <InstagramIcon className="w-4 h-4 text-[#C9A96E]" />
            <span>Follow @sundaymaison.events on Instagram for daily inspiration</span>
          </a>
        </div>
      </div>
    </section>
  );
}
