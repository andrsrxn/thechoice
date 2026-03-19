'use client'

import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-lg leading-none text-muted-foreground tablet:text-xl desktop:text-2xl'>
        500
      </span>
      <h1 className='text-center font-heading text-6xl tablet:text-7xl desktop:text-8xl'>
        Error Crítico
      </h1>
      <Button className='mt-2' onClick={reset}>
        Volver a intentar <RefreshCcw className='size-4' />
      </Button>
    </div>
  )
}
