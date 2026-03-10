import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const MainWrapper = ({ className, children, ...props }: ComponentProps<'main'>) => {
  return (
    <main
      id='contenido-principal'
      className={cn('container mx-auto w-11/12', className)}
      {...props}>
      {children}
    </main>
  )
}
