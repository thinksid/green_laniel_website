import { Metadata } from 'next';

const BASE_URL = 'https://greenlaniel.com';
const SITE_NAME = 'Green Laniel';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

interface PageMetadata {
  title: string;
  description: string;
  path: string;
  locale: 'en' | 'es';
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  locale,
  ogImage = DEFAULT_OG_IMAGE,
  keywords = [],
  noindex = false,
}: PageMetadata): Metadata {
  const url = `${BASE_URL}${locale === 'es' ? '/es' : ''}${path}`;
  const alternateUrl = `${BASE_URL}${locale === 'es' ? '' : '/es'}${path}`;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: 'Green Laniel' }],
    creator: 'Green Laniel',
    publisher: 'Green Laniel',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}${path}`,
        es: `${BASE_URL}/es${path}`,
        'x-default': `${BASE_URL}${path}`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: SITE_NAME,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}${ogImage}`],
      creator: '@greenlaniel',
      site: '@greenlaniel',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
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

  return metadata;
}

export const defaultKeywords = {
  en: [
    'plant biosignal monitoring',
    'plant stress detection',
    'greenhouse monitoring',
    'potato storage monitoring',
    'precision agriculture',
    'agricultural sensors',
    'plant electrophysiology',
    'Vita 1',
    'crop monitoring',
    'farm technology',
  ],
  es: [
    'monitoreo de bioseñales vegetales',
    'detección de estrés en plantas',
    'monitoreo de invernaderos',
    'monitoreo de almacenamiento de papa',
    'agricultura de precisión',
    'sensores agrícolas',
    'electrofisiología vegetal',
    'Vita 1',
    'monitoreo de cultivos',
    'tecnología agrícola',
  ],
};
