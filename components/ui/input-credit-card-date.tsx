/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: false positive */
'use client'

import * as React from 'react'
import type { Input } from '@/components/ui/input'
import { InputGroup, InputGroupInput } from '@/components/ui/input-group'
import { cn } from '@/lib/utils'

/**
 * Strip everything that is not a digit from the value.
 */
function stripToDigits(value: string): string {
  return value.replace(/\D/g, '')
}

/**
 * Format up to 4 raw digits into `MM/YY`.
 *
 * Smart month rules:
 *  - First digit 0 → wait for second digit (0X)
 *  - First digit 1 → wait: could be 10, 11, 12
 *  - First digit 2–9 → auto-pad to 0X and emit slash  (e.g. "5" → "05/")
 *
 * Returns the formatted string and whether a slash was auto-inserted
 * (useful to move the caret after it).
 */
function formatExpiry(digits: string): string {
  if (!digits) {
    return ''
  }

  const d0 = digits[0] ?? ''
  const d1 = digits[1] ?? ''
  const d2 = digits[2] ?? ''
  const d3 = digits[3] ?? ''

  // Auto-pad month when first digit is 2-9 (can't start a valid month with those)
  const needsPad = Number(d0) >= 2 && d0 !== '1' && d0 !== '0'

  if (needsPad && digits.length === 1) {
    // e.g. user typed "5" → show "05/" and wait
    return `0${d0}/`
  }

  const month = needsPad ? `0${d0}` : `${d0}${d1}`
  const year = needsPad ? `${d1}${d2}` : `${d2}${d3}`

  if (month.length < 2) {
    // Still only the first digit (0 or 1), no slash yet
    return month
  }

  if (!year) {
    return `${month}/`
  }

  return `${month}/${year.slice(0, 2)}`
}

/**
 * Parse a formatted `MM/YY` (or partial) back to raw digits.
 * Handles "12/27" → "1227", "05/" → "05", "0" → "0", etc.
 */
function parseExpiry(formatted: string): string {
  return stripToDigits(formatted)
}

/**
 * Given the formatted value and the previous formatted value, figure out
 * whether the user is deleting (backspace direction).
 */
function isDeleting(next: string, prev: string): boolean {
  return next.length < prev.length
}

// ---------------------------------------------------------------------------
// Component types
// ---------------------------------------------------------------------------

export interface InputCreditCardDateProps extends Omit<
  React.ComponentProps<typeof Input>,
  'onChange' | 'value' | 'defaultValue' | 'type' | 'maxLength'
> {
  /** Controlled value — accepts digits (`1227`), formatted (`12/27`), or partial. */
  value?: string
  /** Uncontrolled default — same format as `value`. */
  defaultValue?: string
  /**
   * Called on every change.
   * @param formatted  Display string, e.g. `"12/27"`
   */
  onChange?: (formatted: string) => void
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

function InputCreditCardDate({
  value,
  defaultValue,
  onChange,
  className,
  id,
  ...props
}: InputCreditCardDateProps) {
  const isControlled = value !== undefined

  // Derive initial formatted value from whichever prop is provided
  const computeInitial = (raw?: string) => formatExpiry(parseExpiry(raw ?? ''))

  const [internalValue, setInternalValue] = React.useState<string>(() =>
    computeInitial(value ?? defaultValue)
  )

  // Track previous display value for deletion detection
  const prevDisplayRef = React.useRef<string>(internalValue)

  // Keep controlled value in sync when it changes externally
  React.useEffect(() => {
    if (isControlled && value !== undefined) {
      const formatted = formatExpiry(parseExpiry(value))
      setInternalValue(formatted)
      prevDisplayRef.current = formatted
    }
  }, [value, isControlled])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawInput = e.target.value
    const prev = prevDisplayRef.current
    const deleting = isDeleting(rawInput, prev)

    let digits = parseExpiry(rawInput)

    // Cap at 4 digits (MMYY)
    digits = digits.slice(0, 4)

    let formatted: string

    if (deleting) {
      // When backspacing over the slash (user had "12/" and deleted "/")
      // rawInput would be "12" → digits "12" → we just show "12" without slash
      // to let the user keep deleting the month naturally.
      if (digits.length <= 2) {
        // Keep as month-only (no trailing slash) while deleting
        formatted = digits
      } else {
        formatted = formatExpiry(digits)
      }
    } else {
      formatted = formatExpiry(digits)
    }

    prevDisplayRef.current = formatted

    if (!isControlled) {
      setInternalValue(formatted)
    }

    onChange?.(formatted)
  }

  const displayValue = internalValue

  return (
    <InputGroup className={cn('h-9', className)}>
      <InputGroupInput
        {...props}
        id={id}
        type='text'
        inputMode='numeric'
        placeholder='MM/YY'
        maxLength={5}
        value={displayValue}
        onChange={handleChange}
        aria-label={props['aria-label'] ?? 'Fecha de vencimiento'}
        className='tabular-nums'
      />
    </InputGroup>
  )
}

export { InputCreditCardDate }
