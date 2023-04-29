/* eslint-disable no-unused-vars */
import { Level } from 'pino'

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_MINIMUM_LOG_LEVEL: Level
  }
}
