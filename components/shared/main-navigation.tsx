'use client'

import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { startTransition, useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const MainNavigation = ({ open: _open = false }: { open?: boolean }) => {
  const [open, setOpen] = useState(_open)

  const closeMenuAndTransition = () => {
    startTransition(() => {
      setOpen(false)
    })
  }
  return (
    <div className='laptop:w-full'>
      <Button
        onClick={() => setOpen(!open)}
        size='icon-lg'
        aria-label='Menu'
        variant='ghost'
        className='group laptop:hidden'>
        {open ? (
          <X className='size-5 animate-in text-white duration-200 ease-in-out zoom-in-60 group-hover:text-primary' />
        ) : (
          <Menu className='size-5 animate-in text-white duration-200 ease-in-out zoom-in-60 group-hover:text-primary' />
        )}
      </Button>
      <nav
        data-open={open}
        className={cn(
          'fixed top-0 left-0 flex h-[calc(100%-48px)] w-full translate-y-12 items-center justify-center overflow-y-auto bg-black/80 transition-[transform,opacity,z-index,visibility] duration-200 ease-in-out laptop:pointer-events-auto laptop:visible laptop:relative laptop:block laptop:h-full laptop:w-auto laptop:translate-y-0 laptop:opacity-100',
          open
            ? 'pointer-events-auto visible z-10 opacity-100'
            : 'pointer-events-none invisible z-0 opacity-0'
        )}>
        <div className='mx-auto grid w-11/12 laptop:flex laptop:w-full laptop:items-center laptop:justify-between laptop:gap-8'>
          <div className='contents w-1/2 laptop:flex laptop:items-center laptop:justify-start laptop:gap-x-12 desktop:gap-x-16'>
            <ul className='contents'>
              <li
                className={cn(
                  'flex w-full scale-92 items-center border-b opacity-0 transition-[scale,opacity] duration-150 ease-in-out laptop:w-fit laptop:scale-100 laptop:border-0 laptop:opacity-100',
                  open && 'scale-100 opacity-100 delay-50'
                )}>
                <Link
                  onClick={closeMenuAndTransition}
                  prefetch={false}
                  className='flex w-full items-center justify-between gap-4 px-2 py-6 text-lg text-white active:bg-white/10 laptop:w-fit laptop:p-0 laptop:text-base laptop:decoration-1 laptop:hover:underline laptop:active:bg-transparent'
                  href='/ubicaciones'>
                  Ubicaciones <ArrowRight className='size-4 laptop:hidden' />
                </Link>
              </li>
              <li
                className={cn(
                  'flex w-full scale-92 items-center border-b opacity-0 transition-[scale,opacity] duration-150 ease-in-out laptop:w-fit laptop:scale-100 laptop:border-0 laptop:opacity-100',
                  open && 'scale-100 opacity-100 delay-100'
                )}>
                <Link
                  prefetch={false}
                  onClick={closeMenuAndTransition}
                  className='flex w-full items-center justify-between gap-4 px-2 py-6 text-lg text-white active:bg-white/10 laptop:w-fit laptop:p-0 laptop:text-base laptop:decoration-1 laptop:hover:underline laptop:active:bg-transparent'
                  href='/menu'>
                  Menú <ArrowRight className='size-4 laptop:hidden' />
                </Link>
              </li>
              <li
                className={cn(
                  'flex w-full scale-92 items-center border-b opacity-0 transition-[scale,opacity] duration-150 ease-in-out laptop:w-fit laptop:scale-100 laptop:border-0 laptop:opacity-100',
                  open && 'scale-100 opacity-100 delay-150'
                )}>
                <Link
                  prefetch={false}
                  onClick={closeMenuAndTransition}
                  className='flex w-full items-center justify-between gap-4 px-2 py-6 text-lg text-white active:bg-white/10 laptop:w-fit laptop:p-0 laptop:text-base laptop:decoration-1 laptop:hover:underline laptop:active:bg-transparent'
                  href='/nosotros'>
                  Nosotros <ArrowRight className='size-4 laptop:hidden' />
                </Link>
              </li>
            </ul>
          </div>

          <div className='contents w-1/2 laptop:flex laptop:items-center laptop:justify-end laptop:gap-x-12 desktop:gap-x-16'>
            <ul className='contents'>
              <li
                className={cn(
                  'flex w-full scale-92 items-center border-b opacity-0 transition-[scale,opacity] duration-150 ease-in-out laptop:-mr-2 laptop:w-fit laptop:scale-100 laptop:border-0 laptop:opacity-100',
                  open && 'scale-100 opacity-100 delay-200'
                )}>
                <Link
                  onClick={closeMenuAndTransition}
                  prefetch={false}
                  className='flex w-full items-center justify-between gap-4 px-2 py-6 text-lg text-white active:bg-white/10 laptop:w-fit laptop:p-0 laptop:text-base laptop:decoration-1 laptop:hover:underline laptop:active:bg-transparent'
                  href='/contacto'>
                  Contacto <ArrowRight className='size-4 laptop:hidden' />
                </Link>
              </li>
              <li
                className={cn(
                  'flex w-full scale-92 items-center opacity-0 transition-[scale,opacity] duration-150 ease-in-out laptop:w-fit laptop:scale-100 laptop:border-0 laptop:opacity-100',
                  open && 'scale-100 opacity-100 delay-250'
                )}>
                <Link
                  onClick={closeMenuAndTransition}
                  prefetch={false}
                  className={cn(
                    buttonVariants(),
                    'flex h-auto w-full items-center justify-between gap-4 rounded-none px-2 py-6 text-lg laptop:h-9 laptop:w-fit laptop:rounded-base laptop:px-4 laptop:py-0 laptop:text-base laptop:squircle'
                  )}
                  href='/reservaciones'>
                  Reservar Mesa <ArrowRight className='size-4 laptop:hidden' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
