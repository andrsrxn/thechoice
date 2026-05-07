/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: api */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { CheckSquare, Clock, InfoIcon, Mail, MapPin, Phone, StickyNote, Users } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { parsePhoneNumber } from 'react-phone-number-input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputCreditCard } from '@/components/ui/input-credit-card'
import { InputCreditCardDate } from '@/components/ui/input-credit-card-date'
import { InputGroup, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { checkoutSchema, reservationsSchema } from '@/schemas/reservations'
import { COMPANY } from '@/lib/constants/company'

export const CheckoutForm = () => {
  const [pending, startTransition] = useTransition()

  const searchParams = useSearchParams()
  const firstName = searchParams.get('firstName')
  const lastName = searchParams.get('lastName')
  const email = searchParams.get('email')
  const phone = searchParams.get('phone')
  const location = searchParams.get('location')
  const date = searchParams.get('date')
  const time = searchParams.get('time')
  const guests = searchParams.get('guests')
  const notes = searchParams.get('notes')
  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      NIT: '',
      creditCardNumber: '',
      creditCardExpirationDate: '',
      creditCardCVV: '',
    },
  })

  const validateData = reservationsSchema.safeParse({
    firstName,
    lastName,
    email,
    phone,
    location,
    date: new Date(date ?? ''),
    time,
    guests: Number(guests) ?? 0,
    notes,
    terms: true,
  })

  if (!validateData.success) {
    return null
  }

  const locationType = validateData.data.location === COMPANY.ADDRESSES.MAIN.LOCALITY ? 100 : 50
  const total = Number(validateData.data.guests) * 50 + locationType

  const formattedDate = format(validateData.data.date, 'EEEE, PPP', { locale: es })
  const phoneNumber = parsePhoneNumber(validateData.data.phone ?? '')
  if (!phoneNumber?.isValid()) {
    return null
  }

  const formattedPhone = phoneNumber.formatInternational()

  const onSubmit = () => {
    startTransition(() => {
      router.push('/reservaciones/pago-completado?id=D1VLAPO80FG')
    })
  }

  return (
    <Card className='w-full'>
      <CardContent className='flex flex-col-reverse laptop:grid laptop:grid-cols-2 laptop:gap-8'>
        <form id='form' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className='gap-6'>
            <Controller
              name='fullName'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-fullname'>Titular de la tarjeta</FieldLabel>
                  <Input
                    {...field}
                    disabled={pending}
                    id='form-fullname'
                    aria-invalid={fieldState.invalid}
                    placeholder='Juan Pérez'
                    autoComplete='cc-name'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='NIT'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-nit'>NIT</FieldLabel>
                  <Input
                    {...field}
                    disabled={pending}
                    id='form-nit'
                    aria-invalid={fieldState.invalid}
                    placeholder='12345678-9'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='creditCardNumber'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-credit-card-number'>Número de tarjeta</FieldLabel>
                  <InputCreditCard
                    {...field}
                    disabled={pending}
                    id='form-credit-card-number'
                    aria-invalid={fieldState.invalid}
                    placeholder='5555 5555 5555 5555'
                    autoComplete='cc-number'
                  />
                  <FieldDescription>Visa, Mastercard o American Express</FieldDescription>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <div className='grid grid-cols-2 gap-4'>
              <Controller
                name='creditCardExpirationDate'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-credit-card-expiration-date'>
                      Fecha de vencimiento
                    </FieldLabel>

                    <InputCreditCardDate
                      {...field}
                      disabled={pending}
                      id='form-credit-card-expiration-date'
                      aria-invalid={fieldState.invalid}
                      placeholder='01/27'
                    />

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name='creditCardCVV'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-credit-card-cvv'>CVV</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        disabled={pending}
                        id='form-credit-card-cvv'
                        aria-invalid={fieldState.invalid}
                        placeholder='123'
                        inputMode='numeric'
                        pattern='[0-9]{3,4}'
                        maxLength={4}
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton>
                            <InfoIcon />
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent align='end'>
                          <p>Los 3 dígitos de la parte posterior de tu tarjeta.</p>
                        </TooltipContent>
                      </Tooltip>
                    </InputGroup>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Button type='submit' className='w-full' disabled={pending} form='form'>
              {pending ? (
                <>
                  <Spinner />
                  Procesando el pago...
                </>
              ) : (
                `Reservar mesa por ${total.toLocaleString('es-GT', {
                  style: 'currency',
                  currency: 'GTQ',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`
              )}
            </Button>
          </FieldGroup>
        </form>
        <Separator className='my-8 laptop:hidden' />
        <div className='rounded-base bg-background p-4 tablet:grid tablet:grid-cols-2 tablet:gap-12 laptop:flex laptop:flex-col laptop:gap-8'>
          <div>
            <h3 className='text-lg font-semibold'>Detalles de la reservación</h3>

            <ul className='mt-4 grid gap-3'>
              <li className='flex items-center gap-2' aria-label='Restaurante' title='Restaurante'>
                <MapPin className='size-4 text-primary' />
                Restaurante {location}
              </li>
              <li
                className='flex items-center gap-2'
                aria-label='Fecha y hora'
                title='Fecha y hora'>
                <Clock className='size-4 text-primary' />
                {formattedDate}, {time}
              </li>
              <li
                className='flex items-center gap-2'
                aria-label='Número de personas'
                title='Número de personas'>
                <Users className='size-4 text-primary' />
                {validateData.data.guests} {validateData.data.guests === 1 ? 'persona' : 'personas'}
              </li>
              <li className='flex items-center gap-2' aria-label='A nombre de' title='A nombre de'>
                <CheckSquare className='size-4 text-primary' />
                <p>
                  A nombre de{' '}
                  <strong>
                    {validateData.data.firstName} {validateData.data.lastName}
                  </strong>
                </p>
              </li>
              {notes && (
                <li className='flex items-center gap-2' aria-label='Notas' title='Notas'>
                  <StickyNote className='size-4 text-primary' />
                  {notes}
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className='mt-8 block text-lg font-semibold tablet:mt-0'>Contacto</h3>
            <ul className='mt-4 grid gap-3'>
              <li
                className='flex items-center gap-2'
                aria-label='Correo electrónico'
                title='Correo electrónico'>
                <Mail className='size-4 text-primary' />
                {email}
              </li>
              <li className='flex items-center gap-2' aria-label='Teléfono' title='Teléfono'>
                <Phone className='size-4 text-primary' />
                {formattedPhone}
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <div className='mt-2 flex items-center gap-2 px-6'>
        <FieldDescription className='mt-2! block w-full text-center laptop:mt-0!'>
          <strong>Nota:</strong> Esta es una demo, el pago no se realizará.
        </FieldDescription>
      </div>
    </Card>
  )
}
