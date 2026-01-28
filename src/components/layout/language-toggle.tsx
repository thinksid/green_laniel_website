'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'es') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn('flex items-center gap-1 text-sm', className)}>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'en'
            ? 'font-semibold text-forest-800'
            : 'text-neutral-500 hover:text-neutral-700'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-neutral-300">|</span>
      <button
        onClick={() => switchLocale('es')}
        className={cn(
          'px-2 py-1 rounded transition-colors duration-200',
          locale === 'es'
            ? 'font-semibold text-forest-800'
            : 'text-neutral-500 hover:text-neutral-700'
        )}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
