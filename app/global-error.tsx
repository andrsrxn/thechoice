'use client'

import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fontBody, fontHeading } from '@/lib/fonts'

export const metadata = {
  title: 'Error',
  description: 'Ocurrió un error inesperado, por favor intenta de nuevo.',
}

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html
      lang='es'
      className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased`}>
      <body className='isolate'>
        <main className='container mx-auto w-11/12'>
          <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
            <span className='text-lg leading-none text-muted-foreground tablet:text-xl desktop:text-2xl'>
              500
            </span>
            <h1 className='text-center font-heading text-6xl tablet:text-7xl desktop:text-8xl'>
              Error Crítico
            </h1>
            <Button className='mt-2' onClick={reset}>
              <RefreshCcw className='size-4' /> Volver a intentar
            </Button>
          </div>
        </main>
      </body>
    </html>
  )
}
