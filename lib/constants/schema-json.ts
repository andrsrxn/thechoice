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

// export const SERVICES_SCHEMA: WithContext<ProfessionalService> = {
//   '@context': 'https://schema.org',
//   '@type': 'ProfessionalService',
//   url: SITE.BASE_URL,
//   name: COMPANY.NAME,
//   areaServed: 'Guatemala',
//   currenciesAccepted: ['GTQ', 'USD'],
//   image: IMAGES.BRAND.LOGO.PNG.URL,

//   address: {
//     '@type': 'PostalAddress',
//     availableLanguage: ['es-419', 'es', 'en-US', 'en-GB'],
//     postalCode: COMPANY.ADDRESS.POSTAL_CODE,
//     addressRegion: COMPANY.ADDRESS.REGION,
//     addressLocality: COMPANY.ADDRESS.LOCALITY,
//     addressCountry: COMPANY.ADDRESS.COUNTRY,
//   },
//   priceRange: '$$$',
// }
