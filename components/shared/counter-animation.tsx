'use client'

import { animate, useInView, useMotionValue, useMotionValueEvent, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface CounterAnimationProps {
  number: number
  className?: string
  prefix?: string
  suffix?: string
  animateOnView?: boolean
  duration?: number
}

export const CounterAnimation = ({
  number,
  className,
  prefix,
  suffix,
  animateOnView = true,
  duration = 2,
}: CounterAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)
  const [current, setCurrent] = useState(0)

  useMotionValueEvent(rounded, 'change', latest => {
    setCurrent(latest)
  })

  useEffect(() => {
    if (animateOnView && !isInView) {
      return
    }

    const animation = animate(count, number, { duration })
    return animation.stop
  }, [count, number, isInView, duration, animateOnView])

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}
      {current}
      {suffix}
    </span>
  )
}
