import { env } from '@/env.mjs'
import { log } from '@/services/logger'

export default function Home() {
  log.info('this is an info')
  log.trace('this is a trace')
  log.error('this an error')
  log.warn('this is a warning')
  log.debug('this is a debug')
  log.fatal('this a fatal log')
  console.log('log level', env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL)
  return <h1 className="text-red-600 text-2xl">Home page</h1>
}
