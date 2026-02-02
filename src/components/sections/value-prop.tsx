'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

// Alert images for carousel
const alertImages = [
  '/images/alert-cold.png',
  '/images/alert-water.png',
  '/images/alert-p.png',
];

export function ValueProp() {
  const t = useTranslations('home.valueProp');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const protectors = t.raw('protectors') as string[];
  const optimizers = t.raw('optimizers') as string[];
  const subheading = t.raw('subheading') as { before: string; linkText: string; after: string };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % alertImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + alertImages.length) % alertImages.length);
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <p className="text-lg text-neutral-600 mt-4 max-w-3xl mx-auto">
          {subheading.before}
          <a
            href="https://www.vivent-biosignals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brunswick-700 hover:text-brunswick-600 font-medium underline decoration-2 underline-offset-2 transition-colors"
          >
            {subheading.linkText}
          </a>
          {subheading.after}
        </p>
      </SectionHeader>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Alert Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 flex items-center justify-center"
        >
          <div className="relative w-full max-w-xs">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors"
              aria-label="Previous alert"
            >
              <ChevronLeft className="w-5 h-5 text-brunswick-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors"
              aria-label="Next alert"
            >
              <ChevronRight className="w-5 h-5 text-brunswick-700" />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={alertImages[currentIndex]}
                    alt={`Alert notification ${currentIndex + 1}`}
                    width={750}
                    height={1334}
                    className="w-full h-auto"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {alertImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brunswick-700' : 'bg-brunswick-300'
                  }`}
                  aria-label={`Go to alert ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 space-y-8"
        >
          {/* Protectors */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-forest-700 mb-4">
              {t('protectorsHeading')}
            </h3>
            <ul className="space-y-3">
              {protectors.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-forest-700" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Optimizers */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-earth-600 mb-4">
              {t('optimizersHeading')}
            </h3>
            <ul className="space-y-3">
              {optimizers.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-earth-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-earth-600" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button href={process.env.NEXT_PUBLIC_SCHEDULE_CALL_URL || '/contact'} size="lg">
            {t('cta')}
          </Button>
        </motion.div>
      </div>

      {/* Image Modal */}
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
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={alertImages[currentIndex]}
                alt={`Alert notification ${currentIndex + 1}`}
                width={750}
                height={1334}
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
