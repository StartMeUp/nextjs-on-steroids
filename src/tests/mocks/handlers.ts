import { rest } from 'msw'

import { env } from '@/env.mjs'

import { mockTodos } from './todos.mock'

export const handlers = [
  rest.get(`${env.NEXT_PUBLIC_DUMMYJSON_API}/todos`, (__, res, ctx) =>
    res(ctx.json({ todos: mockTodos }))
  )
]
