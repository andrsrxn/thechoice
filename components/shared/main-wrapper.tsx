import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export const MainWrapper = ({
  className,
  animated = true,
  children,
  ...props
}: ComponentProps<'main'> & { animated?: boolean }) => {
  return (
    <main
      id='contenido-principal'
      className={cn(className, animated && 'animate-fade-in duration-500 animate-ease-in-out')}
      {...props}>
      {children}
    </main>
  )
}
