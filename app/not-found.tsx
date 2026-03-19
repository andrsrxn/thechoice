import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: '404 - Página no encontrada',
  description: 'La página que buscas no existe o fue eliminada.',
}

export default function NotFoundPage() {
  return (
    <div className='isolate flex h-dvh animate-fade-in flex-col items-center justify-center gap-3 animate-duration-500 animate-ease-in-out'>
      <Badge
        variant='secondary'
        className='h-7 px-3 text-lg leading-none tablet:text-xl desktop:text-2xl'>
        404
      </Badge>
      <h1 className='text-center font-heading text-6xl desktop:text-7xl'>Página no encontrada</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg text-primary underline decoration-1 underline-offset-2'
        href='/menu'>
        Ver el Menú <ArrowRight className='size-4' />
      </Link>
    </div>
  )
}
