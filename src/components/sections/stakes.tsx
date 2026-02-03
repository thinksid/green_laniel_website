'use client';

import { motion } from 'framer-motion';
import { EyeOff, Clock, DollarSign, Thermometer } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { staggerContainer, fadeInUp } from '@/lib/animations';

interface StakesProps {
  page?: 'home' | 'vita1';
}

export function Stakes({ page = 'home' }: StakesProps) {
  const t = useTranslations(page === 'vita1' ? 'vita1.stakes' : 'home.stakes');

  const contentConfig = {
    home: [
      { key: 'blind', icon: EyeOff },
      { key: 'late', icon: Clock },
      { key: 'losing', icon: DollarSign },
    ],
    vita1: [
      { key: 'latency', icon: Clock },
      { key: 'proxy', icon: Thermometer },
      { key: 'blindspots', icon: EyeOff },
    ],
  };

  const problems = contentConfig[page].map((item) => ({
    icon: item.icon,
    title: t(`${item.key}.title`),
    text: t(`${item.key}.text`),
  }));

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <motion.div key={`problem-${index}-${problem.title}`} variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-forest-700" />
                </div>
                <h3 className="font-display text-display-sm mb-3">
                  {problem.title}
                </h3>
                <p className="text-neutral-600">{problem.text}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <blockquote className="text-xl md:text-2xl font-display text-forest-800 italic">
          {t('quote')}
        </blockquote>
        <p className="mt-2 text-neutral-500">{t('quoteAttribution')}</p>
      </motion.div>
    </Section>
  );
}
