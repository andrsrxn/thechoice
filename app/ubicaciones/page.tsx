import { Fragment } from 'react/jsx-runtime'
import { LocationCard } from '@/components/locations/location-card'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { slugify } from '@/lib/utils'

export const metadata = {
  title: 'Ubicaciones',
  description: 'Encuentra nuestras sucursales y horarios en Guatemala',
}

export default function LocationsPage() {
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
          {Object.values(COMPANY.ADDRESSES).map((location, index) => (
            <Fragment key={location.LOCALITY}>
              <LocationCard
                id={slugify(location.LOCALITY)}
                title={location.LOCALITY}
                address1={location.REGION}
                address2={location.ADDRESS}
                mapLink={location.MAP_URL}
                image={location.IMAGE}
                imageAlt={location.IMAGE_ALT}
                pedidosYaUrl={location.PEDIDOS_YA_URL ?? undefined}
                description={location.DESCRIPTION as unknown as string[]}
                schedule={location.SCHEDULE as unknown as Array<{ day: string; schedule: string }>}
              />
              {index !== Object.keys(COMPANY.ADDRESSES).length - 1 && <Separator />}
            </Fragment>
          ))}
        </div>
      </section>
    </MainWrapper>
  )
}
