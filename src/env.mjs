import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_MINIMUM_LOG_LEVEL: z.enum([
      'trace',
      'debug',
      'info',
      'warn',
      'error',
      'fatal'
    ]),
    NEXT_PUBLIC_DUMMYJSON_API: z.literal('https://dummyjson.com')
  },
  runtimeEnv: {
    NEXT_PUBLIC_MINIMUM_LOG_LEVEL: process.env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL,
    NEXT_PUBLIC_DUMMYJSON_API: process.env.NEXT_PUBLIC_DUMMYJSON_API
  }
})
