import pino, { Level } from 'pino'

// you might want to display logs in production
// adjust the level of log display
const shouldDisplayLogs = !(process.env.NODE_ENV === 'production')

const logger = pino({
  level: process.env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL || 'trace',
  transport: {
    target: 'pino-pretty',
    options: {
      ignore: 'pid,hostname',
      translateTime: 'SYS:HH:MM:ss'
    }
  }
})

const displayLog = (level: Level) => (title: string, msg: string) => {
  if (shouldDisplayLogs) logger[level](title + ' => ' + msg)
}

export const log = {
  trace: displayLog('trace'),
  debug: displayLog('debug'),
  info: displayLog('info'),
  warn: displayLog('warn'),
  error: displayLog('error'),
  fatal: displayLog('fatal')
}
