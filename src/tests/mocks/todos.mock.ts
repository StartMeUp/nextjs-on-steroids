import { faker } from '@faker-js/faker'

import { TodoType } from '@/assets/schemas/todo.schema'

const makeMockTodos = (): TodoType[] => {
  const mockTodos = []
  for (let i = 1; i <= faker.number.int({ min: 4, max: 10 }); i++) {
    mockTodos.push({
      id: i,
      completed: faker.datatype.boolean(0.4),
      todo: faker.lorem.sentence({ min: 5, max: 15 }),
      userId: faker.number.int({ min: 1, max: 30 })
    })
  }
  return mockTodos
}

export const mockTodos: TodoType[] = makeMockTodos()
