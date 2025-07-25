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

  // Define explicit styles for the language selector
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '24px',
    background: 'rgba(250, 247, 240, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(212, 175, 55, 0.8)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    color: '#2d5016',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600'
  };

  const dropdownStyle = {
    position: 'absolute' as const,
    right: '0',
    top: '100%',
    marginTop: '8px',
    width: '160px',
    borderRadius: '12px',
    background: 'rgba(250, 247, 240, 0.98)',
    backdropFilter: 'blur(15px)',
    border: '2px solid rgba(212, 175, 55, 0.8)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    overflow: 'hidden',
    zIndex: 50
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
        className="hover:scale-105 active:scale-95 transition-transform duration-200"
        aria-label="Select language"
      >
        <span className="text-lg">{languageFlags[currentLocale]}</span>
        <span className="text-sm font-medium hidden xs:inline">
          {languageNames[currentLocale]}
        </span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div style={dropdownStyle}>
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
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: '100%',
                  textAlign: 'left' as const,
                  padding: '12px 16px',
                  fontSize: '14px',
                  fontWeight: currentLocale === locale ? '600' : '500',
                  background: currentLocale === locale 
                    ? 'rgba(212, 175, 55, 0.2)' 
                    : 'transparent',
                  color: currentLocale === locale ? '#2d5016' : '#556b2f',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="hover:bg-opacity-30 hover:bg-gold-300 transition-colors duration-200"
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
