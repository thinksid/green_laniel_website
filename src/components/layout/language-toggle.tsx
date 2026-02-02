'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
  isScrolled?: boolean;
}

export function LanguageToggle({ className, isScrolled = true }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn('flex items-center gap-1 text-sm font-medium', className)}>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'en'
            ? isScrolled
              ? 'font-bold text-brunswick-800 bg-brunswick-50'
              : 'font-bold text-white bg-white/20'
            : isScrolled
              ? 'text-neutral-600 hover:text-brunswick-700 hover:bg-neutral-100'
              : 'text-white/70 hover:text-white hover:bg-white/10'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={isScrolled ? 'text-neutral-300' : 'text-white/50'}>|</span>
      <button
        onClick={() => switchLocale('es')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'es'
            ? isScrolled
              ? 'font-bold text-brunswick-800 bg-brunswick-50'
              : 'font-bold text-white bg-white/20'
            : isScrolled
              ? 'text-neutral-600 hover:text-brunswick-700 hover:bg-neutral-100'
              : 'text-white/70 hover:text-white hover:bg-white/10'
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
