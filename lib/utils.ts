import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function obfuscateEmail(email: string) {
  if (!email || typeof email !== 'string') {
    return ''
  }

  const encoded = Array.from(email)
    .map(char => {
      return `&#${char.charCodeAt(0)};`
    })
    .join('')

  return encoded
}
