import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/contact/api', '/_next/', '/api/'],
      },
    ],
    sitemap: 'https://Sycamoregrowth.com/sitemap.xml',
  };
}
