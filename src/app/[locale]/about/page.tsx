import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { Mauricio } from '@/components/sections/mauricio';
import { FourBridges } from '@/components/sections/four-bridges';
import { Vivent } from '@/components/sections/vivent';
import { FinalCTA } from '@/components/sections/final-cta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'About Green Laniel - The Bridge to Better Growing',
    es: 'Sobre Green Laniel - El Puente Hacia un Mejor Cultivo',
  };

  const descriptions: Record<string, string> = {
    en: 'Swiss precision meets American service. Learn about our mission to bridge the gap between cutting-edge technology and practical farming.',
    es: 'La precisión suiza se encuentra con el servicio americano. Conoce nuestra misión de cerrar la brecha entre la tecnología de vanguardia y la agricultura práctica.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <Mauricio />
      <FourBridges />
      <Vivent />
      <FinalCTA translationKey="about.cta" />
    </>
  );
}
