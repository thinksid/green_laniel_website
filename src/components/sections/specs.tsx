'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CustomIcon, type IconName } from '@/components/ui/custom-icon';

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Icons for each value proposition
const valueIcons: IconName[] = ['flower', 'greenhouse', 'plants'];

export function Specs() {
  const t = useTranslations('vita1.valueAdd');

  const items = t.raw('items') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
      >
        {items.map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card padding="lg" className="h-full text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-asparagus-100 flex items-center justify-center">
                <CustomIcon name={valueIcons[index]} size="lg" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-brunswick-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600">
                {item.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Button href={process.env.NEXT_PUBLIC_SCHEDULE_CALL_URL || '/contact'} size="lg">
          {t('cta')}
        </Button>
      </motion.div>
    </Section>
  );
}
