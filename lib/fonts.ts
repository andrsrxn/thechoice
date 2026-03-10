import { Archivo } from 'next/font/google'
import localFont from 'next/font/local'

export const fontHeading = localFont({
  src: '../public/fonts/BeautiqueDisplay-Regular.woff2',
  variable: '--font-heading',
  display: 'swap',
  weight: '400',
  style: 'normal',
})

export const fontBody = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  style: 'normal',
  variable: '--font-body',
})
