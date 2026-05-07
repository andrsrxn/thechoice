'use client'

import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface InViewProps extends ComponentProps<'div'> {
  children: ReactNode
  threshold?: number
  inViewClassName?: string
  triggerOnce?: boolean
  rootMargin?: string
}

export const InView = ({
  children,
  threshold = 0.2,
  inViewClassName = 'animate-fade-in ',
  triggerOnce = true,
  rootMargin = '0px',
  className,
  ...props
}: InViewProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry?.isIntersecting ?? false

        if (isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.disconnect()
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, triggerOnce, rootMargin])

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 animate-duration-400 animate-ease-in-out',
        className,
        isInView && inViewClassName
      )}
      {...props}>
      {children}
    </div>
  )
}
