/* eslint-disable no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_MINIMUM_LOG_LEVEL:
      | 'fatal'
      | 'error'
      | 'warn'
      | 'info'
      | 'debug'
      | 'trace'
    IS_DEV: boolean
    IS_PROD: boolean
    IS_TEST: boolean
    NEXT_PUBLIC_DUMMYJSON_API: 'https://dummyjson.com'
  }
}
