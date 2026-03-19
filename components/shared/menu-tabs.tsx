'use client'

import { useQueryState } from 'nuqs'
import { ImageZoom } from '@/components/shared/image-zoom'
import { InView } from '@/components/shared/in-view'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PRODUCTS } from '@/lib/constants/products'

export const MenuCard = ({
  title,
  description,
  price,
  imageUrl,
  imageAlt,
  id,
}: {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  price: number
  id: string
}) => {
  const formattedPrice = new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
  }).format(price)

  return (
    <div className='group flex flex-col gap-4' id={id}>
      <div className='aspect-square rounded-base bg-(--brand-200) p-1 shadow-inner laptop:rounded-lg laptop:p-2'>
        <InView className='flex size-full items-center justify-center'>
          <ImageZoom
            src={imageUrl}
            alt={imageAlt}
            options={{
              background: 'rgba(0, 0, 0, 0.4)',
              margin: 60,
            }}
            decoding='async'
            loading='lazy'
            className='object-contain transition-transform! duration-300! group-hover:scale-105!'
          />
        </InView>
      </div>
      <div className='flex h-full flex-col gap-2'>
        <h3 className='font-heading text-lg text-primary laptop:text-2xl'>{title}</h3>
        <p className='text-sm text-muted-foreground laptop:text-base desktop:text-lg'>
          {description}
        </p>
        <div className='flex flex-1 items-end'>
          <p className='text-base laptop:text-lg'>{formattedPrice}</p>
        </div>
      </div>
    </div>
  )
}

export const MenuTabs = () => {
  const [type, setType] = useQueryState('tipo', { defaultValue: 'almuerzos-y-cenas' })

  return (
    <Tabs defaultValue={type} className='mt-4 w-full' onValueChange={value => setType(value)}>
      <TabsList className='w-full max-w-md desktop:h-10'>
        <TabsTrigger className='desktop:text-base' value='almuerzos-y-cenas'>
          Almuerzos y Cenas
        </TabsTrigger>
        <TabsTrigger className='desktop:text-base' value='postres'>
          Postres
        </TabsTrigger>
      </TabsList>
      <div className='mt-8'>
        <TabsContent value='almuerzos-y-cenas'>
          <div className='grid animate-fade-in-up grid-cols-2 gap-4 animate-duration-300 animate-ease-in-out tablet:grid-cols-3 laptop:gap-8 desktop:grid-cols-4'>
            {PRODUCTS.lunch.map(product => (
              <MenuCard
                id={product.id}
                key={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value='postres'>
          <div className='grid animate-fade-in-up grid-cols-2 gap-4 animate-duration-300 animate-ease-in-out tablet:grid-cols-3 laptop:gap-x-8 laptop:gap-y-12 desktop:grid-cols-4'>
            {PRODUCTS.desserts.map(product => (
              <MenuCard
                id={product.id}
                key={product.id}
                title={product.title}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}
