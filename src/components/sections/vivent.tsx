'use client';

import { motion } from 'framer-motion';
import { Shield, Globe, Award, Beaker } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export function Vivent() {
  const t = useTranslations('about.vivent');

  const highlights = [
    { icon: Globe, text: '1,000+ installations across Europe' },
    { icon: Beaker, text: 'Validated with Agroscope (Swiss federal research)' },
    { icon: Award, text: 'B-Corp certified' },
    { icon: Shield, text: 'World leader in plant electrophysiology' },
  ];

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader className="text-left mb-8">
            <SectionTitle className="text-left">{t('heading')}</SectionTitle>
          </SectionHeader>

          <p className="text-lg text-neutral-700 mb-6">{t('description')}</p>

          <div className="p-4 bg-forest-50 rounded-xl border border-forest-100">
            <p className="text-forest-700 font-medium">{t('note')}</p>
          </div>
        </motion.div>

        {/* Partner Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" padding="lg">
            {/* Logo Placeholder */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-16 bg-white/10 rounded-lg">
                <span className="font-display text-2xl text-white">Vivent</span>
              </div>
              <p className="mt-2 text-forest-300 text-sm">
                Biosignals | Switzerland
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-forest-100">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
