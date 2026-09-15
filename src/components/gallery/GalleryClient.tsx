'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getAssetPath } from '@/lib/assets';

interface GalleryItem {
  id: number;
  src: string;
  type: 'image' | 'video';
  category: string;
  categoryName: string;
  title: string;
}

interface GalleryClientProps {
  dict: any;
  items: GalleryItem[];
}

/* ─── Lazy Video Component ─── */
function LazyVideo({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <video
          ref={ref}
          src={src}
          className={className}
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={() => ref.current?.play()}
          onMouseLeave={() => ref.current?.pause()}
        />
      ) : (
        <div className="w-full h-full bg-[#2C2623]/40" />
      )}
    </div>
  );
}

export function GalleryClient({ dict, items }: GalleryClientProps) {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  /* ─── Translated category labels mapping ─── */
  const categoryLabels: Record<string, string> = {
    'hen-parties': dict.gallery.filterHen,
    'bridal-events': dict.gallery.filterBridal,
    'private-celebrations': dict.gallery.filterPrivate,
    'food-styling': dict.gallery.filterFood,
  };

  /* ─── Translated type labels ─── */
  const typeLabels: Record<string, string> = {
    image: dict.gallery?.typeImage || 'image',
    video: dict.gallery?.typeVideo || 'video',
  };

  const filters = [
    { key: 'all', label: dict.gallery.filterAll },
    { key: 'hen-parties', label: dict.gallery.filterHen },
    { key: 'bridal-events', label: dict.gallery.filterBridal },
    { key: 'private-celebrations', label: dict.gallery.filterPrivate },
    { key: 'food-styling', label: dict.gallery.filterFood },
  ];

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter((item) => item.category === activeFilter);

  /* ─── Close lightbox on Escape ─── */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedItem(null);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedItem, handleKeyDown]);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'gold-gradient-bg text-white shadow-md'
                  : 'bg-[#FFFDF9] text-[#6B5B4E] border border-[#C9A96E]/30 hover:border-[#C9A96E] hover:text-[#2C2623]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="relative h-64 sm:h-72 rounded-2xl overflow-hidden glass-card border border-[#C9A96E]/20 cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full bg-black">
                  <LazyVideo
                    src={getAssetPath(item.src)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-[#C9A96E]/80 backdrop-blur-md flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={getAssetPath(item.src)}
                  alt={item.title || 'Sunday Maison Event'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1916]/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                <span className="text-xs font-serif tracking-wide truncate">
                  {categoryLabels[item.category] || item.categoryName}
                </span>
                <span className="text-[10px] uppercase font-sans tracking-widest text-[#E5D5B5] px-2 py-0.5 rounded-full bg-black/30 backdrop-blur-xs">
                  {typeLabels[item.type] || item.type}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl w-full max-h-[85vh] relative rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={getAssetPath(selectedItem.src)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="max-w-full max-h-[80vh] rounded-xl"
                />
              ) : (
                <div className="relative w-full h-[75vh]">
                  <Image
                    src={getAssetPath(selectedItem.src)}
                    alt={selectedItem.title || 'Sunday Maison Event'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
