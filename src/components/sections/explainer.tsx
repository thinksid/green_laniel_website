'use client';

import { motion } from 'framer-motion';
import { Leaf, Activity, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function Explainer() {
  const t = useTranslations('home.explainer');

  const paragraphs = t.raw('paragraphs') as string[];

  return (
    <Section id="explainer">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            {/* Flow Diagram */}
            <div className="flex flex-col items-center gap-6">
              {/* Sensor */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-24 h-24 rounded-2xl bg-forest-700 flex items-center justify-center shadow-lg"
              >
                <Activity className="w-10 h-10 text-white" />
              </motion.div>

              {/* Arrow */}
              <div className="w-1 h-8 bg-forest-300" />

              {/* Plant */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center shadow-lg"
              >
                <Leaf className="w-14 h-14 text-white" />
              </motion.div>

              {/* Arrow */}
              <div className="w-1 h-8 bg-forest-300" />

              {/* Phone */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-20 h-32 rounded-2xl bg-neutral-800 flex items-center justify-center shadow-lg"
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
            </div>

            {/* Labels */}
            <div className="absolute top-0 left-0 right-0 flex justify-between text-sm text-neutral-500">
              <span>Vita 1 Sensor</span>
              <span className="opacity-0">spacer</span>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 text-sm text-neutral-500">
              <span>Plant Biosignals</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-neutral-500">
              <span>Your Phone</span>
              <span className="opacity-0">spacer</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <SectionHeader className="text-left mb-8">
            <SectionTitle className="text-left">{t('heading')}</SectionTitle>
          </SectionHeader>

          <div className="space-y-4 mb-8">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>

          <Button href="/vita-1" variant="outline">
            {t('cta')} &rarr;
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
