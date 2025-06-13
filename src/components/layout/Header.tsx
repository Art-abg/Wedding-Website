'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import LanguageSelector from '../ui/LanguageSelector';
import TranslatedNav from './TranslatedNav';
// Temporarily removed useI18n due to runtime errors
// import { useI18n } from '@/locales/client';

export default function Header() {
  // const t = useI18n(); // Temporarily commented out
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract locale and path from pathname
  const getLocaleAndPath = () => {
    const pathSegments = pathname.split('/');
    // First segment after the initial slash is the locale
    const locale = pathSegments[1] || '';
    // The rest is the path without locale
    const path = '/' + pathSegments.slice(2).join('/');
    return { locale, path };
  };
  
  const { locale, path: currentPath } = getLocaleAndPath();
  
  const navLinks = TranslatedNav().map(link => ({
    ...link,
    href: link.key === 'home' ? `/${locale}` : `/${locale}/${link.key}`,
  }));

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-cream-100/95 shadow-md backdrop-blur-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo/Home link */}
          <Link 
            href={`/${locale}`}
            className="text-forest font-dancing-script text-2xl hover:text-forest-light transition-colors"
          >
            A & A
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ key, href, label }) => {
              const isActive =
                (key === 'home' && (currentPath === '/' || currentPath === `/${key}`)) ||
                (key !== 'home' && currentPath === `/${key}`);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-lg font-medium transition-colors ${
                    isActive
                      ? 'text-forest font-semibold border-b-2 border-gold-500'
                      : 'text-forest-light hover:text-forest'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          
          {/* Language selector */}
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
