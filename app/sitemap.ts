import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants/site'

export interface SitemapItem {
  url: string
  lastModified: string | Date | undefined
  changeFrequency:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
    | undefined
  priority: number | undefined
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.BASE_URL,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.BASE_URL}/menu`,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.BASE_URL}/nosotros`,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.BASE_URL}/reservaciones`,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    {
      url: `${SITE.BASE_URL}/terminos-y-condiciones`,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.BASE_URL}/politica-de-privacidad`,
      lastModified: new Date('2026-03-19').toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
