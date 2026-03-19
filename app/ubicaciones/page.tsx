import type { UrlObject } from 'node:url'
import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { Schedule, ScheduleItem } from '@/components/locations/schedule'
import { InView } from '@/components/shared/in-view'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Separator } from '@/components/ui/separator'
import { IMAGES } from '@/lib/constants/paths'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Ubicaciones',
  description: 'Encuentra nuestras sucursales y horarios en Guatemala',
}

export const LocationCard = ({
  title,
  address1,
  address2,
  mapLink,
  image,
  imageAlt,
  schedule,
  className,
  pedidosYaUrl,
  description,
  ...props
}: ComponentProps<'div'> & {
  title: string
  address1: string
  address2: string
  mapLink: UrlObject | string
  image: string
  imageAlt: string
  pedidosYaUrl?: UrlObject | string
  schedule: Array<{ day: string; schedule: string }>
  description: string[]
}) => {
  return (
    <div
      className={cn('relative grid gap-5 laptop:grid-cols-2 laptop:gap-10', className)}
      {...props}>
      <div className='contents laptop:sticky laptop:top-20 laptop:flex laptop:h-fit laptop:flex-col laptop:gap-5'>
        <h2 className='font-heading text-3xl leading-none text-primary tablet:text-4xl desktop:text-5xl'>
          {title}
        </h2>

        <InView inViewClassName='animate-fade-in-up animate-duration-500 animate-ease-in-out'>
          <img
            className='mt-1 aspect-square bg-accent object-cover shadow-2xl tablet:aspect-auto tablet:h-[400px] laptop:h-[350px] desktop:h-[420px]'
            src={image}
            alt={imageAlt}
          />
        </InView>
      </div>
      <div className='mt-8 contents laptop:mt-15 laptop:flex laptop:flex-col laptop:gap-5 desktop:mt-18'>
        <p className='grid gap-3'>
          <span className='flex items-center gap-2 text-base leading-none desktop:text-lg'>
            <MapPin className='size-4' /> {address1}
          </span>
          <span className='block text-sm leading-none text-muted-foreground desktop:text-base'>
            {address2}
          </span>
        </p>
        {description.map(item => (
          <p key={item} className='max-w-prose text-base desktop:text-lg'>
            {item}
          </p>
        ))}
        <div className='flex gap-4'>
          {pedidosYaUrl && (
            <Link
              href={pedidosYaUrl}
              target='_blank'
              prefetch={false}
              rel='noopener noreferrer'
              className='group flex w-fit items-center gap-2 rounded-full bg-[#ea044e] px-4 py-2 text-base leading-none text-white decoration-1 transition hover:bg-[#cc0041] active:scale-98 laptop:mt-2 desktop:text-lg'>
              Ver en PedidosYa{' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                role='img'
                className='size-4'
                aria-hidden='true'
                aria-label='Logo de PedidosYa'>
                <path
                  fill='#ffffff'
                  d='M14.74 3.7H3.29a.286.286 0 0 0-.289.283v1.612c0 1.76 1.27 2.73 3.573 2.73h8.168c.837.035 1.497.708 1.497 1.528 0 .82-.66 1.493-1.497 1.529H5.585a.287.287 0 0 0-.272.237l-2.177 8.363a.278.278 0 0 0 .052.243c.054.07.139.11.228.11h2.891a1.822 1.822 0 0 0 1.735-1.346l.867-3.043h5.832c3.457 0 6.259-2.741 6.259-6.123C21 6.442 18.198 3.7 14.74 3.7Z'
                />
              </svg>
            </Link>
          )}
          <Link
            href={mapLink}
            target='_blank'
            prefetch={false}
            rel='noopener noreferrer'
            className='group flex w-fit items-center gap-1 text-base leading-none text-primary underline decoration-1 laptop:mt-2 desktop:text-lg'>
            Ver en Mapa{' '}
            <ArrowRight className='size-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1' />
          </Link>
        </div>

        <div className='mt-5 grid gap-4 laptop:mt-12'>
          <h3 className='font-heading text-2xl text-primary laptop:text-3xl'>Horarios</h3>
          <Schedule>
            {schedule.map(item => (
              <ScheduleItem key={item.day} day={item.day} schedule={item.schedule} />
            ))}
          </Schedule>
        </div>
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <MainWrapper>
      <section className='mt-16 py-12'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Ubicaciones
          </h1>
          <p className='text-center text-base laptop:max-w-lg laptop:text-lg'>
            Encuentra nuestras sucursales y horarios en Guatemala, ¡Próximamente en más lugares!
          </p>
        </div>
      </section>
      <section className='mt-8 mb-32'>
        <div className='container mx-auto grid w-11/12 gap-16'>
          <LocationCard
            id='santa-lucia-milpas-altas'
            title='Santa Lucía Milpas Altas'
            address1='Departamento de Sacatepéquez'
            address2='5A Calle 3-02, Santa Lucía Milpas Altas'
            mapLink='https://maps.app.goo.gl/xBJBQ1jMpaqQKSAp6'
            image={IMAGES.LOCATIONS.QUETZALTENANGO.URL}
            imageAlt={IMAGES.LOCATIONS.QUETZALTENANGO.ALT}
            description={[
              'Nuestro rincón original, donde la montaña es nuestro principal acompañante.',
              'Reservamos cabañitas que incluye un sauna estilo coreano (seco y húmedo) y un área de masajes.',
            ]}
            schedule={[
              { day: 'Lunes', schedule: '8:30 AM - 6:00 PM' },
              { day: 'Martes', schedule: 'Cerrado' },
              { day: 'Miércoles', schedule: '8:30 AM - 6:00 PM' },
              { day: 'Jueves', schedule: '8:30 AM - 6:00 PM' },
              { day: 'Viernes', schedule: '8:30 AM - 6:00 PM' },
              { day: 'Sábado', schedule: '8:00 AM - 6:00 PM' },
              { day: 'Domingo', schedule: '8:00 AM - 6:00 PM' },
            ]}
          />

          <Separator />
          <LocationCard
            id='eon-plaza'
            title='EON Plaza'
            address1='Ciudad de Guatemala'
            address2='4ta. Avenida, 03-48 zona 10'
            mapLink='hhttps://maps.app.goo.gl/H1B8PcFidAF3soAH8'
            image={IMAGES.LOCATIONS.Z10.URL}
            imageAlt={IMAGES.LOCATIONS.Z10.ALT}
            description={[
              'Nuestra apertura más reciente en el centro de la ciudad.',
              'Un espacio moderno diseñado para disfrutar de nuestra propuesta de cocina fusión a la carta.',
            ]}
            schedule={[
              { day: 'Lunes', schedule: '9:00 AM - 6:00 PM' },
              { day: 'Martes', schedule: 'Cerrado' },
              { day: 'Miércoles', schedule: '9:00 AM - 6:00 PM' },
              { day: 'Jueves', schedule: '9:00 AM - 6:00 PM' },
              { day: 'Viernes', schedule: '9:00 AM - 6:00 PM' },
              { day: 'Sábado', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Domingo', schedule: '9:00 AM - 4:00 PM' },
            ]}
          />
          <Separator />
          <LocationCard
            id='mateo-express'
            title='Mateo Express'
            pedidosYaUrl='https://www.pedidosya.com.gt/restaurantes/ciudad-de-guatemala/the-choice-bakery-9ff838da-3b84-4f48-bd93-8cdd65e68e70-menu'
            address1='Ciudad de Guatemala'
            address2='Calzada Mateo Flores 1-74, Zona 7'
            mapLink='https://maps.app.goo.gl/YTpcbD1oPPPeoXdP7'
            image={IMAGES.LOCATIONS.Z7.URL}
            imageAlt={IMAGES.LOCATIONS.Z7.ALT}
            description={[
              'Un rincón acogedor donde el aroma a pan recién horneado te da la bienvenida.',
              'Especialistas en panadería artesanal y delicias coreanas dulces, ideales para llevar o compartir un momento rápido en la zona.',
            ]}
            schedule={[
              { day: 'Lunes', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Martes', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Miércoles', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Jueves', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Viernes', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Sábado', schedule: '9:00 AM - 4:00 PM' },
              { day: 'Domingo', schedule: '9:00 AM - 4:00 PM' },
            ]}
          />
        </div>
      </section>
    </MainWrapper>
  )
}
