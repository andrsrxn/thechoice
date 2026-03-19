import { CakeIcon, CarIcon, PawPrintIcon } from 'lucide-react'
import { Suspense } from 'react'
import { preload } from 'react-dom'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { ReservationsForm } from '@/components/shared/reservations-form'
import { IMAGES } from '@/lib/constants/paths'

export const metadata = {
  title: 'Reservaciones',
  description:
    'Reserva tu experiencia en The Choice Guatemala, el mejor restaurante coreano con platillos auténticos y un ambiente único.',
  openGraph: {
    title: 'Reservaciones',
    description:
      'Reserva tu experiencia en The Choice Guatemala, el mejor restaurante coreano con platillos auténticos y un ambiente único.',
    images: [
      {
        url: IMAGES.PRODUCTS.SECONDARY_PLATES.URL,
        width: 1200,
        height: 630,
        alt: IMAGES.PRODUCTS.SECONDARY_PLATES.ALT,
      },
    ],
  },
}

export default function MenuPage() {
  preload(IMAGES.PRODUCTS.SECONDARY_PLATES.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })
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
            Reserva tu experiencia
          </h1>

          <p className='max-w-md text-center text-base text-pretty text-primary-foreground laptop:max-w-xl laptop:text-lg'>
            Puedes reservar automáticamente desde el siguiente formulario y tu mesa estará lista,
            ¡Será un gusto atenderte!
          </p>
        </div>
        <div className='relative container mx-auto mt-8 w-11/12 max-w-2xl animate-fade-in-up animate-duration-500 animate-ease-in-out'>
          <Suspense>
            <ReservationsForm />
          </Suspense>
        </div>
      </section>
      <section className='pt-6 pb-20'>
        <div className='container mx-auto grid w-11/12 max-w-4xl gap-12 px-8 tablet:grid-cols-3 tablet:px-0 desktop:max-w-5xl'>
          <div className='flex flex-col gap-3 tablet:items-center'>
            <div className='flex size-12 items-center justify-center rounded-base bg-success text-success-foreground'>
              <PawPrintIcon className='size-8' />
            </div>
            <h3 className='mt-2 text-xl leading-none font-medium text-success-foreground tablet:text-center desktop:text-2xl'>
              Pet Friendly
            </h3>
            <p className='text-base text-pretty text-muted-foreground tablet:text-center desktop:text-lg'>
              Todos nuestros espacios están adaptados para que los disfrutes acompañados de tus
              mascotas.
            </p>
          </div>
          <div className='flex flex-col gap-3 tablet:items-center'>
            <div className='flex size-12 items-center justify-center rounded-base bg-success text-success-foreground'>
              <CarIcon className='size-8' />
            </div>
            <h3 className='mt-2 text-xl leading-none font-medium text-success-foreground tablet:text-center desktop:text-2xl'>
              Parqueo Privado
            </h3>
            <p className='text-base text-pretty text-muted-foreground tablet:text-center desktop:px-4 desktop:text-lg'>
              Todos tus invitados pueden gozar de un lugar reservado para sus vehículos.
            </p>
          </div>
          <div className='flex flex-col gap-3 tablet:items-center'>
            <div className='flex size-12 items-center justify-center rounded-base bg-success text-success-foreground'>
              <CakeIcon className='size-8' />
            </div>
            <h3 className='mt-2 text-xl leading-none font-medium text-success-foreground tablet:text-center desktop:text-2xl'>
              Ambiente Personalizado{' '}
            </h3>
            <p className='text-base text-pretty text-muted-foreground tablet:text-center laptop:px-2 desktop:px-4 desktop:text-lg'>
              Adaptamos nuestras instalaciones al tipo de evento que desees realizar.
            </p>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
