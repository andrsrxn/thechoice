import type { Metadata, Viewport } from 'next'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'
import { SITE } from '@/lib/constants/site'

export const baseViewport: Viewport = {
  themeColor: SITE.SEO.COLOR_BACKGROUND,
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.BASE_URL),
  title: {
    template: `%s | ${COMPANY.NAME}`,
    default: `${COMPANY.NAME}`,
  },
  alternates: {
    canonical: '/',
  },
  keywords: ['Restaurante coreano', 'Restaurante y panadería', 'Comida coreana Guatemala'],
  applicationName: COMPANY.NAME,
  referrer: 'strict-origin-when-cross-origin',
  description: COMPANY.DESCRIPTION,
  openGraph: {
    title: COMPANY.NAME,
    description: COMPANY.DESCRIPTION,
    siteName: COMPANY.NAME,
    url: '/',
    images: [
      {
        url: IMAGES.BRAND.BANNER_SOCIAL.PNG.URL,
        width: 1200,
        height: 630,
        alt: 'Logo de The Choice en la esquina superior izquierda con el fondo de sus platillos emblemáticos',
      },
    ],
    locale: 'es',
    countryName: 'GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.NAME,
    description: COMPANY.DESCRIPTION,
    images: [IMAGES.BRAND.BANNER_SOCIAL.PNG.URL],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: COMPANY.NAME,
  },

  icons: {
    icon: [
      {
        url: IMAGES.BRAND.ICON.FAVICON.SVG.URL,
        type: 'image/svg+xml',
        rel: 'icon',
      },
    ],
    apple: { url: IMAGES.BRAND.ICON.APPLE.PNG.URL, sizes: '180x180', type: 'image/png' },
  },
}
