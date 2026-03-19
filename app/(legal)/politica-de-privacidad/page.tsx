import { MainWrapper } from '@/components/shared/main-wrapper'

export default function PrivacyPolicyPage() {
  return (
    <MainWrapper>
      <section className='mt-16 py-12'>
        <div className='container mx-auto flex w-11/12 flex-col items-center gap-2'>
          <h1 className='text-center font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Política de Privacidad
          </h1>
          <p className='text-center text-base laptop:max-w-lg laptop:text-lg'>
            Encuentra nuestras sucursales y horarios en Guatemala, ¡Próximamente en más lugares!
          </p>
        </div>
      </section>
    </MainWrapper>
  )
}
