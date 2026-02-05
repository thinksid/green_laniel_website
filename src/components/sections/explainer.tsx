'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ImageModal } from '@/components/ui/image-modal';

export function Explainer() {
  const t = useTranslations('home.explainer');
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paragraphs = t.raw('paragraphs') as string[];
  const diagramSrc = locale === 'es' ? '/images/diagram-es.png' : '/images/diagram.png';

  return (
    <Section id="explainer">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <SectionHeader className="mb-12">
          <SectionTitle>{t('heading')}</SectionTitle>
        </SectionHeader>

        {/* Diagram - Clickable to zoom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="relative w-full cursor-pointer rounded-xl overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={diagramSrc}
              alt="How Vita 1 works diagram"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="space-y-4 mb-8">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>

          <Button href="/vita-1" variant="outline">
            {t('cta')} &rarr;
          </Button>
        </motion.div>
      </div>

      {/* Diagram Zoom Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={diagramSrc}
        imageAlt="How Vita 1 works diagram"
        width={1600}
        height={900}
        className="max-w-6xl"
        backgroundColor="white"
      />
    </Section>
  );
}
