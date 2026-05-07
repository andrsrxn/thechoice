import Link from 'next/link'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const metadata = {
  title: 'Política de Privacidad',
  description:
    'Conoce cómo protegemos tus datos personales y cuáles son tus derechos como usuario.',
}

export default function PrivacyPolicyPage() {
  return (
    <MainWrapper>
      <section className='mt-16 pt-12'>
        <div className='container mx-auto flex w-11/12 max-w-2xl flex-col gap-4 laptop:max-w-3xl'>
          <h1 className='font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Política de Privacidad
          </h1>
          <p className='mt-2 text-base laptop:text-lg'>
            En <strong>{COMPANY.NAME}</strong>, ubicado en {COMPANY.ADDRESSES.MAIN.LOCALITY},
            Guatemala, valoramos la confianza que deposita en nosotros al compartir su información.
          </p>
          <p className='text-base laptop:text-lg'>
            Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos sus datos
            personales a través de nuestro sitio web {SITE.BASE_URL}.
          </p>
          <p className='mt-6 text-base text-muted-foreground laptop:text-lg'>
            Última actualización: <span className='text-foreground'>19 de marzo de 2026</span>
          </p>
        </div>
      </section>
      <Separator className='container mx-auto my-12 w-11/12! max-w-2xl laptop:max-w-3xl' />
      <section className='pb-12'>
        <div className='container mx-auto w-11/12 max-w-2xl laptop:max-w-3xl'>
          <div className='prose prose-lg max-w-none text-base text-foreground laptop:text-lg'>
            <h2 className='uppercase'>Información que recopilamos</h2>
            <p>
              Para ofrecerle una experiencia gastronómica personalizada y eficiente, recopilamos los
              siguientes datos:
            </p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Datos proporcionados por el usuario</strong>: Nombre, apellido, dirección de
                correo electrónico y número de teléfono. Estos se obtienen principalmente al
                gestionar consultas o procesos de contacto.
              </li>
              <li>
                <strong>Datos recopilados automáticamente</strong>: Al navegar por nuestro sitio,
                nuestro sistema puede registrar su dirección IP, tipo de navegador, sistema
                operativo, país de origen y comportamiento de navegación a través de cookies y
                tecnologías similares.
              </li>
              <li>
                <strong>Datos de Transacciones y Reservas</strong>: Al realizar una reserva o pago,
                la información es procesada externamente.
              </li>
            </ul>
            <p>
              <strong>Nota</strong>: esta es una demo, por lo cual no se almacena ni se envía ningún
              dato proporcionado en este sitio web.
            </p>
            <h2 className='uppercase'>Uso de la información</h2>
            <p>La información recopilada se utiliza exclusivamente para:</p>
            <ul className='marker:text-primary'>
              <li>Gestionar y confirmar sus reservaciones.</li>
              <li>Responder a sus dudas, comentarios o solicitudes de atención al cliente.</li>
              <li>Mejorar la funcionalidad y seguridad de nuestro sitio web.</li>
              <li>Cumplir con obligaciones legales y contables en Guatemala.</li>
            </ul>
            <h2 className='uppercase'>Procesamiento por terceros</h2>
            <p>
              Para garantizar la máxima seguridad en sus datos sensibles, {COMPANY.NAME} utiliza
              servicios de terceros líderes en la industria:
            </p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Reservaciones y Pagos</strong>: Utilizamos la API de OpenTable para la
                gestión de horarios y la disponibilidad en tiempo real. OpenTable actúa como
                procesador de datos independiente.
              </li>
              <li>
                <strong>Transacciones con Tarjeta</strong>: Los pagos realizados con tarjeta de
                crédito o débito son procesados directamente por la pasarela de pagos integrada en
                OpenTable. {COMPANY.NAME} no almacena, procesa ni tiene acceso a los números
                completos de su tarjeta de crédito o códigos de seguridad.
              </li>
            </ul>
            <h2 className='uppercase'>Base legal y almacenamiento</h2>
            <p>
              Este sitio web opera actualmente como una versión de demostración. Aunque el
              formulario solicita datos como nombre, email y teléfono para fines de simulación de
              flujo de usuario, {COMPANY.NAME} no almacena de forma permanente ni comercializa estos
              datos en bases de datos persistentes fuera del entorno necesario para la funcionalidad
              de la API de OpenTable.
            </p>
            <h2 className='uppercase'>Seguridad de los datos</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger sus datos personales
              contra acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de
              transmisión por Internet es 100% seguro, por lo que no podemos garantizar seguridad
              absoluta.
            </p>
            <h2 className='uppercase'>Sus derechos</h2>
            <p>Como titular de los datos, usted tiene derecho a:</p>

            <ul className='marker:text-primary'>
              <li>Conocer qué datos tenemos sobre usted.</li>
              <li>Solicitar la corrección de datos inexactos.</li>
              <li>Solicitar la eliminación de sus datos de nuestros registros de contacto.</li>
            </ul>
            <p>
              Para ejercer estos derechos, por favor contáctenos a través de los canales indicados
              en la{' '}
              <Link
                className='text-primary underline decoration-1'
                prefetch={false}
                href='#contacto'>
                sección de contacto
              </Link>
              .
            </p>
            <h2 className='uppercase'>Uso de cookies</h2>
            <p>No utilizamos cookies en este sitio web.</p>
            <h2 className='uppercase'>Cambios en la política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Le notificaremos cualquier cambio
              sustancial a través de nuestro sitio web con una nueva fecha de "Última
              actualización".
            </p>
            <h2 className='uppercase'>Contacto</h2>
            <p>Para consultas sobre esta política, contáctenos en:</p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Correo electrónico</strong>:{' '}
                <Link
                  className='text-primary underline decoration-1'
                  prefetch={false}
                  href={`mailto:${COMPANY.EMAIL_ADDRESSES.INFO}@${SITE.DOMAIN}`}>
                  {`${COMPANY.EMAIL_ADDRESSES.INFO}@${SITE.DOMAIN}`}
                </Link>
              </li>
              <li>
                <strong>Teléfono</strong>:{' '}
                <Link
                  className='text-primary underline decoration-1'
                  prefetch={false}
                  href={`tel:${COMPANY.PHONE_NUMBERS.COUNTRY_CODE}${COMPANY.PHONE_NUMBERS.MAIN}`}>
                  {`${COMPANY.PHONE_NUMBERS.COUNTRY_CODE} ${COMPANY.PHONE_NUMBERS.MAIN.split('')
                    .map((digit, index) => (index % 4 === 0 ? ` ${digit}` : digit))
                    .join('')}`}
                </Link>
              </li>
              <li>
                <strong>Dirección</strong>: {COMPANY.ADDRESSES.MAIN.LOCALITY},{' '}
                {COMPANY.ADDRESSES.MAIN.REGION}, {COMPANY.ADDRESSES.MAIN.COUNTRY},{' '}
                {COMPANY.ADDRESSES.MAIN.POSTAL_CODE}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainWrapper>
  )
}
