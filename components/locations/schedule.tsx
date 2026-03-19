'use client'

import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const Schedule = ({ className, children, ...props }: ComponentProps<'ul'>) => {
  return (
    <ul className={cn('grid gap-2 laptop:gap-4', className)} {...props}>
      {children}
    </ul>
  )
}

// highlight when matches current day
export const ScheduleItem = ({
  day,
  schedule,
  className,
  ...props
}: ComponentProps<'li'> & { day: string; schedule: string }) => {
  const isCurrentDay =
    new Date().toLocaleDateString('es-GT', { weekday: 'long' }) === day.toLocaleLowerCase()
  return (
    <li
      className={cn(
        isCurrentDay
          ? schedule.toLocaleLowerCase() === 'cerrado'
            ? 'text-red-500'
            : 'text-primary'
          : 'opacity-50',
        className
      )}
      {...props}>
      <span className={'font-semibold'}>{day}:</span> <span>{schedule}</span>
    </li>
  )
}
