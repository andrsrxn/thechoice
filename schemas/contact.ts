// biome-ignore lint/performance/noNamespaceImport: best practice
import * as z from 'zod'

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(50, 'El nombre debe tener como máximo 50 caracteres.'),
  email: z
    .email({
      error: 'El correo debe ser válido.',
    })
    .min(10, 'El correo debe tener al menos 10 caracteres.')
    .max(100, 'El correo debe tener como máximo 100 caracteres.'),
  phone: z
    .string()
    .min(6, 'El teléfono debe tener al menos 6 caracteres.')
    .max(100, 'El teléfono debe tener como máximo 100 caracteres.'),
  message: z
    .string()
    .min(5, 'El mensaje debe tener al menos 5 caracteres.')
    .max(500, 'El mensaje debe tener como máximo 500 caracteres.'),
})
