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
      <div className='container mx-auto flex h-12 w-11/12 items-center justify-between'>
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
