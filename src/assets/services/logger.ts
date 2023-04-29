import pino, { Level } from 'pino'

// you might want to display logs in production
// adjust the level of log display
const shouldDisplayLogs = !(process.env.NODE_ENV === 'production')

const logger = pino({
  level: process.env.NEXT_PUBLIC_MINIMUM_LOG_LEVEL || 'trace',
  transport: {
    target: 'pino-pretty',
    options: {
      ignore: 'pid,hostname,level',
      translateTime: 'SYS:HH:MM:ss'
    }
  }
})

const levelIcons: Record<Level, string> = {
  error: '❌',
  trace: '📄',
  info: 'ℹ️',
  debug: '🚧',
  warn: '⚠️',
  fatal: '💀'
}

const displayLog = (level: Level) => (title: string, msg: string | Error) => {
  if (shouldDisplayLogs)
    logger[level](
      `${levelIcons[level]} ${title.toUpperCase()}${msg ? ' => ' + msg : ''}`
    )
}

export const log = {
  trace: displayLog('trace'),
  debug: displayLog('debug'),
  info: displayLog('info'),
  warn: displayLog('warn'),
  error: displayLog('error'),
  fatal: displayLog('fatal')
}

export const errorLog = (
  error: unknown,
  title: string,
  errorMsg: 'Error msg only' | 'full Error object' = 'Error msg only'
) => {
  if (error instanceof Error) {
    const msg = errorMsg === 'Error msg only' ? error.message : error
    log.error(title, msg)
  }
}
