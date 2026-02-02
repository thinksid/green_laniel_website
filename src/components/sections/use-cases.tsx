'use client';

import { motion } from 'framer-motion';
import { Check, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Tabs, TabPanel } from '@/components/ui/tabs';

export function UseCases() {
  const t = useTranslations('vita1.useCases');

  const tabs = [
    { id: 'greenhouse', label: t('tabs.greenhouse') },
    { id: 'potato', label: t('tabs.potato') },
    { id: 'openField', label: t('tabs.openField') },
  ];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <Tabs tabs={tabs} defaultTab="greenhouse">
        {(activeTab) => (
          <>
            <TabPanel id="greenhouse" activeTab={activeTab}>
              <UseCaseContent tabKey="greenhouse" />
            </TabPanel>
            <TabPanel id="potato" activeTab={activeTab}>
              <UseCaseContent tabKey="potato" />
            </TabPanel>
            <TabPanel id="openField" activeTab={activeTab}>
              <UseCaseContent tabKey="openField" />
            </TabPanel>
          </>
        )}
      </Tabs>
    </Section>
  );
}

function UseCaseContent({ tabKey }: { tabKey: string }) {
  const t = useTranslations(`vita1.useCases.${tabKey}`);

  const applications = t.raw('applications') as string[];

  // Map tab keys to their corresponding images
  const imageMap: Record<string, string> = {
    greenhouse: '/images/case-tomatoes.jpeg',
    potato: '/images/case-potato.png',
    openField: '/images/case-berries.jpeg',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card padding="lg">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Use Case Image */}
          <div className="aspect-video relative rounded-xl overflow-hidden bg-brunswick-100">
            <Image
              src={imageMap[tabKey] || imageMap.greenhouse}
              alt={t('title')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-display text-display-sm text-forest-800 mb-4">
              {t('title')}
            </h3>

            <div className="mb-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-neutral-500 mb-3">
                Key Applications
              </h4>
              <ul className="space-y-2">
                {applications.map((item, index) => (
                  <li key={`app-${index}-${item.slice(0, 20)}`} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 text-sm text-neutral-600">
              <p className="mb-1">{t('setup')}</p>
              <p>{t('bestFor')}</p>
            </div>

            {/* Featured Result */}
            <div className="bg-forest-50 rounded-xl p-4 border border-forest-100">
              <Quote className="w-6 h-6 text-forest-400 mb-2" />
              <blockquote className="font-medium text-forest-800 mb-2">
                {t('result.quote')}
              </blockquote>
              <cite className="text-sm text-neutral-500 not-italic">
                {t('result.attribution')}
              </cite>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
