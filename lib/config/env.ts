import { NODE_ENV } from '@/lib/constants/env'
import 'server-only'

import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  RESEND_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)

export function isProductionEnv() {
  return env.NODE_ENV === NODE_ENV.PROD
}
