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
    ])
  },
  runtimeEnv: {
    NEXT_PUBLIC_MINIMUM_LOG_LEVEL: process.env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL
  }
})
