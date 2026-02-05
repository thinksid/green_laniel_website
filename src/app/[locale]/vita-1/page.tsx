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
import { generateMetadata as genMeta, defaultKeywords } from '@/lib/seo/metadata';
import {
  getProductSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  generateJsonLd,
} from '@/lib/seo/structured-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Vita 1 - Plant Biosignal Monitoring System | $7,000 Year 1',
    es: 'Vita 1 - Sistema de Monitoreo de Bioseñales Vegetales | $7,000 Año 1',
  };

  const descriptions: Record<string, string> = {
    en: "World's first commercial plant biosignal monitoring system. Detect stress 24-48 hours before visible symptoms. Swiss precision for greenhouses, potato storage, and field crops. $7,000 Year 1 includes installation, training, and support.",
    es: 'Primer sistema comercial de monitoreo de bioseñales vegetales del mundo. Detecta estrés 24-48 horas antes de síntomas visibles. Precisión suiza para invernaderos, almacenamiento de papa y cultivos de campo. $7,000 Año 1 incluye instalación, capacitación y soporte.',
  };

  const productKeywords = {
    en: [
      ...defaultKeywords.en,
      'Vita 1',
      'Vivent technology',
      'plant monitoring price',
      'agricultural IoT',
      'smart farming equipment',
      'plant electrophysiology sensor',
      'greenhouse automation',
      'potato storage technology',
    ],
    es: [
      ...defaultKeywords.es,
      'Vita 1',
      'tecnología Vivent',
      'precio de monitoreo de plantas',
      'IoT agrícola',
      'equipo de agricultura inteligente',
      'sensor de electrofisiología vegetal',
      'automatización de invernaderos',
      'tecnología de almacenamiento de papa',
    ],
  };

  return genMeta({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/vita-1',
    locale: locale as 'en' | 'es',
    keywords: locale === 'es' ? productKeywords.es : productKeywords.en,
    ogImage: '/vita-1-front.png',
  });
}

export default async function Vita1Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('vita1.faq');

  // Generate structured data
  const productSchema = getProductSchema(locale as 'en' | 'es');

  // FAQ data for schema
  const faqData =
    locale === 'es'
      ? [
          {
            question: '¿Con qué cultivos funciona?',
            answer:
              'Vita 1 está validado para hortalizas de invernadero, bayas, papas, manzanas y uvas, con la capacidad de validar nuevos cultivos según las necesidades del productor.',
          },
          {
            question: '¿Se puede usar al aire libre?',
            answer:
              'Sí, los sensores son inalámbricos, funcionan con batería y son resistentes a la intemperie, lo que los hace ideales para cultivos al aire libre donde el monitoreo del estrés de las plantas en tiempo real es crítico.',
          },
          {
            question: '¿Notifica cambios de estrés de forma proactiva?',
            answer:
              'Sí, Vita 1 envía alertas automáticas cuando detecta estrés en las plantas. Serás notificado 24-48 horas antes de que aparezcan síntomas visibles, dándote tiempo para actuar.',
          },
          {
            question: '¿Requiere conexión inalámbrica?',
            answer:
              'No, los sensores funcionan de forma inalámbrica usando radio de largo alcance. Solo necesitas internet en un punto donde se encuentra el gateway, no en toda tu operación, lo que lo hace ideal para áreas rurales.',
          },
          {
            question: '¿Se integra con plataformas de datos existentes?',
            answer:
              'Vita 1 viene con su propia plataforma de datos. Sin embargo, las integraciones personalizadas con plataformas de datos existentes pueden ser posibles dependiendo de tu configuración.',
          },
          {
            question: '¿Mis datos están seguros?',
            answer:
              'Sí, tus datos son seguros y te pertenecen, protegidos por seguridad estándar de la industria y regulaciones de privacidad europeas.',
          },
          {
            question: '¿Cuál es la vida útil de la batería?',
            answer:
              'La batería del sensor dura varios meses sin necesidad de reemplazo. También ofrecemos una versión alimentada por energía solar que extiende aún más esta vida útil.',
          },
          {
            question: '¿Cuántos sensores necesito?',
            answer:
              'Depende de tu configuración: los invernaderos pueden necesitar alrededor de 8 sensores por hectárea, mientras que los cultivos uniformes al aire libre como las papas necesitan solo 1-2 sensores por 2 hectáreas. Te ayudaremos a determinar el número exacto según tu operación.',
          },
        ]
      : [
          {
            question: 'What crops does it work with?',
            answer:
              'Vita 1 is validated for greenhouse vegetables, berries, potatoes, apples, and grapes, with the ability to validate new crops based on grower needs.',
          },
          {
            question: 'Can it be used outdoors?',
            answer:
              'Yes—the sensors are wireless, battery-powered, and weatherproof, making them ideal for outdoor crops where monitoring plant stress in real-time is critical.',
          },
          {
            question: 'Does it notify stress changes proactively?',
            answer:
              "Yes—Vita 1 sends automatic alerts when it detects plant stress. You'll be notified 24-48 hours before visible symptoms appear, giving you time to act.",
          },
          {
            question: 'Does it require a wireless connection?',
            answer:
              "No—the sensors work wirelessly using a long-range radio. You only need internet at one spot where the gateway sits, not throughout your entire operation, making it ideal for rural areas.",
          },
          {
            question: 'Does it integrate with existing data platforms?',
            answer:
              'Vita 1 comes with its own data platform. However, custom integrations with existing data platforms may be possible depending on your setup.',
          },
          {
            question: 'Is my data safe?',
            answer:
              'Yes—your data is secure and belongs to you, protected by industry-standard security and European privacy regulations.',
          },
          {
            question: 'What is the battery lifetime?',
            answer:
              'Battery on the sensor lasts for several months without need of replacing. We also offer a solar-powered version that extends this lifetime even further.',
          },
          {
            question: 'How many sensors do I need?',
            answer:
              "It depends on your setup—greenhouses may need about 8 sensors per hectare, while uniform outdoor crops like potatoes need just 1-2 sensors per 2 hectares. We'll help you determine the exact number based on your operation.",
          },
        ];

  const faqSchema = getFAQSchema(
    faqData,
    `https://greenlaniel.com${locale === 'es' ? '/es' : ''}/vita-1`
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: locale === 'es' ? 'Inicio' : 'Home',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}`,
    },
    {
      name: 'Vita 1',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}/vita-1`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(productSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(breadcrumbSchema),
        }}
      />
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
