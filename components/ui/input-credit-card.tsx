/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: false positive */
'use client'

import * as React from 'react'
import type { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { cn } from '@/lib/utils'

// ---------------------------------------------------------------------------
// Brand detection regexes — ordered from most specific to least specific
// ---------------------------------------------------------------------------
const CARD_BRAND_PATTERNS = {
  amex: /^3[47]/,
  mastercard: /^5[1-5]|^2(?:2[2-9][1-9]|[3-6]\d\d|7[01]\d|720)/,
  visa: /^4/,
} as const

type CardBrand = keyof typeof CARD_BRAND_PATTERNS

// ---------------------------------------------------------------------------
// Brand max lengths (Amex = 15 digits, Diners = 14, rest = 16–19)
// ---------------------------------------------------------------------------
const CARD_BRAND_MAX_DIGITS: Record<CardBrand, number> = {
  amex: 15,
  mastercard: 16,
  visa: 19,
}

// ---------------------------------------------------------------------------
// SVG brand logos as a const object of React nodes
// ---------------------------------------------------------------------------
const CARD_BRAND_SVGS: Record<CardBrand | 'generic', React.ReactNode> = {
  generic: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 24' aria-label='Credit card' role='img'>
      <rect width='38' height='24' rx='4' fill='currentColor' opacity='0.15' />
      <rect x='3' y='8' width='32' height='5' rx='1' fill='currentColor' opacity='0.4' />
      <rect x='3' y='16' width='8' height='2' rx='1' fill='currentColor' opacity='0.3' />
    </svg>
  ),
  visa: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 24' aria-label='Visa' role='img'>
      <rect width='38' height='24' rx='4' fill='#1A1F71' />
      <text
        x='19'
        y='16.5'
        textAnchor='middle'
        fill='#FFFFFF'
        fontSize='11'
        fontWeight='700'
        fontFamily='Arial, sans-serif'
        letterSpacing='1'>
        VISA
      </text>
    </svg>
  ),
  mastercard: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 38 24' aria-label='Mastercard' role='img'>
      <rect width='38' height='24' rx='4' fill='#252525' />
      <circle cx='14' cy='12' r='7' fill='#EB001B' />
      <circle cx='24' cy='12' r='7' fill='#F79E1B' />
      <path d='M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z' fill='#FF5F00' />
    </svg>
  ),
  amex: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 38 24'
      aria-label='American Express'
      role='img'>
      <rect width='38' height='24' rx='4' fill='#2E77BC' />
      <text
        x='19'
        y='15'
        textAnchor='middle'
        fill='#FFFFFF'
        fontSize='7'
        fontWeight='700'
        fontFamily='Arial, sans-serif'
        letterSpacing='0.5'>
        AMERICAN
      </text>
      <text
        x='19'
        y='21'
        textAnchor='middle'
        fill='#FFFFFF'
        fontSize='5.5'
        fontWeight='400'
        fontFamily='Arial, sans-serif'
        letterSpacing='1.5'>
        EXPRESS
      </text>
    </svg>
  ),
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function detectBrand(digits: string): CardBrand | null {
  for (const [brand, regex] of Object.entries(CARD_BRAND_PATTERNS) as [CardBrand, RegExp][]) {
    if (regex.test(digits)) {
      return brand
    }
  }
  return null
}

/**
 * Format a raw digit string into "groups" format.
 * Amex  → XXXX XXXXXX XXXXX  (4-6-5)
 * Diners → XXXX XXXXXX XXXX  (4-6-4)
 * Others → XXXX XXXX XXXX XXXX…
 */
function formatCardNumber(digits: string, brand: CardBrand | null): string {
  if (brand === 'amex') {
    const p1 = digits.slice(0, 4)
    const p2 = digits.slice(4, 10)
    const p3 = digits.slice(10, 15)
    return [p1, p2, p3].filter(Boolean).join(' ')
  }

  // Standard 4-4-4-4 (up to 19 digits = 4-4-4-4-3)
  return digits.match(/.{1,4}/g)?.join(' ') ?? digits
}

function stripFormatting(value: string): string {
  return value.replace(/\D/g, '')
}

// ---------------------------------------------------------------------------
// Component types
// ---------------------------------------------------------------------------

export interface InputCreditCardProps extends Omit<
  React.ComponentProps<typeof Input>,
  'onChange' | 'value' | 'defaultValue' | 'type'
> {
  value?: string
  defaultValue?: string
  onChange?: (raw: string, formatted: string, brand: CardBrand | null) => void
  /** Show the detected brand name as a string prop (read-only, optional) */
  onBrandChange?: (brand: CardBrand | null) => void
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function InputCreditCard({
  value,
  defaultValue,
  onChange,
  onBrandChange,
  className,
  id,
  ...props
}: InputCreditCardProps) {
  const isControlled = value !== undefined

  // For initial value formatting (both controlled & uncontrolled)
  const initialDigits = stripFormatting(value ?? defaultValue ?? '')
  const initialBrand = detectBrand(initialDigits)
  const initialFormatted = formatCardNumber(
    initialDigits.slice(0, CARD_BRAND_MAX_DIGITS[initialBrand ?? 'visa'] ?? 19),
    initialBrand
  )

  const [internalValue, setInternalValue] = React.useState(initialFormatted)
  const [brand, setBrand] = React.useState<CardBrand | null>(initialBrand)

  // Keep controlled value in sync (format on external change)
  React.useEffect(() => {
    if (isControlled && value !== undefined) {
      const digits = stripFormatting(value)
      const detectedBrand = detectBrand(digits)
      const maxDigits = CARD_BRAND_MAX_DIGITS[detectedBrand ?? 'visa'] ?? 19
      const formatted = formatCardNumber(digits.slice(0, maxDigits), detectedBrand)
      setInternalValue(formatted)
      setBrand(prev => {
        if (prev !== detectedBrand) {
          onBrandChange?.(detectedBrand)
          return detectedBrand
        }
        return prev
      })
    }
  }, [value, isControlled, onBrandChange])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    const digits = stripFormatting(raw)
    const detectedBrand = detectBrand(digits)
    const maxDigits = CARD_BRAND_MAX_DIGITS[detectedBrand ?? 'visa'] ?? 19
    const trimmedDigits = digits.slice(0, maxDigits)
    const formatted = formatCardNumber(trimmedDigits, detectedBrand)

    if (!isControlled) {
      setInternalValue(formatted)
    }

    if (detectedBrand !== brand) {
      setBrand(detectedBrand)
      onBrandChange?.(detectedBrand)
    }

    onChange?.(trimmedDigits, formatted, detectedBrand)
  }

  const displayValue = isControlled ? internalValue : internalValue

  return (
    <InputGroup className={cn('h-9', className)}>
      <InputGroupInput
        {...props}
        id={id}
        type='text'
        inputMode='numeric'
        autoComplete='cc-number'
        placeholder='0000 0000 0000 0000'
        maxLength={19}
        value={displayValue}
        onChange={handleChange}
        aria-label={props['aria-label'] ?? 'Número de tarjeta'}
        className='tabular-nums'
      />
      <InputGroupAddon align='inline-end' className='pr-1 pl-2.5'>
        <span
          aria-label={brand ?? 'credit card brand'}
          className='flex h-6 w-9 shrink-0 items-center overflow-hidden transition-all duration-200'>
          {CARD_BRAND_SVGS[brand ?? 'generic']}
        </span>
      </InputGroupAddon>
    </InputGroup>
  )
}

export { InputCreditCard, type CardBrand, CARD_BRAND_PATTERNS, CARD_BRAND_SVGS }
