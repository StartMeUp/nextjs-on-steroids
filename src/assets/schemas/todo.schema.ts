import { z } from 'zod'

export const todoSchema = z.object({
  id: z.number(),
  completed: z.boolean(),
  todo: z.string()
})

export type TodoType = z.infer<typeof todoSchema>
