import type { WebSite, WithContext } from 'schema-dts'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const WEBSITE_SCHEMA: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  description: COMPANY.DESCRIPTION,
  inLanguage: 'es',
}
