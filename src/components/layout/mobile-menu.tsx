'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './language-toggle';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');

  const navLinks = [
    { href: '/vita-1', label: t('vita1') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-white z-50 shadow-xl"
          >
            <div className="flex flex-col h-full p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-xl text-forest-800">
                  Green Laniel
                </span>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-lg hover:bg-neutral-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block py-3 px-4 text-lg font-medium text-neutral-700 hover:text-forest-700 hover:bg-forest-50 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Section */}
              <div className="pt-6 border-t border-neutral-200 space-y-4">
                <LanguageToggle className="justify-center" />
                <Button href="/contact" fullWidth onClick={onClose}>
                  {t('cta')}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
