'use client';

import { motion } from 'framer-motion';
import { Droplet, Leaf, Bug } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { staggerContainer, fadeInUp } from '@/lib/animations';

// Helper function to parse markdown bold syntax and line breaks
function parseMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, lineIndex) => {
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const parsed = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={`${lineIndex}-${partIndex}`} className="text-forest-800">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    if (line === '') {
      return <br key={lineIndex} />;
    }
    return (
      <span key={lineIndex}>
        {lineIndex > 0 && <br />}
        {parsed}
      </span>
    );
  });
}

export function ThreeStressors() {
  const t = useTranslations('vita1.threeStressors');

  const stressors = [
    { icon: Droplet, key: 'waterWaste' },
    { icon: Leaf, key: 'nutrientLeaching' },
    { icon: Bug, key: 'diseaseDetection' },
  ];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
        <SectionSubtitle>{t('subheading')}</SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {stressors.map((stressor, index) => {
          const Icon = stressor.icon;
          const description = t(`stressors.${index}.description`);
          return (
            <motion.div key={`stressor-${index}`} variants={fadeInUp}>
              <div className="h-full">
                <div className="w-16 h-16 mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-display text-display-sm mb-3">
                  {t(`stressors.${index}.title`)}
                </h3>
                <p className="text-neutral-600">
                  {parseMarkdown(description)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
