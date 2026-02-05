import { Organization, Product, FAQPage, BreadcrumbList, LocalBusiness, WebSite } from 'schema-dts';

const BASE_URL = 'https://greenlaniel.com';

// Organization Schema - For all pages
export function getOrganizationSchema(locale: 'en' | 'es'): Organization {
  return {
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Green Laniel',
    legalName: 'Green Laniel Consulting LLC',
    url: BASE_URL,
    logo: `${BASE_URL}/logos/green-laniel.svg`,
    description:
      locale === 'es'
        ? 'Distribuidor exclusivo de tecnología Vivent en las Américas. Monitoreo de bioseñales vegetales para agricultura de precisión.'
        : 'Exclusive distributor of Vivent technology in the Americas. Plant biosignal monitoring for precision agriculture.',
    email: 'mauricio@greenlaniel.com',
    foundingDate: '2024',
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Mexico',
      },
      {
        '@type': 'Country',
        name: 'Colombia',
      },
      {
        '@type': 'Continent',
        name: 'North America',
      },
      {
        '@type': 'Continent',
        name: 'South America',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/green-laniel-consulting',
      'https://www.instagram.com/greenlaniel/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'mauricio@greenlaniel.com',
      availableLanguage: ['English', 'Spanish'],
      areaServed: ['US', 'MX', 'CO'],
    },
    knowsAbout: [
      'Plant biosignal monitoring',
      'Agricultural technology',
      'Precision agriculture',
      'Plant stress detection',
      'Greenhouse monitoring',
      'Potato storage management',
    ],
  };
}

// WebSite Schema - For homepage
export function getWebSiteSchema(locale: 'en' | 'es'): WebSite {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Green Laniel',
    description:
      locale === 'es'
        ? 'Monitoreo de bioseñales vegetales para detectar estrés en plantas 24-48 horas antes de síntomas visibles.'
        : 'Plant biosignal monitoring to catch stress 24-48 hours before visible symptoms.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: [locale === 'es' ? 'es-ES' : 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Product Schema - For Vita 1
export function getProductSchema(locale: 'en' | 'es'): Product {
  return {
    '@type': 'Product',
    '@id': `${BASE_URL}/vita-1#product`,
    name: 'Vita 1',
    brand: {
      '@type': 'Brand',
      name: 'Vivent',
    },
    description:
      locale === 'es'
        ? 'Sistema de monitoreo de bioseñales vegetales que detecta estrés en plantas 24-48 horas antes de síntomas visibles. Tecnología suiza validada por Agroscope.'
        : 'Plant biosignal monitoring system that detects stress 24-48 hours before visible symptoms. Swiss technology validated by Agroscope.',
    image: [
      `${BASE_URL}/vita-1-front.png`,
      `${BASE_URL}/vita-1-back.png`,
      `${BASE_URL}/vita-1-left.png`,
      `${BASE_URL}/vita-1-right.png`,
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '1000',
      highPrice: '7000',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${BASE_URL}/#organization`,
      },
      offers: [
        {
          '@type': 'Offer',
          name: locale === 'es' ? 'Año 1' : 'Year 1',
          price: '7000',
          priceCurrency: 'USD',
          description:
            locale === 'es'
              ? 'Incluye hardware, instalación profesional, 12 meses de suscripción, capacitación y soporte.'
              : 'Includes hardware, professional installation, 12-month subscription, training, and support.',
        },
        {
          '@type': 'Offer',
          name: locale === 'es' ? 'Año 2+' : 'Year 2+',
          price: '1000',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1000',
            priceCurrency: 'USD',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1',
              unitCode: 'ANN',
            },
          },
          description:
            locale === 'es'
              ? 'Suscripción anual de datos, soporte continuo y actualizaciones de software.'
              : 'Annual data subscription, ongoing support, and software updates.',
        },
      ],
    },
    category: 'Agricultural Equipment',
    applicationCategory: ['Precision Agriculture', 'Plant Monitoring', 'Agricultural IoT'],
    audience: {
      '@type': 'Audience',
      audienceType: 'Agricultural Businesses',
      geographicArea: {
        '@type': 'Place',
        name: 'Americas',
      },
    },
  };
}

// FAQ Schema - For FAQ sections
export function getFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
  pageUrl: string
): FAQPage {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// LocalBusiness Schema - Service area focused
export function getLocalBusinessSchema(locale: 'en' | 'es'): LocalBusiness {
  return {
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Green Laniel',
    image: `${BASE_URL}/logos/green-laniel.svg`,
    '@id': `${BASE_URL}`,
    url: BASE_URL,
    telephone: '+1-XXX-XXX-XXXX', // Update with actual phone if available
    email: 'mauricio@greenlaniel.com',
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States',
      },
      {
        '@type': 'Country',
        name: 'Mexico',
      },
      {
        '@type': 'Country',
        name: 'Colombia',
      },
    ],
    description:
      locale === 'es'
        ? 'Servicios de monitoreo de bioseñales vegetales en las Américas. Instalación profesional, capacitación y soporte en inglés y español.'
        : 'Plant biosignal monitoring services across the Americas. Professional installation, training, and support in English and Spanish.',
    openingHours: 'Mo-Fr 09:00-17:00',
    sameAs: [
      'https://www.linkedin.com/company/green-laniel-consulting',
      'https://www.instagram.com/greenlaniel/',
    ],
  };
}

// Helper function to generate JSON-LD script tag
export function generateJsonLd<T>(schema: T): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    ...schema,
  });
}
