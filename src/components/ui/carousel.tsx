'use client';

import { useState, useCallback, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  showDots?: boolean;
  showArrows?: boolean;
  arrowClassName?: string;
  dotClassName?: string;
  containerClassName?: string;
  getDotLabel?: (index: number) => string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  direction?: 'horizontal' | 'vertical';
  onSlideChange?: (index: number) => void;
}

export function Carousel<T>({
  items,
  renderItem,
  showDots = true,
  showArrows = true,
  arrowClassName = '',
  dotClassName = '',
  containerClassName = '',
  getDotLabel = (index) => `Go to slide ${index + 1}`,
  autoPlay = false,
  autoPlayInterval = 5000,
  direction = 'horizontal',
  onSlideChange,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      setSlideDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
      onSlideChange?.(index);
    },
    [currentIndex, onSlideChange]
  );

  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % items.length;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    goToSlide(newIndex);
  }, [currentIndex, items.length, goToSlide]);

  const getSlideAnimation = () => {
    if (direction === 'horizontal') {
      return {
        initial: { opacity: 0, x: slideDirection > 0 ? 50 : -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: slideDirection > 0 ? -50 : 50 },
      };
    }
    return {
      initial: { opacity: 0, y: slideDirection > 0 ? 50 : -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: slideDirection > 0 ? -50 : 50 },
    };
  };

  const slideAnimation = getSlideAnimation();

  return (
    <div className={`relative ${containerClassName}`}>
      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors ${arrowClassName}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-brunswick-700" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-brunswick-50 transition-colors ${arrowClassName}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-brunswick-700" />
          </button>
        </>
      )}

      {/* Carousel Content */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={slideAnimation.initial}
            animate={slideAnimation.animate}
            exit={slideAnimation.exit}
            transition={{ duration: 0.3 }}
          >
            {renderItem(items[currentIndex], currentIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      {showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={`carousel-dot-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brunswick-700' : 'bg-brunswick-300'
              } ${dotClassName}`}
              aria-label={getDotLabel(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
