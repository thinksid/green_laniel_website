import { Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { getOrganizationSchema, generateJsonLd } from '@/lib/seo/structured-data';
import { defaultKeywords } from '@/lib/seo/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
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

  const keywords = locale === 'es' ? defaultKeywords.es : defaultKeywords.en;
  const baseUrl = 'https://greenlaniel.com';
  const currentPath = locale === 'es' ? '/es' : '';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: titles[locale] || titles.en,
      template: `%s | Green Laniel`,
    },
    description: descriptions[locale] || descriptions.en,
    keywords: keywords.join(', '),
    authors: [{ name: 'Green Laniel', url: baseUrl }],
    creator: 'Green Laniel',
    publisher: 'Green Laniel',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}${currentPath}`,
      languages: {
        en: baseUrl,
        es: `${baseUrl}/es`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      type: 'website',
      url: `${baseUrl}${currentPath}`,
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      siteName: 'Green Laniel',
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
      images: [
        {
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: titles[locale] || titles.en,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      creator: '@greenlaniel',
      site: '@greenlaniel',
      images: [`${baseUrl}/images/og-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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

  // Generate organization schema for all pages
  const organizationSchema = getOrganizationSchema(locale as 'en' | 'es');

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateJsonLd(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-brunswick-800 focus:rounded focus:shadow-lg"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
