'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { parsePhoneNumber } from 'react-phone-number-input'
import { toast } from 'sonner'
import type * as z from 'zod'
import { sendContactForm } from '@/actions/contact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { PhoneInput } from '@/components/ui/input-phone'
import { Spinner } from '@/components/ui/spinner'
import { contactSchema } from '@/schemas/contact'

export const ContactForm = () => {
  const [pending, startTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(data: z.infer<typeof contactSchema>) {
    const phoneNumber = parsePhoneNumber(data.phone)
    if (!phoneNumber?.isValid()) {
      toast.error('Número de teléfono inválido')
      return
    }

    startTransition(async () => {
      const result = await sendContactForm(data)
      if (result.success) {
        toast.success(result.message, {
          description: 'Te contactaremos lo más pronto posible',
        })
        form.reset()
      } else {
        toast.error(result.error)
      }
    })
  }

  return (
    <Card className='w-full'>
      <CardContent>
        <form id='form-contact' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='fullname'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-contact-fullname'>Nombre Completo</FieldLabel>
                  <Input
                    {...field}
                    disabled={pending}
                    id='form-contact-fullname'
                    aria-invalid={fieldState.invalid}
                    placeholder='Juan Pérez'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-contact-email'>Correo electrónico</FieldLabel>
                  <Input
                    {...field}
                    disabled={pending}
                    id='form-contact-email'
                    aria-invalid={fieldState.invalid}
                    placeholder='juanperez@dominio.com'
                    autoComplete='off'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='phone'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-contact-phone'>Número de teléfono</FieldLabel>
                  <PhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    international
                    defaultCountry='GT'
                    autoComplete='tel'
                    placeholder='Número de teléfono'
                    disabled={pending}
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-contact-message'>Mensaje</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-contact-message'
                      placeholder='Escribe tu mensaje...'
                      maxLength={500}
                      rows={8}
                      className='min-h-32 resize-none'
                      aria-invalid={fieldState.invalid}
                      disabled={pending}
                    />
                    <InputGroupAddon align='block-end'>
                      <InputGroupText className='tabular-nums'>
                        {field.value.length}/500 caracteres
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  <FieldDescription className='mt-2! block'>
                    <strong>Nota:</strong> Esta es una demo, el mensaje no se enviará al
                    restaurante.
                  </FieldDescription>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='responsive'>
          <Button type='submit' disabled={pending} form='form-contact'>
            {pending ? (
              <>
                <Spinner />
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
