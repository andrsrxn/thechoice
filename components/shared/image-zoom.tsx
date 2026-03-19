'use client'

import mediumZoom, { type Zoom, type ZoomOptions } from 'medium-zoom'
import { type ComponentProps, type RefCallback, useRef } from 'react'

type ImageZoomProps = ComponentProps<'img'> & {
  options?: ZoomOptions
}

export function ImageZoom({ options, ...props }: ImageZoomProps) {
  const zoomRef = useRef<Zoom | null>(null)

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom(options)
    }

    return zoomRef.current
  }

  const attachZoom: RefCallback<HTMLImageElement> = node => {
    const zoom = getZoom()

    if (node) {
      zoom.attach(node)
    } else {
      zoom.detach()
    }
  }

  // biome-ignore lint/a11y/useAltText: api
  return <img {...props} ref={attachZoom} />
}
