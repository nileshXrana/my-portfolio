import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow private or staging routes if needed:
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://nileshrana.tech/sitemap.xml',
    host: 'https://nileshrana.tech',
  };
}
