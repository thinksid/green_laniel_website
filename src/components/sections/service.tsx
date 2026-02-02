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
      title: 'Training',
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
      description: "Long-term partnership",
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
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-7xl mx-auto"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} variant="stat" padding="lg">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-forest-100 flex items-center justify-center">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-forest-700" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-3">{service.title}</h3>
              <p className="text-base md:text-lg text-neutral-600">{service.description}</p>
            </Card>
          );
        })}
      </motion.div>
    </Section>
  );
}
