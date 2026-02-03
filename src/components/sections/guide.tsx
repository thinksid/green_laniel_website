'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

export function Guide() {
  const t = useTranslations('home.guide');

  const stats = [
    { value: t('stats.installations.value'), label: t('stats.installations.label') },
    { value: t('stats.validated.value'), label: t('stats.validated.label') },
    { value: t('stats.response.value'), label: t('stats.response.label') },
    { value: t('stats.bcorp.value'), label: t('stats.bcorp.label') },
  ];

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('subheading')}</SectionSubtitle>
      </SectionHeader>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card variant="featured" className="relative overflow-hidden">
            {/* Decorative quote mark */}
            <div className="absolute top-4 right-4 text-forest-600/30 text-9xl font-serif leading-none">
              &ldquo;
            </div>

            <div className="relative z-10">
              {/* Mauricio's portrait */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-forest-500">
                <Image
                  src="/images/mauricio-portrait.png"
                  alt="Mauricio Manotas"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed mb-6 text-forest-100">
                {t('quote')}
              </blockquote>

              <div>
                <p className="font-semibold text-white">{t('name')}</p>
                <p className="text-forest-300">{t('title')}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, index) => (
            <Card key={`stat-${index}-${stat.label}`} variant="stat" padding="md">
              <p className="font-display text-display-sm text-forest-700 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-neutral-600">{stat.label}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
