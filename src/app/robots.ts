import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin'],
    },
    sitemap: `${base_url}/sitemap.xml`,
  }
}
