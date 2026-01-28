'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={fadeInUp} className="relative">
            {/* Arrow connector (hidden on mobile and last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-6 -translate-x-3 text-forest-300">
                <ArrowRight className="w-6 h-6" />
              </div>
            )}

            <div className="text-center p-6">
              {/* Step Number */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest-100 flex items-center justify-center">
                <span className="font-display text-2xl text-forest-700">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
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
        <Button href="/contact" size="lg">
          {t('cta')}
        </Button>
      </motion.div>
    </Section>
  );
}
