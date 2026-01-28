'use client';

import { useTranslations } from 'next-intl';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/section';
import { Accordion } from '@/components/ui/accordion';

export function FAQ() {
  const t = useTranslations('vita1.faq');

  const items = t.raw('items') as Array<{ question: string; answer: string }>;

  const accordionItems = items.map((item) => ({
    title: item.question,
    content: item.answer,
  }));

  return (
    <Section variant="alt">
      <SectionHeader>
        <SectionTitle>{t('heading')}</SectionTitle>
      </SectionHeader>

      <div className="max-w-3xl mx-auto">
        <Accordion items={accordionItems} />
      </div>
    </Section>
  );
}
