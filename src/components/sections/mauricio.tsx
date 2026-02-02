'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

export function Mauricio() {
  const t = useTranslations('about.mauricio');

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Actual Portrait */}
            <div className="aspect-square max-w-md mx-auto relative rounded-2xl overflow-hidden">
              <Image
                src="/images/mauricio-portrait.png"
                alt="Mauricio Manotas, CEO of Green Laniel"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-asparagus-400 rounded-full opacity-30 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brunswick-400 rounded-full opacity-30 blur-xl" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-display-sm md:text-display-md text-brunswick-800 mb-4">
            {t('name')}
          </h2>

          <p className="text-lg text-neutral-700 mb-8">{t('bio')}</p>

          {/* Quote */}
          <div className="relative pl-6 border-l-4 border-brunswick-500">
            <Quote className="absolute -left-4 -top-2 w-8 h-8 text-brunswick-200 bg-beige" />
            <blockquote className="text-xl font-display text-brunswick-700 italic">
              {t('quote')}
            </blockquote>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
