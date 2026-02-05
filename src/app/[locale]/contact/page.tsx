import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ContactForm } from '@/components/sections/contact-form';
import { generateMetadata as genMeta } from '@/lib/seo/metadata';
import {
  getLocalBusinessSchema,
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
    en: 'Contact Green Laniel - Schedule Your Free Consultation',
    es: 'Contactar Green Laniel - Agenda tu Consulta Gratuita',
  };

  const descriptions: Record<string, string> = {
    en: 'Get in touch with Green Laniel for plant biosignal monitoring solutions. Schedule a free 15-minute consultation to discuss Vita 1 for your greenhouse, potato storage, or field crops. Serving US, Mexico, Colombia. Email: mauricio@greenlaniel.com',
    es: 'Ponte en contacto con Green Laniel para soluciones de monitoreo de bioseñales vegetales. Agenda una consulta gratuita de 15 minutos para discutir Vita 1 para tu invernadero, almacenamiento de papa o cultivos de campo. Servicio en EE.UU., México, Colombia. Email: mauricio@greenlaniel.com',
  };

  const contactKeywords = {
    en: [
      'contact Green Laniel',
      'Vita 1 consultation',
      'plant monitoring quote',
      'agricultural technology support',
      'greenhouse monitoring consultation',
      'precision agriculture contact',
      'mauricio@greenlaniel.com',
    ],
    es: [
      'contactar Green Laniel',
      'consulta Vita 1',
      'cotización monitoreo de plantas',
      'soporte tecnología agrícola',
      'consulta monitoreo invernaderos',
      'contacto agricultura de precisión',
      'mauricio@greenlaniel.com',
    ],
  };

  return genMeta({
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    path: '/contact',
    locale: locale as 'en' | 'es',
    keywords: locale === 'es' ? contactKeywords.es : contactKeywords.en,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  // Generate structured data
  const localBusinessSchema = getLocalBusinessSchema(locale as 'en' | 'es');
  const breadcrumbSchema = getBreadcrumbSchema([
    {
      name: locale === 'es' ? 'Inicio' : 'Home',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}`,
    },
    {
      name: locale === 'es' ? 'Contacto' : 'Contact',
      url: `https://greenlaniel.com${locale === 'es' ? '/es' : ''}/contact`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateJsonLd(breadcrumbSchema),
        }}
      />
      {/* Dark header background for navbar visibility */}
      <div className="bg-brunswick-800 pt-32 pb-16">
        <div className="container-content px-4 md:px-8 text-center">
          <h1 className="font-display text-display-lg md:text-display-xl text-white mb-4">
            {t('heading')}
          </h1>
          <p className="text-xl text-sage-200 max-w-2xl mx-auto">
            {t('subheadline')}
          </p>
        </div>
      </div>

      <Section>
        <ContactForm />
      </Section>
    </>
  );
}
