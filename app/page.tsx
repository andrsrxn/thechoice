import { ArrowRight, MapPin, PawPrint } from 'lucide-react'
import Link from 'next/link'
import { preload } from 'react-dom'
import { HeroImages } from '@/components/shared/hero-images'
import { InView } from '@/components/shared/in-view'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IMAGES } from '@/lib/constants/paths'

export default function Page() {

  preload(IMAGES.BACKGROUNDS.NATURE.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })
  preload(IMAGES.PRODUCTS.BASIL_PESTO.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })

  return (
    <MainWrapper>
      <section className='relative overflow-hidden'>
        <HeroImages />
        <div className='absolute top-22 left-[50%] container mx-auto flex h-fit w-11/12 -translate-x-[50%] flex-col items-center gap-4 tablet:top-26 tablet:gap-5 laptop:top-22'>
          <p className='text-center text-xs leading-none font-light tracking-[20%] text-white tablet:text-base'>
            Restaurant & Bakery
          </p>
          <h1 className='text-center font-heading text-4xl text-white tablet:text-5xl laptop:max-w-4xl laptop:text-6xl desktop:text-7xl'>
            Gastronomía coreana moderna, <span className='block tablet:inline'>en Guatemala</span>
          </h1>
          <div className='flex items-center justify-center gap-2 laptop:gap-4'>
            <Button asChild variant='outline' className='w-fit'>
              <Link prefetch={false} href='/menu'>
                Ver Menú
              </Link>
            </Button>
            <Button asChild variant='secondary' className='w-fit'>
              <Link prefetch={false} href='/reservaciones'>
                Reservar Mesa
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className='py-12 desktop:py-16'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h2 className='text-center font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
            Nuestras Especialidades
          </h2>
          <p className='text-center text-base desktop:text-lg'>
            Somos expertos creando los platos más representativos de Corea
          </p>
        </div>
        <div className='container mx-auto mt-6 grid w-11/12 max-w-7xl grid-cols-1 gap-6 tablet:grid-cols-2'>
          <InView inViewClassName='animate-fade-in-up animate-duration-500 animate-ease-in-out'>
            <Link prefetch={false} href={'/menu'} className='group relative block bg-black'>
              <div className='h-[400px] overflow-hidden laptop:h-[450px] desktop:h-[570px]'>
                <img
                  src={IMAGES.PRODUCTS.LUNCH.URL}
                  alt={IMAGES.PRODUCTS.LUNCH.ALT}
                  className='h-[107%] w-full mask-b-from-30% mask-b-to-90% object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
              </div>
              <div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 px-4 py-6 desktop:gap-3'>
                <h3 className='text-center font-heading text-3xl text-white laptop:text-4xl desktop:text-5xl'>
                  Almuerzos y Cenas
                </h3>
                <span className='flex w-fit items-center justify-center gap-2 leading-none text-white underline decoration-1 desktop:text-lg'>
                  Ver Menú{' '}
                  <ArrowRight className='size-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1' />
                </span>
              </div>
            </Link>
          </InView>
          <InView inViewClassName='animate-fade-in-up animate-duration-500 animate-ease-in-out'>
            <Link prefetch={false} href={'/menu'} className='group relative block bg-black'>
              <div className='h-[400px] overflow-hidden laptop:h-[450px] desktop:h-[570px]'>
                <img
                  src={IMAGES.PRODUCTS.DESSERT.URL}
                  alt={IMAGES.PRODUCTS.DESSERT.ALT}
                  className='h-[107%] w-full mask-b-from-30% mask-b-to-90% object-cover object-bottom transition-transform duration-500 ease-in-out group-hover:scale-105 desktop:object-[100%_80%]'
                />
              </div>
              <div className='absolute bottom-0 left-0 flex w-full flex-col items-center justify-center gap-2 px-4 py-6 desktop:gap-3'>
                <h3 className='text-center font-heading text-3xl text-white laptop:text-4xl desktop:text-5xl'>
                  Postres
                </h3>
                <span className='flex w-fit items-center justify-center gap-2 leading-none text-white underline decoration-1 desktop:text-lg'>
                  Ver Menú{' '}
                  <ArrowRight className='size-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1' />
                </span>
              </div>
            </Link>
          </InView>
        </div>
      </section>
      <section className='container mx-auto w-11/12 max-w-7xl pt-6 pb-12'>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
            Vive la experiencia con nosotros
          </h2>
          <p className='text-base desktop:text-lg'>
            Todos nuestros espacios son{' '}
            <Badge variant='success' className='text-sm laptop:h-6 laptop:text-base'>
              <PawPrint /> Pet Friendly
            </Badge>{' '}
            y rodeados de naturaleza.
          </p>
        </div>
        <div className='relative mt-8 grid gap-8'>
          <Card className='sticky top-20 animate-zoom-out animate-range-[40%_100%] timeline-view-block laptop:grid laptop:grid-cols-2 desktop:py-10'>
            <div className='flex flex-col laptop:pb-1'>
              <CardHeader className='desktop:px-10'>
                <CardTitle className='tablet:text-3xl desktop:text-4xl'>
                  Santa Lucía Milpas Altas
                </CardTitle>
              </CardHeader>
              <CardContent className='mt-2 flex h-full flex-col gap-6 desktop:px-10'>
                <p>
                  <span className='flex items-center gap-2 text-base desktop:text-lg'>
                    <MapPin className='size-4' /> Municipio de Sacatepéquez 
                  </span>
                  <span className='mt-1 block text-sm text-muted-foreground desktop:text-base'>
                    5A Calle 3-02, Santa Lucía Milpas Altas
                  </span>
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Nuestro rincón original, donde la montaña es nuestro principal acompañante.
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Reservamos cabañitas que incluye un sauna estilo coreano (seco y húmedo) y un área
                  de masajes.
                </p>
                <div className='flex flex-1 items-center gap-8 laptop:items-end'>
                  <Link
                    prefetch={false}
                    href='/ubicaciones'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver Horarios{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                  <Link
                    prefetch={false}
                    href='https://maps.app.goo.gl/xBJBQ1jMpaqQKSAp6'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver en Mapa{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                </div>
              </CardContent>
            </div>
            <CardContent className='mt-6 laptop:mt-0 desktop:px-10'>
              <img
                className='aspect-video bg-accent object-cover laptop:aspect-auto laptop:h-[350px] desktop:h-[400px]'
                src={IMAGES.LOCATIONS.QUETZALTENANGO.URL}
                alt={IMAGES.LOCATIONS.QUETZALTENANGO.ALT}
              />
            </CardContent>
          </Card>
          <Card className='sticky top-20 animate-zoom-out animate-range-[40%_100%] timeline-view-block laptop:grid laptop:grid-cols-2 desktop:py-10'>
            <div className='flex flex-col laptop:pb-1'>
              <CardHeader className='desktop:px-10'>
                <CardTitle className='tablet:text-3xl desktop:text-4xl'>EON Plaza</CardTitle>
              </CardHeader>
              <CardContent className='mt-2 flex h-full flex-col gap-6 desktop:px-10'>
                <p>
                  <span className='flex items-center gap-2 text-base desktop:text-lg'>
                    <MapPin className='size-4' /> Ciudad de Guatemala
                  </span>
                  <span className='mt-1 block text-sm text-muted-foreground desktop:text-base'>
                    4ta. Avenida, 03-48 zona 10
                  </span>
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Nuestra apertura más reciente en el centro de la ciudad.{' '}
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Un espacio moderno diseñado para disfrutar de nuestra propuesta de cocina fusión a
                  la carta.
                </p>
                <div className='flex flex-1 items-center gap-8 laptop:items-end'>
                  <Link
                    prefetch={false}
                    href='/ubicaciones'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver Horarios{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                  <Link
                    prefetch={false}
                    href='https://maps.app.goo.gl/6LYfYiSL2d6JhGut7'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver en Mapa{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                </div>
              </CardContent>
            </div>
            <CardContent className='mt-6 laptop:mt-0 desktop:px-10'>
              <img
                className='aspect-video bg-accent object-cover laptop:aspect-auto laptop:h-[350px] desktop:h-[400px]'
                src={IMAGES.LOCATIONS.Z10.URL}
                alt={IMAGES.LOCATIONS.Z10.ALT}
              />
            </CardContent>
          </Card>
          <Card className='sticky top-20 laptop:grid laptop:grid-cols-2 desktop:py-10'>
            <div className='flex flex-col laptop:pb-1'>
              <CardHeader className='desktop:px-10'>
                <CardTitle className='tablet:text-3xl desktop:text-4xl'>Mateo Express</CardTitle>
              </CardHeader>
              <CardContent className='mt-2 flex h-full flex-col gap-6 desktop:px-10'>
                <p>
                  <span className='flex items-center gap-2 text-base desktop:text-lg'>
                    <MapPin className='size-4' /> Ciudad de Guatemala
                  </span>
                  <span className='mt-1 block text-sm text-muted-foreground desktop:text-base'>
                    Calzada Mateo Flores 1-74, Zona 7
                  </span>
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Un rincón acogedor donde el aroma a pan recién horneado te da la bienvenida.
                </p>
                <p className='max-w-prose text-base desktop:text-lg'>
                  Especialistas en panadería artesanal y delicias coreanas dulces, ideales para
                  llevar o compartir un momento rápido en la zona.
                </p>
                <div className='flex flex-1 items-center gap-8 laptop:items-end'>
                  <Link
                    prefetch={false}
                    href='/ubicaciones'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver Horarios{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                  <Link
                    prefetch={false}
                    href='https://maps.app.goo.gl/PbqKhxvQNvivGVQZ9'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex items-center gap-1 text-base leading-none text-primary underline decoration-1 desktop:text-lg'>
                    Ver en Mapa{' '}
                    <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
                  </Link>
                </div>
              </CardContent>
            </div>
            <CardContent className='mt-6 laptop:mt-0 desktop:px-10'>
              <img
                className='aspect-video bg-accent object-cover laptop:aspect-auto laptop:h-[350px] desktop:h-[400px]'
                src={IMAGES.LOCATIONS.Z7.URL}
                alt={IMAGES.LOCATIONS.Z7.ALT}
              />
            </CardContent>
          </Card>
        </div>
      </section>
      <section className='pt-12 pb-8 desktop:pt-16 desktop:pb-12'>
        <div className='container mx-auto flex w-11/12 max-w-5xl flex-col justify-center gap-8 laptop:flex-row desktop:max-w-6xl desktop:gap-12'>
          <div className='relative size-[270px] overflow-hidden rounded-full border-2 tablet:size-[320px] laptop:shrink-0 desktop:size-[400px]'>
            <InView inViewClassName='animate-fade-in-up animate-duration-500 animate-ease-in-out'>
              <img
                src={IMAGES.PEOPLE.CEO.URL}
                alt={IMAGES.PEOPLE.CEO.ALT}
                decoding='async'
                loading='lazy'
                className='aspect-square size-full object-cover'
              />
            </InView>
          </div>
          <div className='flex flex-col gap-6 laptop:w-[50%]'>
            <h2 className='w-fit font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
              La esencia del restaurante
            </h2>
            <p className='block w-full text-base desktop:text-lg'>
              Nuestro nombre The Choice combina la palabra en inglés “Elección” y nuestro apellido
              “Choi”.
            </p>
            <p className='block w-full text-base desktop:text-lg'>
              Mi camino culinario comenzó en las raíces de Corea y se perfeccionó en las cocinas de
              España y Estados Unidos, pero mi corazón siempre ha pertenecido a Guatemala, el país
              donde crecí. Al regresar, sentí la misión de crear un puente entre estas dos culturas
              que tanto amo a través de la comida. Así nació The Choice en diciembre de 2021.
            </p>
            <p className='block w-full text-base desktop:text-lg'>
              No hay mayor satisfacción para mí que ver a un cliente sonreír tras probar algo nuevo
              por primera vez y saber que, a través de mi cocina, hemos dado un paso más para unir
              nuestras culturas.
            </p>
            <p className='block w-full text-base desktop:text-lg'>
              <span className='block font-bold'>Chef Choi</span>
              <span className='block'>Fundadora y Chef principal</span>
            </p>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
