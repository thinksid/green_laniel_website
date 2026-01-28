'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './language-toggle';
import { MobileMenu } from './mobile-menu';

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/vita-1', label: t('vita1') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-content">
          <nav className="flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl md:text-2xl text-forest-800 hover:text-forest-600 transition-colors"
            >
              Green Laniel
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'font-medium transition-colors duration-200',
                        isActive(link.href)
                          ? 'text-forest-700'
                          : 'text-neutral-600 hover:text-forest-700'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 pl-4 border-l border-neutral-200">
                <LanguageToggle />
                <Button href="/contact" size="sm">
                  {t('cta')}
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -mr-2 rounded-lg hover:bg-neutral-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
