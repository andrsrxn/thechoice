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

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const whiteSpaceRegex = /^\d+$/

export function luhnCheck(digitString: string): boolean {
  const sanitizedInput = digitString.replace(/\s+/g, '')
  if (sanitizedInput.length <= 1 || !whiteSpaceRegex.test(sanitizedInput)) {
    return false
  }

  const digits = sanitizedInput.split('').map(Number).reverse()

  let sum = 0

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i]

    if (digit === undefined) {
      return false
    }

    if (i % 2 !== 0) {
      digit *= 2

      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
  }

  return sum % 10 === 0
}

export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
