/** biome-ignore-all lint/style/noProcessEnv: false positive */
/** biome-ignore-all lint/suspicious/useAwait: false positive */
/** biome-ignore-all lint/correctness/noProcessGlobal: false positive */

import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

const connectServices = 'https://va.vercel-scripts.com https://res.cloudinary.com'

const scriptServices = 'https://va.vercel-scripts.com'

const imgServices = 'https://res.cloudinary.com'

const cspHeader = ` 
    default-src 'self';
    script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' blob:" : ''} ${scriptServices} ;
    connect-src 'self' ${connectServices};
    style-src 'self' 'unsafe-inline';
    frame-src 'self';
    img-src 'self' blob: data: ${imgServices};
    media-src ${imgServices};
    object-src 'none';
    font-src 'self';
    worker-src 'self' ${isDev ? ' blob:' : ''};
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    script-src-attr 'none';
    ${isDev ? '' : 'upgrade-insecure-requests'}
    `

const headers = [
  {
    key: 'Content-Security-Policy',
    value: cspHeader.replace(/\n/g, ''),
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Download-Options', value: 'noopen' },
  {
    key: 'X-Permitted-Cross-Domain-Policies',
    value: 'none',
  },
]

if (!isDev) {
  headers.push(
    {
      key: 'Origin-Agent-Cluster',
      value: '?1',
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains; preload',
    }
  )
}

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ]
  },
  poweredByHeader: false,
  experimental: {
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
    staleTimes: {
      static: 30,
      dynamic: 60,
    },
    viewTransition: true,
  },

  typedRoutes: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dq5nfyajn/**',
        port: '',
        search: '',
      },
    ],
  },
}

export default nextConfig
