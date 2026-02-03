'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { SCHEDULE_CALL_URL } from '@/lib/config';

interface FinalCTAProps {
  translationKey?: string;
}

export function FinalCTA({ translationKey = 'home.finalCta' }: FinalCTAProps) {
  const t = useTranslations(translationKey);

  return (
    <Section variant="dark" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-display-md md:text-display-lg text-white mb-4">
          {t('headline')}
        </h2>
        <p className="text-xl text-forest-200 mb-8">{t('subheadline')}</p>
        <Button
          href={SCHEDULE_CALL_URL}
          size="lg"
          className="bg-white text-forest-800 hover:bg-forest-100"
        >
          {t('cta')}
        </Button>
      </motion.div>
    </Section>
  );
}
