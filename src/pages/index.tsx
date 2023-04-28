import { log } from '@/services/logger'

export default function Home() {
  log.info('this is an info')
  log.trace('this is a trace')
  log.error('this an error')
  log.warn('this is a warning')
  log.debug('this is a debug')
  log.fatal('this a fatal log')
  return <h1 className="text-red-600 text-2xl">Home page</h1>
}
