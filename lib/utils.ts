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
/**
 * Checks if a given number string is valid according to the Luhn algorithm.
 * @param digitString The input string containing digits and possibly spaces.
 * @returns True if the input is a valid Luhn number, false otherwise.
 */
export function luhnCheck(digitString: string): boolean {
  // 1. Sanitize input: remove whitespace and ensure all characters are digits.
  const sanitizedInput = digitString.replace(/\s+/g, '')
  if (sanitizedInput.length <= 1 || !whiteSpaceRegex.test(sanitizedInput)) {
    return false
  }

  // 2. Convert to an array of numbers and reverse for easier processing from the right.
  const digits = sanitizedInput.split('').map(Number).reverse()

  let sum = 0

  // 3. Iterate through the reversed digits, doubling every second digit.
  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i]

    // Double every second digit (which is now every odd index in the reversed array)
    if (digit === undefined) {
      return false
    }

    if (i % 2 !== 0) {
      digit *= 2
      // If doubling results in a number > 9, subtract 9 (or sum the digits).
      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
  }

  // 4. The number is valid if the total sum is evenly divisible by 10.
  return sum % 10 === 0
}

// // Example Usage:
// const validNumber = "79927398713"; // A well-known valid example
// const invalidNumber = "1234567890";

// console.log(`"${validNumber}" is valid: ${luhnCheck(validNumber)}`);
// console.log(`"${invalidNumber}" is valid: ${luhnCheck(invalidNumber)}`);
