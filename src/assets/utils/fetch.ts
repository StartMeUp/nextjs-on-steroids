import { env } from '@/env.mjs'

import { getTodosSchema } from '../schemas/todo.schema'
import { client } from './client'

export const getTodos = () =>
  client(`${env.NEXT_PUBLIC_DUMMYJSON_API}/todos`, {
    zodSchema: getTodosSchema
  })
