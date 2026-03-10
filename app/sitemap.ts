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
      lastModified: new Date('2026-01-27').toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
