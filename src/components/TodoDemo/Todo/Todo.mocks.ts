import { TodoProps } from './Todo'

const todo: TodoProps = {
  todo: {
    id: 1,
    todo: 'This is a mock todo',
    completed: true,
    userId: 4
  },
  handleDelete: () => console.log('mock delete button'),
  handleUpdate: () => console.log('mock update button')
}

export const mockTodoProps = {
  todo
}
