import { CounterAnimation } from '@/components/shared/counter-animation'
import { InView } from '@/components/shared/in-view'
import { MainWrapper } from '@/components/shared/main-wrapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'Menú',
}

export default function MenuPage() {
  return (
    <MainWrapper>
      <section className='mt-16 pt-12 pb-4'>
        <div className='container mx-auto flex w-11/12 flex-col items-center justify-center gap-3'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            The Choice Guatemala
          </h1>

          <span className='text-base text-muted-foreground laptop:text-lg'>더 초이스 과테말라</span>
          <p className='max-w-md text-center text-base text-pretty laptop:max-w-xl laptop:text-lg'>
            Somos un restaurante y panadería coreana ubicado en Guatemala, comprometidos con ofrecer
            una experiencia culinaria auténtica y de alta calidad. Desde platillos tradicionales
            hasta creaciones modernas, cada bocado está diseñado para deleitar tu paladar.
          </p>
        </div>
        <div className='relative container mx-auto mt-8 w-11/12 max-w-6xl animate-fade-in-up overflow-hidden animate-duration-500 animate-ease-in-out'>
          <img
            decoding='async'
            loading='lazy'
            src={IMAGES.PEOPLE.TEAM.URL}
            alt={IMAGES.PEOPLE.TEAM.ALT}
            className='aspect-square w-full mask-t-from-50% mask-t-to-100% object-cover object-[55%_100%] tablet:aspect-video tablet:object-center'
          />
          <div className='absolute bottom-0 left-1/2 flex w-[80%] max-w-60 -translate-x-1/2 items-center justify-center rounded-t-base border bg-white px-8 py-3'>
            <img
              className='mt-1 size-full max-w-xl object-contain'
              src={IMAGES.BRAND.LOGO.PNG.URL}
              alt={IMAGES.BRAND.LOGO.PNG.ALT}
            />
          </div>
        </div>
      </section>
      {/* counters */}
      <section className='py-12'>
        <InView>
          <div className='container mx-auto grid w-11/12 max-w-6xl grid-cols-2 items-center justify-center gap-x-6 gap-y-12 pl-8 tablet:grid-cols-4 tablet:pl-10 laptop:pl-16'>
            <div className='grid gap-2'>
              <CounterAnimation
                number={3}
                className='font-label text-5xl font-semibold text-primary lg:text-6xl'
              />
              <span className='text-base text-muted-foreground laptop:text-lg'>Ubicaciones</span>
            </div>
            <div className='grid gap-2'>
              <CounterAnimation
                number={15}
                className='font-label text-5xl font-semibold text-primary lg:text-6xl'
              />
              <span className='text-base text-muted-foreground laptop:text-lg'>
                Años de experiencia
              </span>
            </div>
            <div className='grid gap-2'>
              <CounterAnimation
                prefix='+'
                number={50}
                duration={1.5}
                className='font-label text-5xl font-semibold text-primary lg:text-6xl'
              />
              <span className='text-base text-muted-foreground laptop:text-lg'>Colaboradores</span>
            </div>
            <div className='grid gap-2'>
              <CounterAnimation
                prefix='+'
                number={1000}
                duration={1.5}
                className='font-label text-5xl font-semibold text-primary lg:text-6xl'
              />
              <span className='text-base text-muted-foreground laptop:text-lg'>
                Clientes satisfechos
              </span>
            </div>
          </div>
        </InView>
      </section>

      <Separator className='container mx-auto my-6 w-11/12 max-w-6xl' />
      <section className='py-16'>
        <div className='container mx-auto w-11/12 max-w-6xl'>
          <div>
            <div className='grid gap-2'>
              <h2 className='text-center font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
                Nuestra Historia
              </h2>
              <p className='mx-auto max-w-prose text-center text-base text-muted-foreground laptop:text-lg'>
                La historia de The Choice está basada en nuestra dedicación y amor por la
                gastronomía coreana y guatemalteca.
              </p>
            </div>
            <div className='mt-6'>
              <Carousel
                opts={{
                  align: 'center',
                }}
                className='max-w-6xl'>
                <CarouselContent>
                  {COMPANY.HISTORY.map((item, i) => (
                    <CarouselItem
                      key={item.title}
                      className='basis-1/1 tablet:basis-1/2 desktop:basis-1/3'>
                      <div className='grid h-full gap-3 rounded-lg bg-card py-12'>
                        <div className='relative flex items-center justify-center'>
                          <Separator className='absolute inset-0 top-1/2 w-full -translate-y-1/2' />
                          <span
                            className={cn(
                              'relative flex size-16 items-center justify-center rounded-full border bg-card text-center font-heading text-xl leading-none font-semibold text-primary',
                              i + 1 === COMPANY.HISTORY.length && 'bg-primary text-white'
                            )}>
                            {item.year}
                          </span>
                        </div>
                        <h3 className='mt-2 px-8 text-center font-heading text-2xl font-semibold text-primary'>
                          {item.title}
                        </h3>
                        <p className='px-8 text-center text-base text-muted-foreground laptop:text-lg'>
                          {item.description}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselNext className='absolute top-1/2 -right-3 size-10 -translate-y-1/2 tablet:-right-5 [&>svg]:size-6! [&>svg]:translate-x-0.5' />
                <CarouselPrevious className='absolute top-1/2 -left-3 size-10 -translate-y-1/2 tablet:-left-5 [&>svg]:size-6! [&>svg]:-translate-x-0.5' />
              </Carousel>
            </div>
          </div>
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
      <section className='py-12'>
        <div className='container mx-auto w-11/12 max-w-6xl'>
          <div className='grid gap-2'>
            <h2 className='text-center font-heading text-3xl text-primary tablet:text-4xl laptop:text-5xl'>
              Preguntas Frecuentes
            </h2>
            <p className='mx-auto max-w-prose text-center text-base text-muted-foreground laptop:text-lg'>
              ¿Tienes dudas? Aquí resolvemos las más comunes.
            </p>
          </div>
          <div className='mt-6'>
            <Accordion type='single' collapsible className='mx-auto w-full max-w-2xl'>
              {COMPANY.FAQ.map(item => (
                <AccordionItem key={item.pregunta} value={item.pregunta}>
                  <AccordionTrigger>{item.pregunta}</AccordionTrigger>
                  <AccordionContent>
                    <p className='text-base text-muted-foreground'>{item.respuesta}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
