'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function AboutHero() {
  const t = useTranslations('about.hero');

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-forest-800 via-forest-700 to-forest-800 overflow-hidden pt-20">
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
          <h1 className="font-display text-display-lg md:text-display-xl mb-6">
            {t('headline')}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-forest-200 max-w-2xl mx-auto"
        >
          {t('subheadline')}
        </motion.p>
      </div>
    </section>
  );
}
