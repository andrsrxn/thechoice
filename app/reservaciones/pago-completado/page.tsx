'use client'

import { redirect, useSearchParams } from 'next/navigation'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { SuccessForm } from '@/components/shared/success-form'
import { IMAGES } from '@/lib/constants/paths'

export default function CompletedPage() {
  const searchParams = useSearchParams()
  if (searchParams.get('id') !== 'D1VLAPO80FG') {
    redirect('/reservaciones')
  }
  return (
    <MainWrapper>
      <section className='pb-12'>
        <div className='relative isolate z-0 h-full bg-black pt-16'>
          <img
            src={IMAGES.PRODUCTS.SECONDARY_PLATES.URL}
            alt={IMAGES.PRODUCTS.SECONDARY_PLATES.ALT}
            decoding='async'
            loading='lazy'
            className='h-[520px] w-full object-cover desktop:h-[550px]'
          />
          <div className='absolute inset-0 h-full bg-linear-to-b from-black to-black/50' />
        </div>
        <div className='relative z-10 container mx-auto -mt-[450px] flex w-11/12 flex-col items-center justify-center gap-3'>
          <h1 className='text-center font-heading text-4xl text-primary-foreground tablet:text-5xl desktop:text-6xl'>
            Reservado con éxito
          </h1>

          <p className='max-w-md text-center text-base text-pretty text-primary-foreground laptop:max-w-xl laptop:text-lg'>
            Gracias por tu reservación, te enviaremos un correo electrónico con los detalles de tu
            reservación y tu factura.
          </p>
        </div>
        <div className='relative container mx-auto mt-8 w-auto animate-fade-in-up animate-duration-500 animate-ease-in-out'>
          <SuccessForm />
        </div>
      </section>
    </MainWrapper>
  )
}
