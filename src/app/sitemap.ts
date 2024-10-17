import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL

  // const postEntries: MetadataRoute.Sitemap = PROJECTS.map(({ slug }) => ({
  //   url: `${base_url}/projects/${slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly',
  //   priority: 0.7,
  // }))

  return [
    {
      url: `${base_url}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base_url}/about-me`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base_url}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base_url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
