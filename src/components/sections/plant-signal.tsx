'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Cpu, MessageSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
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
                <p className="text-neutral-600 text-lg">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dashboard Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -8 }}
        className="max-w-4xl mx-auto transition-shadow duration-300 rounded-2xl hover:shadow-2xl"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden">
          <Image
            src="/images/laptop_mockup2.png"
            alt="Vita 1 Dashboard"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            className="object-contain"
          />
        </div>
      </motion.div>
    </Section>
  );
}
