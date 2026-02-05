'use client';

import { motion } from 'framer-motion';
import { Droplet, Leaf, Bug } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export function ThreeStressors() {
  const t = useTranslations('vita1.threeStressors');

  const stressors = [
    { icon: Droplet, key: 'waterWaste' },
    { icon: Leaf, key: 'nutrientLeaching' },
    { icon: Bug, key: 'diseaseDetection' },
  ];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('subheading')}</SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {stressors.map((stressor, index) => {
          const Icon = stressor.icon;
          return (
            <motion.div key={`stressor-${index}`} variants={fadeInUp}>
              <Card className="h-full">
                <div className="w-16 h-16 mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-forest-700" />
                </div>
                <h3 className="font-display text-display-sm mb-3">
                  {t(`stressors.${index}.title`)}
                </h3>
                <p className="text-neutral-600">
                  {t(`stressors.${index}.description`)}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
