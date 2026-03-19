'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { es } from 'react-day-picker/locale'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { COMPANY } from '@/lib/constants/company'
import { cn } from '@/lib/utils'

export const DatePicker = ({
  value,
  className,
  onChange,
  disabled,
  placeholder = 'Selecciona una fecha',
}: {
  value?: Date
  onChange: (date?: Date) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}) => {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          data-empty={!date}
          className={cn(
            'w-full justify-between border border-input bg-input/50 px-2 text-left text-sm font-normal text-foreground shadow-none hover:bg-input/80 active:bg-input/80 data-[empty=true]:text-muted-foreground',
            className
          )}>
          {date ? format(date, 'PPP', { locale: es }) : <span>{placeholder}</span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-70 p-0' align='end'>
        <Calendar
          className='w-full'
          mode='single'
          selected={date}
          defaultMonth={date}
          captionLayout='dropdown'
          timeZone='America/Guatemala'
          startMonth={new Date()}
          endMonth={new Date(new Date().getFullYear(), 11, 31)}
          locale={es}
          disabled={(date: Date) => {
            if (disabled) {
              return true
            }

            const today = new Date()
            today.setHours(0, 0, 0, 0)

            if (date < today) {
              return true
            }
            const lastHour = COMPANY.HOURS_OF_RESERVATION.at(-1) ?? '00:00'
            const hourNumber = lastHour.split(':')[0] ?? '00'
            const minutesNumber = lastHour.split(':')[1] ?? '00'

            const lastDate = new Date()
            lastDate.setHours(
              Number(hourNumber),
              Number(minutesNumber[0]),
              Number(minutesNumber[1])
            )

            if (date.toDateString() === today.toDateString() && new Date() >= lastDate) {
              return true
            }
            return false
          }}
          onSelect={date => {
            setDate(date)
            // if is today add current hours
            if (date?.toDateString() === new Date().toDateString()) {
              const now = new Date()
              date?.setHours(
                now.getHours(),
                now.getMinutes(),
                now.getSeconds(),
                now.getMilliseconds()
              )
              onChange(now)
            } else {
              onChange(date)
            }

            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
