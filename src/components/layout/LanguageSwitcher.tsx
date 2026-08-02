'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale, languageNames, locales } from '@/i18n/config';
import { Globe, ChevronDown } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);
    if (!pathname) return;

    // Replace locale in current path
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/') || `/${newLocale}/`;
    router.push(newPath);
  };

  const currentLang = languageNames[currentLocale] || languageNames.en;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#FAF7F2] text-[#2C2623] border border-[#C9A96E]/30 hover:border-[#C9A96E] hover:bg-[#F5E6C8]/40 transition-all duration-200 cursor-pointer shadow-xs"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="hidden sm:inline font-sans">{currentLang.localName}</span>
        <span className="sm:hidden font-sans uppercase">{currentLocale}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-[#C9A96E] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl glass-card shadow-xl border border-[#C9A96E]/30 py-1.5 z-50 animate-in fade-in duration-200">
          {locales.map((loc) => {
            const lang = languageNames[loc];
            const isSelected = loc === currentLocale;
            return (
              <button
                key={loc}
                onClick={() => handleLanguageChange(loc)}
                className={`w-full text-left px-3.5 py-2 text-xs font-sans flex items-center justify-between transition-colors duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-[#C9A96E]/15 text-[#2C2623] font-semibold'
                    : 'text-[#6B5B4E] hover:bg-[#F5E6C8]/50 hover:text-[#2C2623]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{lang.flag}</span>
                  <span>{lang.localName}</span>
                </div>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
