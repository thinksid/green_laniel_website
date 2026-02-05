import { MetadataRoute } from 'next';

const BASE_URL = 'https://greenlaniel.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/vita-1', '/about', '/contact'];
  const locales = ['en', 'es'];

  const currentDate = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Add root URLs (English default)
  routes.forEach((route) => {
    entries.push({
      url: `${BASE_URL}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          es: `${BASE_URL}/es${route}`,
        },
      },
    });
  });

  // Add Spanish URLs explicitly
  routes.forEach((route) => {
    entries.push({
      url: `${BASE_URL}/es${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}${route}`,
          es: `${BASE_URL}/es${route}`,
        },
      },
    });
  });

  return entries;
}
