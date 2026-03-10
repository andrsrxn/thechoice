import { Resend } from 'resend'
import { env } from '@/lib/config/env'

export const emailClient = new Resend(env.RESEND_API_KEY)
