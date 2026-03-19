import { Suspense } from 'react'
import { CheckoutForm } from '@/components/shared/checkout-form'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { IMAGES } from '@/lib/constants/paths'

export const metadata = {
  title: 'Checkout',
  description:
    'Último paso para confirmar tu reservación, puedes realizar el pago en el directamente en el siguiente formulario.',
}

export default function CheckoutPage() {
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
            Realiza tu pago
          </h1>

          <p className='max-w-md text-center text-base text-pretty text-primary-foreground laptop:max-w-xl laptop:text-lg'>
            Último paso para confirmar tu reservación, puedes realizar el pago en el directamente en
            el siguiente formulario.
          </p>
        </div>
        <div className='relative container mx-auto mt-8 w-11/12 max-w-2xl animate-fade-in-up animate-duration-500 animate-ease-in-out laptop:max-w-3xl'>
          <Suspense>
            <CheckoutForm />
          </Suspense>
        </div>
      </section>
    </MainWrapper>
  )
}
