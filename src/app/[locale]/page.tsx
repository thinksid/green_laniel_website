import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/sections/hero';
import { Stakes } from '@/components/sections/stakes';
import { ValueProp } from '@/components/sections/value-prop';
import { Guide } from '@/components/sections/guide';
import { Plan } from '@/components/sections/plan';
import { CaseStudies } from '@/components/sections/case-studies';
import { Explainer } from '@/components/sections/explainer';
import { FinalCTA } from '@/components/sections/final-cta';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Stakes />
      <ValueProp />
      <Guide />
      <Plan />
      <CaseStudies />
      <Explainer />
      <FinalCTA />
    </>
  );
}
