/* eslint-disable no-undef */
import type { z } from 'zod'

export type ClientConfig<T> = {
  data?: unknown
  zodSchema?: z.ZodSchema<T>
  method?: 'DELETE' | 'GET' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT'
  headers?: HeadersInit
  customConfig?: RequestInit
  signal?: AbortSignal
}

export async function client<T>(
  url: string,
  {
    data,
    zodSchema,
    method,
    headers: customHeaders,
    signal,
    customConfig
  }: ClientConfig<T> = {}
): Promise<T> {
  const config: RequestInit = {
    method: method ?? (data ? 'POST' : 'GET'),
    body: data ? JSON.stringify(data) : null,
    headers: {
      'Content-Type': data ? 'application/json' : '',
      Accept: 'application/json',
      ...customHeaders
    },
    signal,
    ...customConfig
  }

  return fetch(url, config).then(async (response) => {
    if (response.status === 401) {
      return Promise.reject(new Error("You're not authenticated"))
    }

    let result = null
    try {
      result = response.status === 204 ? null : await response.json()
    } catch (error) {
      return Promise.reject(error)
    }

    if (response.ok) {
      return zodSchema && result ? zodSchema.parse(result) : result
    } else {
      return Promise.reject(result)
    }
  })
}

// export const client = async <T>(
//   url: string,
//   {
//     data,
//     zodSchema,
//     method,
//     headers: customHeaders,
//     signal,
//     customConfig
//   }: ClientConfig<T> = {}
// ): Promise<T> => {
//   try {
//     const config: RequestInit = {
//       method: method ?? (data ? 'POST' : 'GET'),
//       body: data ? JSON.stringify(data) : null,
//       headers: {
//         'Content-Type': data ? 'application/json' : '',
//         Accept: 'application/json',
//         ...customHeaders
//       },
//       signal,
//       ...customConfig
//     }
//     const response = await window.fetch(url, config)
//     const result = await response.json()
//     if (!response.ok) return Promise.reject(result)
//     return result && zodSchema ? zodSchema.parse(result) : result
//   } catch (error) {
//     errorLog(error, 'Fetch error')
//   }
// }
