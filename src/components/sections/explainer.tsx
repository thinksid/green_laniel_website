'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

export function Explainer() {
  const t = useTranslations('home.explainer');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const paragraphs = t.raw('paragraphs') as string[];

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
              src="/images/diagram.png"
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
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/images/diagram.png"
                alt="How Vita 1 works diagram"
                width={1600}
                height={900}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
