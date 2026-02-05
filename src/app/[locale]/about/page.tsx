import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { Mauricio } from '@/components/sections/mauricio';
import { FourBridges } from '@/components/sections/four-bridges';
import { Vivent } from '@/components/sections/vivent';
import { FinalCTA } from '@/components/sections/final-cta';
import { generateMetadata as genMeta, defaultKeywords } from '@/lib/seo/metadata';
import { getBreadcrumbSchema, generateJsonLd } from '@/lib/seo/structured-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'About Green Laniel - Swiss Precision, American Service',
    es: 'Sobre Green Laniel - Precisión Suiza, Servicio Americano',
  };

  const descriptions: Record<string, string> = {
    en: 'Green Laniel is the exclusive Americas distributor of Vivent plant biosignal technology. Founded by Mauricio Manotas with 30 years of agricultural experience across Colombia, Canada, and the US. B-Corp certified partner bringing Swiss precision to American fields.',
    es: 'Green Laniel es el distribuidor exclusivo en las Américas de la tecnología de bioseñales vegetales Vivent. Fundado por Mauricio Manotas con 30 años de experiencia agrícola en Colombia, Canadá y Estados Unidos. Socio certificado B-Corp que lleva la precisión suiza a los campos americanos.',
  };

  const aboutKeywords = {
    en: [
      'Green Laniel',
      'Mauricio Manotas',
      'Vivent distributor',
      'agricultural technology company',
      'B-Corp agriculture',
      'Swiss agricultural technology',
      'American agricultural service',
      'precision farming company',
      'plant monitoring experts',
    ],
    es: [
      'Green Laniel',
      'Mauricio Manotas',
      'distribuidor Vivent',
      'empresa de tecnología agrícola',
      'agricultura B-Corp',
      'tecnología agrícola suiza',
      'servicio agrícola americano',
      'empresa de agricultura de precisión',
      'expertos en monitoreo de plantas',
    ],
  };

  return genMeta({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/about',
    locale: locale as 'en' | 'es',
    keywords: locale === 'es' ? aboutKeywords.es : aboutKeywords.en,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Generate breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: locale === 'es' ? 'Inicio' : 'Home',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}`,
    },
    {
      name: locale === 'es' ? 'Sobre Nosotros' : 'About',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}/about`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(breadcrumbSchema),
        }}
      />
      <AboutHero />
      <Mauricio />
      <FourBridges />
      <Vivent />
      <FinalCTA translationKey="about.cta" />
    </>
  );
}
