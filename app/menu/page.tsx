import { Suspense } from 'react'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { MenuTabs } from '@/components/shared/menu-tabs'
import { IMAGES } from '@/lib/constants/paths'

export const metadata = {
  title: 'Menú',
  description: 'Menú de The Choice',
  openGraph: {
    title: 'Menú',
    description: 'Menú de The Choice',
    images: [
      {
        url: IMAGES.PRODUCTS.MAIN_PLATES.URL,
        width: 1200,
        height: 630,
        alt: IMAGES.PRODUCTS.MAIN_PLATES.ALT,
      },
    ],
  },
}

export default function MenuPage() {
  return (
    <MainWrapper>
      <section className='mt-16 pt-12 pb-4'>
        <div className='container mx-auto flex w-11/12 flex-col gap-2'>
          <h1 className='font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Nuestas especialidades
          </h1>
          <p className='max-w-md text-base text-pretty laptop:max-w-lg laptop:text-lg'>
            Descubre nuestros platillos más representativos, preparados con ingredientes frescos y
            locales.
          </p>
        </div>
      </section>
      <section className='pb-12 laptop:pb-20'>
        <div className='container mx-auto w-11/12 gap-2'>
          <Suspense>
            <MenuTabs />
          </Suspense>
        </div>
      </section>
    </MainWrapper>
  )
}
