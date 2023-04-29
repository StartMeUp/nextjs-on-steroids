import { log } from '@/logger'

export default function Home() {
  log.info('INFO', 'this is an info')
  log.trace('TRACE', 'this is a trace')
  log.error('ERROR', 'this an error')
  log.warn('WARNING', 'this is a warning')
  log.debug('DEBUG', 'this is a debug')
  log.fatal('FATAL', 'this a fatal log')
  return <h1 className="text-red-600 text-2xl">Home page</h1>
}
