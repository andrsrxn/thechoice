'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from './button'
import { Input } from './input'

export const InputNumberCounter = ({
  value,
  onChange,
  min,
  max,
  step,
  disabled,
  className,
}: {
  value: number | string
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
}) => {
  const numValue = Number.isNaN(Number(value)) ? 0 : Number(value)

  const handleIncrement = () => {
    onChange(numValue + (step ?? 1))
  }
  const handleDecrement = () => {
    onChange(numValue - (step ?? 1))
  }
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Button
        type='button'
        size='icon'
        onClick={handleDecrement}
        disabled={disabled || Number(value) <= (min ?? 0)}
        className='size-8'>
        <MinusIcon className='size-4' />
      </Button>
      <Input
        type='text'
        pattern='[0-9]*'
        inputMode='numeric'
        value={value}
        readOnly
        onChange={e => onChange(Number(e.target.value))}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        className='w-16 text-center'
      />
      <Button
        type='button'
        size='icon'
        onClick={handleIncrement}
        disabled={disabled || Number(value) >= (max ?? Number.POSITIVE_INFINITY)}
        className='size-8'>
        <PlusIcon className='size-4' />
      </Button>
    </div>
  )
}
