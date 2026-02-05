'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Cpu, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const stepIcons = [Leaf, Cpu, MessageSquare];

export function PlantSignal() {
  const t = useTranslations('vita1.plantSignal');

  const steps = t.raw('steps') as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('subheading')}</SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {steps.map((step, index) => {
          const Icon = stepIcons[index];
          return (
            <motion.div key={`step-${index}`} variants={fadeInUp} className="relative">
              {/* Arrow connector (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-6 -translate-x-3 text-forest-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}

              <div className="text-center p-6 flex flex-col items-center">
                {/* Icon at top */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-forest-100 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-forest-700" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-semibold mb-3 text-forest-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-lg mb-4">{step.description}</p>

                {/* Number at bottom */}
                <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center mt-auto">
                  <span className="text-sm font-medium text-forest-600">
                    {step.number}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="bg-forest-50 border-l-4 border-forest-600 p-6 rounded-r-lg"
      >
        <p className="text-lg text-forest-900 font-medium">
          {t('callout')}
        </p>
      </motion.div>
    </Section>
  );
}
