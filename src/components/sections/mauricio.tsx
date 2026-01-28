'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/section';

export function Mauricio() {
  const t = useTranslations('about.mauricio');

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Photo Placeholder */}
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-forest-100 to-forest-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-forest-600 flex items-center justify-center mb-4">
                  <span className="text-4xl font-display text-white">MM</span>
                </div>
                <span className="text-forest-500 font-medium">Mauricio Manotas</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-earth-400 rounded-full opacity-30 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-forest-400 rounded-full opacity-30 blur-xl" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-display-sm md:text-display-md text-forest-800 mb-4">
            {t('name')}
          </h2>

          <p className="text-lg text-neutral-700 mb-8">{t('bio')}</p>

          {/* Quote */}
          <div className="relative pl-6 border-l-4 border-forest-500">
            <Quote className="absolute -left-4 -top-2 w-8 h-8 text-forest-200 bg-cream" />
            <blockquote className="text-xl font-display text-forest-700 italic">
              {t('quote')}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
