import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: 'Green Laniel | Plant Biosignal Monitoring',
    es: 'Green Laniel | Monitoreo de Bioseñales Vegetales',
  };

  const descriptions: Record<string, string> = {
    en: 'Catch plant stress 24-48 hours before visible symptoms. Swiss precision, American service.',
    es: 'Detecta el estrés de las plantas 24-48 horas antes de síntomas visibles. Precisión suiza, servicio americano.',
  };

  return {
    title: {
      default: titles[locale] || titles.en,
      template: `%s | Green Laniel`,
    },
    description: descriptions[locale] || descriptions.en,
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      locale: locale,
      type: 'website',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'es')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
