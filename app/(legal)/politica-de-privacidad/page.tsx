import { MainWrapper } from '@/components/shared/main-wrapper'

export const metadata = {
  title: 'Política de Privacidad',
  description:
    'Conoce cómo protegemos tus datos personales y cuáles son tus derechos como usuario.',
}

export default function PrivacyPolicyPage() {
  return (
    <MainWrapper>
      <section className='mt-16 py-12'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Política de Privacidad
          </h1>
          <p className='text-center text-base laptop:max-w-lg laptop:text-lg'>
            Conoce cómo protegemos tus datos personales y cuáles son tus derechos como usuario.
          </p>
        </div>
      </section>
      <section>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <div className='prose prose-invert prose-lg max-w-none'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
