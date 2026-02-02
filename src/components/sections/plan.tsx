'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
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

// Icons for each step
const stepIcons: IconName[] = ['flower', 'greenhouse', 'plants'];

export function Plan() {
  const t = useTranslations('home.plan');

  const steps = t.raw('steps') as Array<{
    number: string;
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative">
            {/* Arrow connector (hidden on mobile and last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-6 -translate-x-3 text-brunswick-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}

            <div className="text-center p-6 flex flex-col items-center">
              {/* Icon at top */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-asparagus-100 flex items-center justify-center">
                <CustomIcon name={stepIcons[index]} size="lg" />
              </div>

              {/* Title - larger */}
              <h3 className="font-display text-2xl font-semibold mb-3 text-brunswick-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 text-lg mb-4">{step.description}</p>

              {/* Number at bottom - subtle */}
              <div className="w-8 h-8 rounded-full bg-brunswick-100 flex items-center justify-center mt-auto">
                <span className="text-sm font-medium text-brunswick-600">
                  {step.number}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
