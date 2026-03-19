import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import './globals.css'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { preconnect } from 'react-dom'
import { SiteFooter } from '@/components/shared/site-footer'
import { SiteHeader } from '@/components/shared/site-header'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { fontBody, fontHeading } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata = baseMetadata
export const viewport = baseViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  preconnect('https://res.cloudinary.com')

  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={cn('font-body antialiased', fontBody.variable, fontHeading.variable)}>
      <body className='isolate'>
        <SiteHeader />
        <NuqsAdapter>
          <TooltipProvider>{children}</TooltipProvider>
        </NuqsAdapter>

        <SiteFooter />
        <Toaster />
      </body>
    </html>
  )
}
