'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';

// Case study images mapping
const caseStudyImages = [
  '/images/case-tomatoes.jpeg',   // Texas Greenhouse - Tomatoes
  '/images/case-potato.png',      // Frito-Lay/PepsiCo - Potatoes
  '/images/case-berries.jpeg',    // Colombia - Berries
];

export function CaseStudies() {
  const t = useTranslations('home.caseStudies');
  const [currentIndex, setCurrentIndex] = useState(0);

  const studies = t.raw('studies') as Array<{
    title: string;
    quote: string;
    summary: string;
    tags: { crop: string; size: string; useCase: string };
    cta: string;
  }>;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % studies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + studies.length) % studies.length);
  };

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <div className="relative max-w-4xl mx-auto">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors"
          aria-label="Previous case study"
        >
          <ChevronLeft className="w-5 h-5 text-brunswick-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors"
          aria-label="Next case study"
        >
          <ChevronRight className="w-5 h-5 text-brunswick-700" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card padding="lg">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Case Study Image */}
                  <div className="aspect-video relative rounded-xl overflow-hidden bg-brunswick-100">
                    <Image
                      src={caseStudyImages[currentIndex] || caseStudyImages[0]}
                      alt={studies[currentIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-brunswick-300" />
                    </div>

                    <blockquote className="font-display text-xl md:text-2xl text-brunswick-800 mb-4">
                      {studies[currentIndex].quote}
                    </blockquote>

                    <p className="text-neutral-600 mb-6">
                      {studies[currentIndex].summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-brunswick-100 text-brunswick-700 text-sm rounded-full">
                        {studies[currentIndex].tags.crop}
                      </span>
                      <span className="px-3 py-1 bg-brunswick-100 text-brunswick-700 text-sm rounded-full">
                        {studies[currentIndex].tags.size}
                      </span>
                      <span className="px-3 py-1 bg-brunswick-100 text-brunswick-700 text-sm rounded-full">
                        {studies[currentIndex].tags.useCase}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {studies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brunswick-700' : 'bg-brunswick-300'
              }`}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
