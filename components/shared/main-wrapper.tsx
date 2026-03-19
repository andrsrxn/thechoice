import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const MainWrapper = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main
      id='contenido-principal'
      className={cn('animate-fade-in animate-duration-500 animate-ease-in-out', className)}
      {...props}>
      {children}
    </main>
  )
}
