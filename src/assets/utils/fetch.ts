import { env } from '@/env.mjs'

import { getTodosSchema } from '../schemas/todo.schema'
import { client } from './client'

// Get request for demo Todos
// you shouldn't keep it in your project
export const getTodos = () =>
  client(`${env.NEXT_PUBLIC_DUMMYJSON_API}/todos`, {
    zodSchema: getTodosSchema
  })
