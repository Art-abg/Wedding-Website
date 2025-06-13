'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { locales } from '@/locales/config';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  hy: 'Հայերեն',
};

const languageFlags: Record<string, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  hy: '🇦🇲',
};

export default function LanguageSelector() {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-200/80 hover:bg-cream-200 text-forest transition-colors duration-300 border border-gold-300/30"
        aria-label="Select language"
      >
        <span className="text-lg">{languageFlags[currentLocale]}</span>
        <span className="text-sm font-medium hidden xs:inline">
          {languageNames[currentLocale]}
        </span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-cream-100 border border-gold-300/30 overflow-hidden z-50">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={async () => {
                  try {
                    await changeLocale(locale);
                    setIsOpen(false);
                  } catch (error) {
                    console.error('Error changing locale:', error);
                  }
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm ${
                  currentLocale === locale
                    ? 'bg-gold-200/50 text-forest font-medium'
                    : 'text-forest-light hover:bg-cream-200'
                }`}
              >
                <span className="text-lg">{languageFlags[locale]}</span>
                <span>{languageNames[locale]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
