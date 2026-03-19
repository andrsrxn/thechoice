'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { IMAGES } from '@/lib/constants/paths'

export const SuccessForm = () => {
  const id = useSearchParams().get('id')

  if (!id || id !== 'D1VLAPO80FG') {
    redirect('/reservaciones')
  }

  return (
    <Card className='container mx-auto w-11/12 max-w-sm laptop:max-w-md'>
      <CardContent className='flex flex-col items-center justify-center gap-4'>
        <div className='relative'>
          <p className='text-center text-base text-pretty laptop:text-lg'>
            Escanea el siguiente código QR para obtener más información{' '}
            <span className='text-muted-foreground'>(Enlace a la web del desarrollador)</span>
          </p>
          <img
            src={IMAGES.WEB.DEVELOPER_QR.URL}
            alt={IMAGES.WEB.DEVELOPER_QR.ALT}
            decoding='async'
            loading='lazy'
            className='mt-4 aspect-square rounded-lg border'
          />
        </div>
      </CardContent>
      <div className='mt-4'>
        <Link
          href='/'
          className='flex w-full items-center justify-center gap-2 text-center text-base text-primary underline decoration-1 laptop:text-lg'
          prefetch={false}>
          <ArrowLeft className='size-4' />
          Regresar al inicio
        </Link>
      </div>
    </Card>
  )
}
