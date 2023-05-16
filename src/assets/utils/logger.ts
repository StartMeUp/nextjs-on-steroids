import pino, { Level } from 'pino'

// hide logs in production by default
// adjust the level of log display
const shouldDisplayLogs = !process.env.IS_PROD

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

const levelIcons: Record<Level, string> = {
  error: '❌',
  trace: '📄',
  info: 'ℹ️',
  debug: '🚧',
  warn: '⚠️',
  fatal: '💀'
}

const displayLog = (level: Level) => (title: string, data?: any) => {
  if (shouldDisplayLogs)
    logger[level](
      `${levelIcons[level]} ${title}${
        data ? ' => ' + JSON.stringify(data, null, 2) : ''
      }`
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
    const data = errorMsg === 'Error msg only' ? error.message : error
    log.error(title, data)
  }
}
