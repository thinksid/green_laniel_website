import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { Stakes } from '@/components/sections/stakes';
import { ValueProp } from '@/components/sections/value-prop';
import { Guide } from '@/components/sections/guide';
import { Plan } from '@/components/sections/plan';
import { CaseStudies } from '@/components/sections/case-studies';
import { Explainer } from '@/components/sections/explainer';
import { FinalCTA } from '@/components/sections/final-cta';
import { generateMetadata as genMeta, defaultKeywords } from '@/lib/seo/metadata';
import { getWebSiteSchema, getBreadcrumbSchema, generateJsonLd } from '@/lib/seo/structured-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Plant Biosignal Monitoring - Detect Stress Before It Shows',
    es: 'Monitoreo de Bioseñales Vegetales - Detecta el Estrés Antes de que Aparezca',
  };

  const descriptions: Record<string, string> = {
    en: 'Catch plant stress 24-48 hours before visible symptoms with Vita 1. Swiss precision plant monitoring for greenhouses, potato storage, and open field crops. Professional installation and support across the Americas.',
    es: 'Detecta el estrés de las plantas 24-48 horas antes de síntomas visibles con Vita 1. Monitoreo de plantas de precisión suiza para invernaderos, almacenamiento de papa y cultivos de campo abierto. Instalación profesional y soporte en las Américas.',
  };

  return genMeta({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '',
    locale: locale as 'en' | 'es',
    keywords: locale === 'es' ? defaultKeywords.es : defaultKeywords.en,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Generate schema for homepage
  const websiteSchema = getWebSiteSchema(locale as 'en' | 'es');
  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: locale === 'es' ? 'Inicio' : 'Home',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(breadcrumbSchema),
        }}
      />
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
