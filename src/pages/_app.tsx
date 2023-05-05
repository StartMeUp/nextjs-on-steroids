import { useRef } from 'react'
import type { AppProps } from 'next/app'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import '@/assets/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false
        }
      }
    })
  )
  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
