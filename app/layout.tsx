import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import './globals.css'
import { fontBody, fontHeading } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata = baseMetadata
export const viewport = baseViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={cn('font-body antialiased', fontBody.variable, fontHeading.variable)}>
      <body className='isolate'>{children}</body>
    </html>
  )
}
