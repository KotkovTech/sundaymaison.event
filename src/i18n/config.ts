export const locales = ['en', 'ga', 'fr', 'de', 'es', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const languageNames: Record<Locale, { name: string; localName: string; flag: string }> = {
  en: { name: 'English', localName: 'English', flag: '🇬🇧' },
  ga: { name: 'Irish', localName: 'Gaeilge', flag: '🇮🇪' },
  fr: { name: 'French', localName: 'Français', flag: '🇫🇷' },
  de: { name: 'German', localName: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Spanish', localName: 'Español', flag: '🇪🇸' },
  uk: { name: 'Ukrainian', localName: 'Українська', flag: '🇺🇦' },
};
