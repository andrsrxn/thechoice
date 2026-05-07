/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: form */
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { parsePhoneNumber } from 'react-phone-number-input'
import { toast } from 'sonner'
import type * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { DatePicker } from '@/components/ui/date-picker'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { InputNumberCounter } from '@/components/ui/input-number-counter'
import { PhoneInput } from '@/components/ui/input-phone'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Spinner } from '@/components/ui/spinner'
import { COMPANY } from '@/lib/constants/company'
import { reservationsSchema } from '@/schemas/reservations'

export const ReservationsForm = () => {
  const [pending, startTransition] = useTransition()
  const [total, setTotal] = useState({
    location: 0,
    guests: 0,
  })
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const formattedTotal = (total.location + total.guests).toLocaleString('es-GT', {
    style: 'currency',
    currency: 'GTQ',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const form = useForm({
    resolver: zodResolver(reservationsSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: COMPANY.ADDRESSES.MAIN.LOCALITY,
      date: undefined,
      time: '',
      guests: 1,
      notes: '',
      terms: false,
    },
  })

  useEffect(() => {
    setTotal({
      location: form.getValues('location') === COMPANY.ADDRESSES.MAIN.LOCALITY ? 100 : 50,
      guests: form.getValues('guests') * 50,
    })
  }, [form.getValues])

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  function onSubmit(data: z.infer<typeof reservationsSchema>) {
    const phoneNumber = parsePhoneNumber(data.phone)
    if (!phoneNumber?.isValid()) {
      toast.error('Número de teléfono inválido')
      return
    }

    startTransition(() => {
      router.push(
        `${pathname}/checkout?${createQueryString('firstName', data.firstName)}&${createQueryString('lastName', data.lastName)}&${createQueryString('email', data.email)}&${createQueryString('phone', data.phone)}&${createQueryString('location', data.location)}&${createQueryString('date', data.date.toISOString())}&${createQueryString('time', data.time)}&${createQueryString('guests', data.guests.toString())}&${createQueryString('notes', data.notes ?? '')}`
      )
    })
  }

  return (
    <Card className='w-full'>
      <CardContent>
        <form id='form' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className='gap-6'>
            <div className='grid grid-cols-2 gap-6'>
              <Controller
                name='firstName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-fullname'>Nombre</FieldLabel>
                    <Input
                      {...field}
                      disabled={pending}
                      id='form-fullname'
                      aria-invalid={fieldState.invalid}
                      placeholder='Juan'
                      autoComplete='off'
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name='lastName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-fullname'>Apellido</FieldLabel>
                    <Input
                      {...field}
                      disabled={pending}
                      id='form-fullname'
                      aria-invalid={fieldState.invalid}
                      placeholder='Pérez'
                      autoComplete='off'
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-email'>Correo electrónico</FieldLabel>
                  <Input
                    {...field}
                    disabled={pending}
                    id='form-email'
                    aria-invalid={fieldState.invalid}
                    placeholder='juanperez@dominio.com'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <div className='grid gap-6 tablet:grid-cols-2'>
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-phone'>Número de teléfono</FieldLabel>
                    <PhoneInput
                      value={field.value}
                      onChange={field.onChange}
                      international
                      defaultCountry='GT'
                      autoComplete='tel'
                      className='w-full'
                      placeholder='Número de teléfono'
                      disabled={pending}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Controller
                name='location'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-location'>Ubicación</FieldLabel>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={value => {
                        field.onChange(value)
                        if (value === COMPANY.ADDRESSES.MAIN.LOCALITY) {
                          setTotal(prev => ({ ...prev, location: 100 }))
                          return
                        }
                        setTotal(prev => ({ ...prev, location: 50 }))
                      }}
                      disabled={pending}
                      aria-invalid={fieldState.invalid}
                      autoComplete='off'>
                      <SelectTrigger className='w-full justify-between'>
                        <SelectValue placeholder='Selecciona una ubicación' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={COMPANY.ADDRESSES.MAIN.LOCALITY}>
                          {COMPANY.ADDRESSES.MAIN.LOCALITY}
                        </SelectItem>
                        <SelectItem value={COMPANY.ADDRESSES.EON_PLAZA.LOCALITY}>
                          {COMPANY.ADDRESSES.EON_PLAZA.LOCALITY}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>
            <div className='grid gap-6 tablet:grid-cols-2'>
              <Controller
                name='date'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-date'>Fecha</FieldLabel>
                    <DatePicker
                      value={field.value}
                      onChange={date => {
                        field.onChange(date)
                        form.setValue('time', '')
                      }}
                      disabled={pending}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name='time'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='form-time'>Hora</FieldLabel>

                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={field.onChange}
                      disabled={pending || !form.watch('date')}
                      aria-invalid={fieldState.invalid}
                      autoComplete='off'>
                      <SelectTrigger className='w-full justify-between'>
                        <SelectValue placeholder='Selecciona una hora' />
                      </SelectTrigger>
                      <SelectContent>
                        {COMPANY.HOURS_OF_RESERVATION.map((hour, index) => {
                          return (
                            <SelectItem
                              key={index}
                              value={hour}
                              disabled={
                                hour <
                                form.watch('date')?.toLocaleTimeString('es-GT', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: false,
                                })
                              }>
                              {hour}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            </div>

            <Controller
              name='guests'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-guests'>Número de personas</FieldLabel>
                  <InputNumberCounter
                    {...field}
                    onChange={value => {
                      field.onChange(value)

                      if (value > field.value) {
                        setTotal(prev => ({ ...prev, guests: prev.guests + 50 }))
                        return
                      }
                      setTotal(prev => ({ ...prev, guests: prev.guests - 50 }))
                    }}
                    min={1}
                    max={10}
                    step={1}
                    disabled={pending}
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='notes'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-message'>
                    Solicitudes Especiales/Notas{' '}
                    <span className='text-muted-foreground'>(Opcional)</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-message'
                      placeholder='Alergias, restricciones alimenticias, preferencia de mesa, etc.'
                      maxLength={500}
                      rows={8}
                      className='min-h-32 resize-none'
                      aria-invalid={fieldState.invalid}
                      disabled={pending}
                    />
                    <InputGroupAddon align='block-end'>
                      <InputGroupText className='tabular-nums'>
                        {field.value?.length ?? 0}/500 caracteres
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Field className='flex items-center gap-2'>
              <Controller
                name='terms'
                control={form.control}
                render={({ field, fieldState }) => (
                  <>
                    <div className='flex gap-2'>
                      <Checkbox
                        className='mt-1 shrink-0 tablet:mt-0'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id='terms'
                        aria-invalid={fieldState.invalid}
                        disabled={pending}
                      />
                      <label
                        htmlFor='terms'
                        className='text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                        Acepto los{' '}
                        <Link
                          prefetch={false}
                          target='_blank'
                          href='/terminos-y-condiciones'
                          className='text-primary underline decoration-1'>
                          Términos y Condiciones
                        </Link>{' '}
                        y la{' '}
                        <Link
                          prefetch={false}
                          target='_blank'
                          href='/politica-de-privacidad'
                          className='text-primary underline decoration-1'>
                          Política de Privacidad
                        </Link>
                      </label>
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </>
                )}
              />
            </Field>
          </FieldGroup>
          <div className='mt-10 flex flex-col justify-between'>
            <span className='text-sm font-medium text-primary'>Total</span>
            <span className='text-3xl font-semibold text-primary tablet:text-4xl'>
              {formattedTotal}
            </span>
          </div>
          <div className='mt-2 flex items-center gap-2'>
            <FieldDescription className='mt-2! block'>
              <strong>Nota:</strong> Esta es una demo, la reservación no se enviará al restaurante.
            </FieldDescription>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='responsive'>
          <Button type='submit' disabled={pending} form='form'>
            {pending ? (
              <>
                <Spinner />
                Redirigiendo...
              </>
            ) : (
              'Continuar a Checkout'
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
