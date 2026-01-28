'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function ProductHero() {
  const t = useTranslations('vita1.hero');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-forest-800 via-forest-700 to-forest-800 overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-content px-4 md:px-8 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 bg-forest-600/50 rounded-full text-sm font-medium text-forest-200 mb-6">
            Plant Biosignal Monitoring System
          </span>
          <h1 className="font-display text-display-lg md:text-display-xl mb-6">
            {t('headline')}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-forest-200 max-w-2xl mx-auto mb-10"
        >
          {t('subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href="/contact" size="lg">
            {t('primaryCta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
