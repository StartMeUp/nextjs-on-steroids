import { env } from '@/env.mjs'
import { log } from '@/services/logger'

export default function Home() {
  log.info('INFO', 'this is an info')
  log.trace('TRACE', 'this is a trace')
  log.error('ERROR', 'this an error')
  log.warn('WARNING', 'this is a warning')
  log.debug('DEBUG', 'this is a debug')
  log.fatal('FATAL', 'this a fatal log')
  console.log('log level =>', env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL)
  return <h1 className="text-red-600 text-2xl">Home page</h1>
}
