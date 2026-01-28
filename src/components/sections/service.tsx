'use client';

import { motion } from 'framer-motion';
import { Wrench, GraduationCap, Headphones, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export function Service() {
  const t = useTranslations('vita1.service');

  const services = [
    {
      icon: Wrench,
      title: 'Professional Installation',
      description: 'We handle the entire setup process',
    },
    {
      icon: GraduationCap,
      title: 'Training (1-2 hours)',
      description: 'Learn to read alerts and take action',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Response in hours, not days',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: "We're invested in your success",
    },
  ];

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('description')}</SectionSubtitle>
      </SectionHeader>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} variant="stat" padding="md">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-forest-100 flex items-center justify-center">
                <Icon className="w-6 h-6 text-forest-700" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-xs text-neutral-500">{service.description}</p>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
}
