'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SCHEDULE_CALL_URL } from '@/lib/config';

export function ProductHero() {
  const t = useTranslations('vita1.hero');

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/vita1-hero.jpg"
          alt="Vita 1 sensor in greenhouse"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brunswick-700/70" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mx-auto mb-10"
        >
          <p className="text-sage-200 mb-2">
            {t('subheadline')}
          </p>
          <p className="text-white font-semibold">
            {t('subheadline2')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button href={SCHEDULE_CALL_URL} size="lg" className="bg-sage-500 hover:bg-sage-400 text-brunswick-900 font-semibold">
            {t('primaryCta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
