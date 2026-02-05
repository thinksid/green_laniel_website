import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { ProductHero } from '@/components/sections/product-hero';
import { Stakes } from '@/components/sections/stakes';
import { ThreeStressors } from '@/components/sections/three-stressors';
import { UseCases } from '@/components/sections/use-cases';
import { ProductViewer360 } from '@/components/sections/product-viewer-360';
import { PlantSignal } from '@/components/sections/plant-signal';
import { Service } from '@/components/sections/service';
import { Specs } from '@/components/sections/specs';
import { CaseStudies } from '@/components/sections/case-studies';
import { FAQ } from '@/components/sections/faq';
import { FinalCTA } from '@/components/sections/final-cta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Vita 1 - Plant Biosignal Monitoring System',
    es: 'Vita 1 - Sistema de Monitoreo de Bioseñales Vegetales',
  };

  const descriptions: Record<string, string> = {
    en: "The world's first commercial plant biosignal monitoring system. Swiss-engineered, American-supported.",
    es: 'El primer sistema comercial de monitoreo de bioseñales vegetales del mundo. Ingeniería suiza, soporte americano.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function Vita1Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProductHero />
      <Stakes page="vita1" />
      <ThreeStressors />
      <UseCases />
      <ProductViewer360 />
      <PlantSignal />
      <Service />
      <Specs />
      <CaseStudies />
      <FAQ />
      <FinalCTA translationKey="vita1.finalCta" />
    </>
  );
}
