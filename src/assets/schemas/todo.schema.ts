import { z } from 'zod'

export const todoSchema = z.object({
  id: z.number(),
  completed: z.boolean(),
  todo: z.string(),
  userId: z.number()
})

export const getTodosSchema = z.object({
  todos: z.array(todoSchema)
})

export type TodoType = z.infer<typeof todoSchema>
