// biome-ignore lint/performance/noNamespaceImport: best practice
import * as z from 'zod'
import { luhnCheck } from '@/lib/utils'
import { COMPANY } from '@/lib/constants/company'

export const reservationsSchema = z
  .object({
    firstName: z
      .string({ error: 'Debe ser un texto.' })
      .min(1, 'Agrega tu nombre.')
      .max(50, 'El nombre debe tener como máximo 50 caracteres.'),
    lastName: z
      .string({ error: 'Debe ser un texto.' })
      .min(1, 'Agrega tu apellido.')
      .max(50, 'El apellido debe tener como máximo 50 caracteres.'),
    email: z
      .email({
        error: 'El correo debe ser válido.',
      })
      .min(10, 'El correo debe tener al menos 10 caracteres.')
      .max(100, 'El correo debe tener como máximo 100 caracteres.'),
    phone: z
      .string({ error: 'Debe ser un texto.' })
      .min(6, 'El teléfono debe tener al menos 6 caracteres.')
      .max(100, 'El teléfono debe tener como máximo 100 caracteres.'),
    location: z.enum([COMPANY.ADDRESSES.MAIN.LOCALITY, COMPANY.ADDRESSES.EON_PLAZA.LOCALITY], {
      error: 'La ubicación no es válida.',
    }),
    date: z
      .date({ error: 'Debe ser una fecha válida.' })
      .min(new Date().setHours(0, 0, 0, 0), 'La fecha debe ser mayor a la fecha actual.'),

    time: z.string({ error: 'Debe ser una hora válida.' }),
    guests: z
      .number({ error: 'Debe ser un número válido.' })
      .nonnegative({ error: 'Debe ser un número positivo.' })
      .min(1, 'El número de invitados debe ser al menos 1.'),
    notes: z
      .string({ error: 'Debe ser un texto.' })
      .max(500, 'El mensaje debe tener como máximo 500 caracteres.')
      .optional(),
    terms: z
      .boolean()
      .refine(
        value => value,
        'Debes aceptar los términos y condiciones y la política de privacidad.'
      ),
  })
  .superRefine((data, ctx) => {
    console.log(data.time)
    console.log(
      new Date().toLocaleTimeString('es-GT', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    )
    if (
      data.date.toDateString() === new Date().toDateString() &&
      data.time <
        new Date().toLocaleTimeString('es-GT', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
    ) {
      ctx.addIssue({
        code: 'custom',
        message: 'La hora debe ser mayor a la hora actual.',
        path: ['time'],
      })
    }
  })

const nitRegex = /^[a-zA-Z0-9]+$/
const dateCardRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/

const creditCardDateSchema = z
  .string()
  .min(1, 'Agrega la fecha de vencimiento.')
  // Validate format only: (MM/YY)
  .regex(dateCardRegex, 'Formato inválido')
  .refine(date => {
    const [month, year] = date.split('/').map(Number)
    const now = new Date()
    if (!(month && year)) {
      return false
    }

    if (month > 12) {
      return false
    }

    const expiry = new Date(year < 100 ? 2000 + year : year, month, 0)
    return expiry > now
  }, 'La tarjeta ha expirado.')

export const checkoutSchema = z.object({
  fullName: z

    .string({ error: 'Debe ser un texto.' })
    .min(1, 'Agrega tu nombre.')
    .max(50, 'El nombre debe tener como máximo 50 caracteres.'),
  NIT: z
    .string({ error: 'Debe ser un texto.' })
    .refine(value => {
      return nitRegex.test(value)
    }, 'El NIT debe contener solo números y letras.')
    .optional(),
  creditCardNumber: z
    .string({ error: 'Debe ser un texto.' })
    .min(16, 'Mínimo 16 caracteres.')
    .max(20, 'Máximo 16 caracteres.')
    .refine(value => {
      return luhnCheck(value)
    }, 'El número de tarjeta es inválido.'),
  creditCardExpirationDate: creditCardDateSchema,
  creditCardCVV: z
    .string()
    .regex(/^[0-9]+$/, 'Solo debe contener números.')
    .min(3, 'Al menos 3 caracteres.')
    .max(4, 'Máximo 4 caracteres.'),
})
