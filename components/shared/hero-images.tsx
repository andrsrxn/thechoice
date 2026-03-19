import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { IMAGES } from '@/lib/constants/paths'
import { PRODUCTS } from '@/lib/constants/products'

const CAROUSEL_ITEMS = [
  {
    id: PRODUCTS.lunch[5].id,
    bg: IMAGES.BACKGROUNDS.NATURE,
    fg: IMAGES.PRODUCTS.BASIL_PESTO,
    name: PRODUCTS.lunch[5].title,
    delay: 0,
  },
  {
    id: PRODUCTS.lunch[6].id,
    bg: IMAGES.BACKGROUNDS.NATURE_TABLE,
    fg: IMAGES.PRODUCTS.FLAME_GRILLED,
    name: PRODUCTS.lunch[6].title,
    delay: 4,
  },
]

export const HeroImages = () => {
  return (
    <div className='relative isolate h-[520px] w-full overflow-hidden bg-black tablet:h-[600px] desktop:h-[700px]'>
      {CAROUSEL_ITEMS.map(item => (
        <div key={item.id} className='pointer-events-none absolute inset-0 z-40 size-full'>
          <img
            className='absolute inset-0 size-full animate-carousel-bg mask-t-from-20% mask-t-to-90% object-cover'
            style={{ animationDelay: `${item.delay}s` }}
            src={item.bg.URL}
            alt={item.bg.ALT}
            decoding='async'
          />

          <div className='absolute bottom-0 left-[50%] w-sm -translate-x-[50%] tablet:w-lg desktop:w-2xl desktop:translate-y-8'>
            <img
              className='block w-full animate-carousel-fg'
              style={{ animationDelay: `${item.delay}s` }}
              src={item.fg.URL}
              alt={item.fg.ALT}
              decoding='async'
            />
            <Link
              prefetch={false}
              href={`/menu/#${item.id}`}
              style={{ animationDelay: `${item.delay + 0.2}s` }}
              className='absolute bottom-15 left-1/2 z-40 flex w-max shrink-0 -translate-x-1/2 animate-carousel-fg items-center justify-center gap-2 rounded-base border bg-tooltip px-4 py-1 text-center text-sm text-tooltip-foreground shadow-lg hover:underline hover:decoration-1 tablet:text-lg desktop:bottom-25'>
              {item.name}
              <ArrowRight className='size-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1' />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
