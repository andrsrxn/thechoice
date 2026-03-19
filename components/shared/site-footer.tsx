'use client'

import { Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Threads } from '@/components/icons/threads'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'

export const SiteFooter = () => {
  const pathname = usePathname()

  return (
    <footer>
      {pathname !== '/reservaciones' && (
        <section className='relative mt-12 h-[550px] border-t'>
          <div className='absolute top-0 left-0 size-full bg-black'>
            <img
              src={IMAGES.PRODUCTS.MAIN_PLATES.URL}
              alt={IMAGES.PRODUCTS.MAIN_PLATES.ALT}
              decoding='async'
              loading='lazy'
              className='h-[550px] w-full mask-t-from-20% mask-t-to-100% object-cover'
            />
          </div>
          <div className='sticky top-12 container mx-auto grid w-11/12 max-w-xl place-items-center gap-3 rounded-b-lg bg-white px-4 pt-8 pb-6 laptop:max-w-2xl laptop:gap-5'>
            <h2 className='text-center font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
              Disfruta de Corea en el corazón de Guatemala
            </h2>
            <Button className='w-fit' asChild>
              <Link prefetch={false} href='/reservaciones'>
                Reservar Mesa
              </Link>
            </Button>
          </div>
        </section>
      )}
      <div className='container mx-auto w-11/12 py-12'>
        <div className='grid grid-cols-1 gap-6 laptop:grid-cols-3 laptop:gap-0'>
          <div className='relative border-b pb-6 laptop:w-fit laptop:border-0 laptop:p-0'>
            <img
              src={IMAGES.BRAND.LOGO.PNG.URL}
              alt={IMAGES.BRAND.LOGO.PNG.ALT}
              className='h-9 w-fit'
            />
            <div className='absolute top-1/2 right-0 flex h-full w-fit -translate-y-1/2 items-start justify-center gap-2 tablet:gap-3 laptop:relative laptop:top-0 laptop:right-0 laptop:mt-4 laptop:w-full laptop:translate-y-0 laptop:justify-start'>
              <Button size={'icon-lg'} className='size-10' variant='ghost'>
                <Link
                  prefetch={false}
                  href={COMPANY.SOCIAL_MEDIA.FACEBOOK.URL}
                  target='_blank'
                  rel='noopener  noreferrer'
                  title={COMPANY.SOCIAL_MEDIA.FACEBOOK.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.FACEBOOK.LABEL}>
                  <Facebook className='size-6' />
                </Link>
              </Button>
              <Button size={'icon-lg'} className='size-10' variant='ghost'>
                <Link
                  prefetch={false}
                  href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}>
                  <Instagram className='size-6' />
                </Link>
              </Button>
              <Button size={'icon-lg'} className='size-10' variant='ghost'>
                <Link
                  prefetch={false}
                  href={COMPANY.SOCIAL_MEDIA.THREADS.URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={COMPANY.SOCIAL_MEDIA.THREADS.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.THREADS.LABEL}>
                  <Threads className='size-6' />
                </Link>
              </Button>
            </div>
          </div>
          <div className='border-b pb-6 laptop:col-span-2 laptop:flex laptop:items-end laptop:justify-end laptop:border-0 laptop:p-0'>
            <nav>
              <ul className='grid grid-cols-2 gap-4 tablet:flex tablet:justify-between laptop:w-full laptop:gap-8'>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/'>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/menu'>
                    Menú
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/ubicaciones'>
                    Ubicaciones
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/nosotros'>
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/contacto'>
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-base hover:underline hover:decoration-1'
                    href='/reservaciones'>
                    Reservar Mesa
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex flex-col gap-4 tablet:flex-row tablet:justify-between laptop:col-span-3 laptop:mt-8 laptop:border-t laptop:pt-8'>
            <div>
              <p className='text-sm'>
                &copy; {new Date().getFullYear()} {COMPANY.NAME}. Todos los derechos reservados.
              </p>
            </div>
            <nav>
              <ul className='grid grid-cols-2 gap-4 tablet:flex tablet:items-center tablet:gap-6'>
                <li>
                  <Link
                    prefetch={false}
                    className='text-sm hover:underline hover:decoration-1'
                    href='/'>
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    prefetch={false}
                    className='text-sm hover:underline hover:decoration-1'
                    href='/menu'>
                    Términos de uso
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className='relative bg-blue-950'>
        <img
          src={IMAGES.WEB.WEB_SIGNATURE.PNG.URL}
          alt={IMAGES.WEB.WEB_SIGNATURE.PNG.ALT}
          className='object-t h-7 w-full animate-pulse object-cover repeat-infinite tablet:h-9'
          decoding='async'
          loading='lazy'
        />
        <p className='absolute top-1/2 left-0 h-auto w-full -translate-y-1/2 px-6 text-center text-xs leading-none font-light text-white tablet:text-sm'>
          Desarrollado por{' '}
          <a
            className='font-medium underline decoration-1'
            target='_blank'
            rel='noopener noreferrer'
            href='https://andrsrxn.com'>
            andrsrxn.com
          </a>
        </p>
      </div>
    </footer>
  )
}
