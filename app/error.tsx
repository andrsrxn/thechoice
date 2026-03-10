'use client'

import { RefreshCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='tablet:text-xl desktop:text-2xl text-lg leading-none text-muted-foreground'>
        500
      </span>
      <h1 className='tablet:text-7xl desktop:text-8xl text-center font-heading text-6xl'>
        Error Crítico
      </h1>
      <Button className='mt-2' onClick={reset}>
        Volver a intentar <RefreshCcw className='size-4' />
      </Button>
    </div>
  )
}
