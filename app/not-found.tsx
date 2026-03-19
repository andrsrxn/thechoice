import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function NotFoundPage() {
  return (
    <div className='isolate flex h-dvh animate-fade-in flex-col items-center justify-center gap-3 animate-duration-500 animate-ease-in-out'>
      <Badge
        variant='secondary'
        className='tablet:text-xl desktop:text-2xl h-7 px-3 text-lg leading-none'>
        404
      </Badge>
      <h1 className='desktop:text-7xl text-center font-heading text-6xl'>Página no encontrada</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg text-primary underline decoration-1 underline-offset-2'
        href='/menu'>
        Ver el Menú <ArrowRight className='size-4' />
      </Link>
    </div>
  )
}
