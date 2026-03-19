import { Facebook, Globe, InfoIcon, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { Threads } from '@/components/icons/threads'
import { ContactForm } from '@/components/shared/contact-form'
import { InView } from '@/components/shared/in-view'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Button } from '@/components/ui/button'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'
import { obfuscateEmail } from '@/lib/utils'

export const metadata = {
  title: 'Contacto',
  descripcion:
    '¿Tienes dudas, sugerencias o quieres hablar con nuestro equipo? ¡Estamos para servirte!',
}

export default function MenuPage() {
  return (
    <MainWrapper>
      <section className='mt-16 py-12'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Contacto
          </h1>
          <p className='max-w-lg text-center text-base laptop:max-w-lg laptop:text-lg'>
            ¿Tienes dudas, sugerencias o quieres hablar con nuestro equipo? ¡Estamos para servirte!
          </p>
        </div>
      </section>
      <section className='mb-20 max-w-2xl tablet:mx-auto tablet:mt-2 tablet:w-11/12 laptop:mt-0 laptop:max-w-4xl'>
        <div className='container mx-auto w-11/12 tablet:flex tablet:gap-8 laptop:flex-col'>
          <div className='grid grid-cols-2 gap-10 tablet:flex tablet:w-[30%] tablet:shrink-0 tablet:flex-col laptop:grid laptop:h-fit laptop:w-full laptop:grid-cols-4 laptop:gap-12 laptop:pl-8'>
            <div className='grid gap-2'>
              <Mail className='size-4 text-primary' />
              <span className='font-semibold'>Correo electrónico</span>
              <a
                className='w-fit text-primary underline decoration-1'
                href={`mailto:${obfuscateEmail(`${COMPANY.EMAIL_ADDRESSES.INFO}@${SITE.DOMAIN}`)}`}>
                {`${COMPANY.EMAIL_ADDRESSES.INFO}@${SITE.DOMAIN}`}
              </a>
            </div>
            <div className='grid gap-2'>
              <Phone className='size-4 text-primary' />
              <span className='font-semibold'>Número de teléfono</span>
              <a
                className='w-fit text-primary underline decoration-1'
                href={`tel:${COMPANY.PHONE_NUMBERS.MAIN}`}>
                {COMPANY.PHONE_NUMBERS.MAIN}
              </a>
            </div>
            <div className='grid gap-2'>
              <MapPin className='size-4 text-primary' />
              <span className='font-semibold'>Ubicaciones</span>
              <Link
                prefetch={false}
                className='w-fit text-primary underline decoration-1'
                href={'/ubicaciones'}>
                Ver ubicaciones
              </Link>
            </div>
            <div className='grid gap-2'>
              <Globe className='size-4 text-primary' />
              <span className='font-semibold'>Redes sociales</span>
              <div className='-ml-1 flex items-center gap-2'>
                <Button variant={'ghost'} asChild size={'icon-sm'}>
                  <a
                    className='text-primary underline decoration-1'
                    href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}
                    aria-label={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
                    title={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}>
                    <Instagram />
                  </a>
                </Button>
                <Button variant={'ghost'} asChild size={'icon-sm'}>
                  <a
                    className='text-primary underline decoration-1'
                    href={COMPANY.SOCIAL_MEDIA.FACEBOOK.URL}
                    aria-label={COMPANY.SOCIAL_MEDIA.FACEBOOK.LABEL}
                    title={COMPANY.SOCIAL_MEDIA.FACEBOOK.LABEL}>
                    <Facebook />
                  </a>
                </Button>
                <Button variant={'ghost'} asChild size={'icon-sm'}>
                  <a
                    className='text-primary underline decoration-1'
                    href={COMPANY.SOCIAL_MEDIA.THREADS.URL}
                    aria-label={COMPANY.SOCIAL_MEDIA.THREADS.LABEL}
                    title={COMPANY.SOCIAL_MEDIA.THREADS.LABEL}>
                    <Threads />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className='mx-auto mt-10 max-w-xl tablet:mt-0 laptop:mt-2'>
            <InView inViewClassName='animate-fade-in-up'>
              <ContactForm />
              <div className='mt-6 flex gap-2'>
                <div className='mt-1 shrink-0'>
                  <InfoIcon className='size-3 text-muted-foreground' />
                </div>
                <p className='text-sm text-muted-foreground'>
                  Si deseas hacer una reservación, por favor utiliza nuestro{' '}
                  <Link
                    prefetch={false}
                    href='/reservaciones'
                    className='inline text-primary underline decoration-1'>
                    formulario de reservaciones
                  </Link>
                  .
                </p>
              </div>
            </InView>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
