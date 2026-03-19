import Link from 'next/link'
import { MainWrapper } from '@/components/shared/main-wrapper'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const metadata = {
  title: 'Términos y Condiciones',
  description:
    'Consulta nuestros términos y condiciones para conocer tus derechos y obligaciones como usuario.',
}

export default function PrivacyPolicyPage() {
  return (
    <MainWrapper>
      <section className='mt-16 pt-12'>
        <div className='container mx-auto flex w-11/12 max-w-2xl flex-col gap-4 laptop:max-w-3xl'>
          <h1 className='font-heading text-4xl text-primary tablet:text-5xl desktop:text-6xl'>
            Términos y Condiciones
          </h1>
          <p className='mt-2 text-base laptop:text-lg'>
            Bienvenido al sitio web de {COMPANY.NAME}. Al acceder a nuestro sitio, realizar una
            reservación o utilizar nuestros servicios de pago, usted acepta cumplir con los
            siguientes Términos y Condiciones. Le recomendamos leerlos detenidamente antes de
            proceder.
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
            <h2 className='uppercase'>Información general</h2>
            <p>
              El sitio web {SITE.BASE_URL} es propiedad de y operado por {COMPANY.NAME}, una empresa
              legalmente constituida en la República de Guatemala, con sede en Santa Lucía Milpas
              Altas. Nuestro servicio principal consiste en la oferta gastronómica de cocina fusión
              coreana-internacional y la gestión de experiencias culinarias en nuestras
              instalaciones.
            </p>
            <h2 className='uppercase'>Naturaleza de la plataforma (Demo)</h2>
            <p>
              Este sitio web funciona actualmente como una plataforma de demostración tecnológica.
              Aunque las interfaces de usuario permiten la interacción y simulación de flujos de
              reserva, el procesamiento final de los datos se rige por la integración con terceros.
              {COMPANY.NAME} no se hace responsable por errores técnicos derivados de la naturaleza
              experimental de la versión demo del sitio.
            </p>
            <h2 className='uppercase'>Política de reservaciones</h2>
            <p>
              Las reservaciones realizadas a través de este sitio web se gestionan mediante una
              plataforma de terceros.
            </p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Disponibilidad</strong>: Los horarios mostrados son en tiempo real según la
                configuración de nuestra API. La confirmación de una reserva está sujeta a la
                validación final del sistema.
              </li>
              <li>
                <strong>Precisión de Datos</strong>: El usuario es responsable de proporcionar un
                nombre, correo electrónico y número de teléfono válidos. {COMPANY.NAME} se reserva
                el derecho de cancelar reservas con información de contacto falsa o incompleta.
              </li>
              <li>
                <strong>Tolerancia</strong>: Contamos con un tiempo de espera de 10 minutos.
                Transcurrido este tiempo, la mesa podrá ser liberada para otros clientes sin previo
                aviso.
              </li>
            </ul>
            <p>
              <strong>Nota</strong>: esta es una demo, por lo cual no se realiza ni se envía ningúna
              reservación en este sitio web.
            </p>
            <h2 className='uppercase'>Pagos y transacciones financieras</h2>
            <p>
              El sitio permite la realización de pagos anticipados o depósitos de garantía para
              eventos especiales a través de la integración con terceros.
            </p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Procesamiento</strong>: Todos los pagos con tarjeta de crédito o débito son
                procesados directamente por la pasarela de pagos de terceros. {COMPANY.NAME} no
                almacena ni visualiza datos de tarjetas (Número de tarjeta, CVV, fechas de
                vencimiento).
              </li>
              <li>
                <strong>Moneda</strong>: Los precios se muestran en Quetzales (GTQ), incluyendo los
                impuestos de ley vigentes en Guatemala.
              </li>
              <li>
                <strong>Seguridad</strong>: El usuario acepta que cualquier disputa relacionada con
                el procesamiento del pago debe dirigirse inicialmente a la entidad bancaria emisora
                o a terceros como procesador del servicio.
              </li>
            </ul>
            <h2 className='uppercase'>Política de cancelación y devoluciones</h2>
            <p>
              Para garantizar la máxima seguridad en sus datos sensibles, {COMPANY.NAME} utiliza
              servicios de terceros líderes en la industria:
            </p>
            <ul className='marker:text-primary'>
              <li>
                <strong>Cancelaciones</strong>: Las cancelaciones deben realizarse con un mínimo de
                24 horas de anticipación a través del enlace de confirmación de plataformas de
                terceros o llamando directamente al restaurante.
              </li>
              <li>
                <strong>No-Show</strong>: En caso de no asistir a la reserva ("No-Show") sin previo
                aviso, {COMPANY.NAME} se reserva el derecho de aplicar cargos de penalización si se
                hubiese solicitado un depósito de garantía previo.
              </li>
              <li>
                <strong>Reembolsos</strong>: Los reembolsos por cancelaciones válidas se procesarán
                de acuerdo con las políticas del procesador de pagos y pueden tardar de 5 a 10 días
                hábiles en verse reflejados.
              </li>
            </ul>
            <h2 className='uppercase'>Conducta en el establecimiento</h2>
            <ul className='marker:text-primary'>
              <li>
                <strong>Ambiente</strong>: Nos esforzamos por mantener un ambiente familiar y
                acogedor. Nos reservamos el derecho de admisión o permanencia ante conductas que
                perturben la tranquilidad de otros comensales o del personal.
              </li>
              <li>
                <strong>Mascotas (Pet-Friendly)</strong>: Al ser un área rodeada de naturaleza, se
                permiten mascotas bajo la estricta responsabilidad del dueño. El dueño es
                responsable de cualquier daño material o alteración del orden causada por el animal.
              </li>
            </ul>
            <h2 className='uppercase'>Exención de Responsabilidad</h2>
            <p>
              Este sitio web funciona actualmente como una plataforma de demostración tecnológica.
              Aunque las interfaces de usuario permiten la interacción y simulación de flujos de
              reserva, el procesamiento final de los datos se rige por la integración con terceros.
              {COMPANY.NAME} no se hace responsable por errores técnicos derivados de la naturaleza
              experimental de la versión demo del sitio.
            </p>
            <h2 className='uppercase'>Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes
              y código fuente, es propiedad exclusiva de {COMPANY.NAME} o de sus licenciantes y está
              protegido por las leyes de derechos de autor de Guatemala y tratados internacionales.
            </p>
            <h2 className='uppercase'>Limitación de Responsabilidad</h2>
            <p>{COMPANY.NAME} no será responsable por:</p>

            <ul className='marker:text-primary'>
              <li>Interrupciones en el servicio web o caídas del sistema de la API de terceros.</li>
              <li>Pérdida de objetos personales dentro de las instalaciones del restaurante.</li>
              <li>
                Reacciones alérgicas derivadas de ingredientes si el cliente no informó previamente
                al personal sobre sus restricciones alimentarias.
              </li>
            </ul>
            <h2 className='uppercase'>Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República de Guatemala. Cualquier
              controversia será sometida a los tribunales competentes de la Ciudad de Guatemala o
              Sacatepéquez.
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
