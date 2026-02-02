'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Tabs, TabPanel } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface ProductViewer360Props {
  className?: string;
}

interface Feature {
  view: number; // 0: front, 1: right, 2: back, 3: left
  position: { x: number; y: number }; // percentage based (0-100)
  labelKey: string;
  descriptionKey: string;
}

const VIEWS = ['front', 'back', 'side', 'laptop'] as const;

// Feature hotspots for each view (reduced to 3 views)
const FEATURES: Feature[] = [
  // Front view
  { view: 0, position: { x: 50, y: 35 }, labelKey: 'enclosure', descriptionKey: 'enclosure' },
  { view: 0, position: { x: 50, y: 15 }, labelKey: 'qrCode', descriptionKey: 'qrCode' },
  { view: 0, position: { x: 50, y: 55 }, labelKey: 'circuitry', descriptionKey: 'circuitry' },

  // Back view
  { view: 1, position: { x: 50, y: 45 }, labelKey: 'pcb', descriptionKey: 'pcb' },
  { view: 1, position: { x: 50, y: 75 }, labelKey: 'bracket', descriptionKey: 'bracket' },

  // Side view
  { view: 2, position: { x: 50, y: 50 }, labelKey: 'clips', descriptionKey: 'clips' },
  { view: 2, position: { x: 50, y: 25 }, labelKey: 'tube', descriptionKey: 'tube' },
];

export function ProductViewer360({ className }: ProductViewer360Props) {
  const t = useTranslations('vita1.viewer360');

  const tabs = [
    { id: 'video', label: t('tabs.video') },
    { id: 'features', label: t('tabs.features') },
  ];

  return (
    <Section className={className}>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('subtitle')}</SectionSubtitle>
      </SectionHeader>

      <Tabs tabs={tabs} defaultTab="video">
        {(activeTab) => (
          <>
            <TabPanel id="video" activeTab={activeTab}>
              <VideoContent />
            </TabPanel>
            <TabPanel id="features" activeTab={activeTab}>
              <FeaturesContent />
            </TabPanel>
          </>
        )}
      </Tabs>
    </Section>
  );
}

// Video Content Component
function VideoContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card padding="lg" className="max-w-2xl mx-auto">
        <div className="aspect-video relative rounded-xl overflow-hidden bg-brunswick-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Y10rNMhZH6U?start=19"
            title="Vita 1 in action"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </Card>
    </motion.div>
  );
}

// Features Content Component
function FeaturesContent() {
  const t = useTranslations('vita1.viewer360');
  const [currentView, setCurrentView] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  // Image paths (4 views: front, back, side, laptop)
  const images = [
    '/vita-1-front.png',
    '/vita-1-back.png',
    '/vita-1-left.png',
    '/images/laptop_mockup2.png',
  ];

  const TOTAL_VIEWS = VIEWS.length;

  // Preload images
  useEffect(() => {
    const imageElements = images.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    Promise.all(
      imageElements.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) {
              resolve(true);
            } else {
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
            }
          })
      )
    ).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentView((prev) => (prev - 1 + TOTAL_VIEWS) % TOTAL_VIEWS);
  }, [TOTAL_VIEWS]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentView((prev) => (prev + 1) % TOTAL_VIEWS);
  }, [TOTAL_VIEWS]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext]);

  const currentFeatures = FEATURES.filter((f) => f.view === currentView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card padding="lg" className="max-w-2xl mx-auto">
        {/* Viewer Canvas */}
        <div className="relative">
          {/* Loading State */}
          {!imagesLoaded && (
            <div className="aspect-square bg-midnight rounded-xl flex items-center justify-center">
              <div className="text-center">
                <RotateCw className="w-12 h-12 text-sage-400 animate-spin mx-auto mb-4" />
                <p className="text-sage-300 font-medium">{t('loading')}</p>
              </div>
            </div>
          )}

          {/* Image Viewer */}
          {imagesLoaded && (
            <div className="relative">
              <p id="viewer-instructions" className="sr-only">
                Use arrow keys to navigate between views
              </p>
              <motion.div
                className="relative aspect-square bg-midnight rounded-xl overflow-hidden select-none"
                role="region"
                aria-label="Product viewer"
                aria-describedby="viewer-instructions"
              >
                {/* Current Image */}
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.img
                    key={currentView}
                    src={images[currentView]}
                    alt={t(`views.${VIEWS[currentView]}`)}
                    className="w-full h-full object-contain"
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    draggable={false}
                  />
                </AnimatePresence>

                {/* Feature Hotspots */}
                {currentFeatures.map((feature, index) => (
                  <FeatureHotspot
                    key={`${feature.view}-${index}`}
                    feature={feature}
                    t={t}
                  />
                ))}
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-10"
                aria-label="Previous view"
              >
                <ChevronLeft className="w-6 h-6 text-brunswick-700" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-10"
                aria-label="Next view"
              >
                <ChevronRight className="w-6 h-6 text-brunswick-700" />
              </button>
            </div>
          )}

          {/* View Indicator Dots */}
          {imagesLoaded && (
            <div className="flex justify-center gap-2 mt-6" role="tablist">
              {VIEWS.map((view, index) => (
                <button
                  key={view}
                  onClick={() => {
                    setDirection(index > currentView ? 1 : -1);
                    setCurrentView(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentView === index
                      ? 'bg-brunswick-600 w-8'
                      : 'bg-brunswick-200 hover:bg-brunswick-300'
                  }`}
                  aria-label={t(`views.${view}`)}
                  aria-selected={currentView === index}
                  role="tab"
                />
              ))}
            </div>
          )}

          {/* View Label */}
          {imagesLoaded && (
            <motion.p
              key={currentView}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-4 text-lg font-display text-brunswick-800"
            >
              {t(`views.${VIEWS[currentView]}`)}
            </motion.p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

// Feature Hotspot Component
interface FeatureHotspotProps {
  feature: Feature;
  t: (key: string) => string;
}

function FeatureHotspot({ feature, t }: FeatureHotspotProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile('ontouchstart' in window);
  }, []);

  return (
    <motion.div
      className="absolute group"
      style={{
        left: `${feature.position.x}%`,
        top: `${feature.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile && setIsHovered(!isHovered)}
    >
      {/* Pulsing Dot */}
      <div className="relative">
        {/* Outer pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-asparagus-500"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ width: '24px', height: '24px', left: '-4px', top: '-4px' }}
        />

        {/* Inner dot */}
        <motion.button
          className="relative w-4 h-4 rounded-full bg-asparagus-600 border-2 border-white shadow-lg cursor-pointer z-10"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={t(`features.${feature.labelKey}.label`)}
        />
      </div>

      {/* Tooltip */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-1/2 top-full mt-3 -translate-x-1/2 w-64 pointer-events-none z-20"
        >
          <div className="bg-white rounded-lg shadow-xl border border-neutral-200 p-4">
            {/* Arrow */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-neutral-200 rotate-45" />

            {/* Content */}
            <div className="relative">
              <h4 className="font-semibold text-brunswick-800 mb-1">
                {t(`features.${feature.labelKey}.label`)}
              </h4>
              <p className="text-sm text-neutral-600">
                {t(`features.${feature.descriptionKey}.description`)}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
