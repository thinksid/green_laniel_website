'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';

// Partner logos configuration
const partners = [
  {
    name: 'Vivent',
    logo: '/images/partners/vivent-logo.png',
    url: 'https://www.vivent-biosignals.com',
  },
  {
    name: 'Green Spec',
    logo: '/images/partners/greenspec-logo.svg',
    url: 'https://www.greenspec.nl/home',
  },
  {
    name: 'ISII',
    logo: '/images/partners/izii-logo.avif',
    url: 'https://www.isii-nitzan.swiss/',
  },
];

export function Vivent() {
  const t = useTranslations('about.vivent');

  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <SectionHeader className="mb-12">
          <SectionTitle>{t('heading')}</SectionTitle>
        </SectionHeader>

        {/* Partner Logos - larger, directly below title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 mb-12">
            {partners.map((partner, index) => {
              const LogoImage = (
                <div
                  key={index}
                  className="relative h-20 w-40 md:h-24 md:w-48 opacity-70 hover:opacity-100 transition-opacity"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(16%) sepia(20%) saturate(1200%) hue-rotate(107deg) brightness(98%) contrast(95%)',
                  }}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              );

              if (partner.url) {
                return (
                  <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Visit ${partner.name} website`}
                  >
                    {LogoImage}
                  </a>
                );
              }

              return LogoImage;
            })}
          </div>

          <p className="text-center text-sm text-neutral-500 uppercase tracking-wider font-medium mb-10">
            {t('partnersLabel')}
          </p>
        </motion.div>

        {/* Content - description and note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-6">
            {t('description')}
          </p>

          <div className="p-4 bg-brunswick-50 rounded-xl border border-brunswick-100 max-w-xl mx-auto">
            <p className="text-brunswick-700 font-medium">{t('note')}</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
