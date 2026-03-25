import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { MainNavigation } from '@/components/shared/main-navigation'
import { IMAGES } from '@/lib/constants/paths'
import { cn } from '@/lib/utils'

export const SiteHeader = () => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-200 ease-in-out has-data-open:bg-black/80',
        'bg-black'
      )}>
      <div className='relative container mx-auto flex h-12 w-11/12 items-center justify-between'>
        <a
          href='#contenido-principal'
          className='sr-only gap-2 bg-white text-center text-lg font-medium text-primary underline decoration-1 focus:not-sr-only focus:absolute focus:inset-0 focus:z-1000 focus:flex focus:size-full focus:items-center focus:justify-center'>
          Ir al contenido principal
          <ArrowRight className='size-4' />
        </a>
        <div className='flex h-full items-center justify-center laptop:absolute laptop:inset-0 laptop:left-1/2 laptop:z-50 laptop:w-fit laptop:-translate-x-1/2'>
          <Link prefetch={false} href={'/'} aria-label='Inicio'>
            <img
              className='h-9'
              src={IMAGES.BRAND.LOGO_NEGATIVE.PNG.URL}
              alt={IMAGES.BRAND.LOGO_NEGATIVE.PNG.ALT}
              decoding='async'
              loading='eager'
            />
          </Link>
        </div>

        <MainNavigation />
      </div>
    </header>
  )
}
