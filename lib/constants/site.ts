import { envClient } from '@/lib/config/env.client'

export const SITE = {
  BASE_URL: envClient.NEXT_PUBLIC_SITE_URL,
  DOMAIN: new URL(envClient.NEXT_PUBLIC_SITE_URL).hostname,
  SEO: {
    COLOR_BACKGROUND: '#ffffff',
    COLOR_BRAND: '#674017',
    FILES: {
      MANIFEST: '/manifest.webmanifest',
      SITEMAP: '/sitemap.xml',
    },
  },
} as const
