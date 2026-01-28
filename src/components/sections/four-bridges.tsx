'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

const icons = [Cpu, Globe, Users, Zap];

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function FourBridges() {
  const t = useTranslations('about.bridges');

  const items = t.raw('items') as Array<{
    name: string;
    from: string;
    to: string;
  }>;

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-forest-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-forest-800 mb-3">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-neutral-600">{item.from}</span>
                      <ArrowRight className="w-4 h-4 text-forest-500" />
                      <span className="font-medium text-forest-700">
                        {item.to}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
