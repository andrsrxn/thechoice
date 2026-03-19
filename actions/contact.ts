'use server'

import type z from 'zod'
import { sleep } from '@/lib/utils'
import { contactSchema } from '@/schemas/contact'

export async function sendContactForm(data: z.infer<typeof contactSchema>) {
  const result = contactSchema.safeParse(data)

  if (!result.success) {
    return {
      success: false,
      error: 'Error al enviar el mensaje, intenta de nuevo más tarde',
    }
  }

  const { fullname, email, phone, message } = result.data

  await sleep(2000)

  return {
    success: true,
    message: 'Mensaje enviado',
    data: {
      fullname,
      email,
      phone,
      message,
    },
  }
}
