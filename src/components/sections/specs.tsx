'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function Specs() {
  const t = useTranslations('vita1.specs');

  const year1Includes = t.raw('year1.includes') as string[];
  const year2Includes = t.raw('year2.includes') as string[];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Year 1 Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" padding="lg">
            <div className="text-center mb-6">
              <span className="text-forest-300 font-semibold text-sm uppercase tracking-wider">
                {t('year1.title')}
              </span>
              <div className="mt-2">
                <span className="font-display text-display-md text-white">
                  {t('year1.price')}
                </span>
              </div>
            </div>

            <ul className="space-y-3">
              {year1Includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-forest-100">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Year 2+ Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Card padding="lg">
            <div className="text-center mb-6">
              <span className="text-neutral-500 font-semibold text-sm uppercase tracking-wider">
                {t('year2.title')}
              </span>
              <div className="mt-2">
                <span className="font-display text-display-md text-forest-800">
                  {t('year2.price')}
                </span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {year2Includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-forest-700" />
                  </div>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-neutral-500 text-center border-t border-neutral-200 pt-4">
              {t('year2.note')}
            </p>
          </Card>
        </motion.div>
      </div>

      {/* ROI Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-12"
      >
        <blockquote className="text-xl md:text-2xl font-display text-forest-800 italic max-w-2xl mx-auto mb-8">
          {t('quote')}
        </blockquote>

        <Button href="/contact" size="lg">
          {t('cta')}
        </Button>
      </motion.div>
    </Section>
  );
}
