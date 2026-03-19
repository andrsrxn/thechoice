import { Archivo } from 'next/font/google'
import localFont from 'next/font/local'

export const fontHeading = localFont({
  src: '../public/fonts/BeautiqueDisplay-Bold.woff2',
  variable: '--font-heading',
  display: 'swap',
  weight: '700',
  style: 'normal',
})

export const fontBody = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  style: 'normal',
  variable: '--font-body',
})
