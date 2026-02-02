import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/section';
import { ContactForm } from '@/components/sections/contact-form';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Contact Us - Schedule a Call',
    es: 'Contáctanos - Agenda una Llamada',
  };

  const descriptions: Record<string, string> = {
    en: 'Schedule a 15-minute call to see if Vita 1 is right for your operation. We respond within 24 hours.',
    es: 'Agenda una llamada de 15 minutos para ver si Vita 1 es adecuado para tu operación. Respondemos en menos de 24 horas.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <>
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
