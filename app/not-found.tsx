import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='tablet:text-xl desktop:text-2xl text-lg leading-none text-muted-foreground'>
        404
      </span>
      <h1 className='desktop:text-7xl text-center font-heading text-6xl'>Página no encontrada</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg underline decoration-1 underline-offset-2'
        href='/'>
        Regresar al inicio <ArrowRight className='size-4' />
      </Link>
    </div>
  )
}
