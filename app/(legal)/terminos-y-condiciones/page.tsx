import { MainWrapper } from '@/components/shared/main-wrapper'

export const metadata = {
  title: 'Términos y Condiciones',
  description:
    'Consulta nuestros términos y condiciones para conocer tus derechos y obligaciones como usuario.',
}

export default function PrivacyPolicyPage() {
  return (
    <MainWrapper>
      <section className='mt-16 py-12'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Términos y Condiciones
          </h1>
          <p className='text-center text-base laptop:max-w-lg laptop:text-lg'>
            Consulta nuestros términos y condiciones para conocer tus derechos y obligaciones como
            usuario.
          </p>
        </div>
      </section>
    </MainWrapper>
  )
}
