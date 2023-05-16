import { TodoProps } from './Todo'

const uncompletedTodo: TodoProps = {
  todo: {
    id: 1,
    todo: 'This is a mock todo',
    completed: false,
    userId: 4
  },
  handleDelete: () => console.log('mock delete button'),
  handleUpdate: () => console.log('mock update button')
}

const completedTodo: TodoProps = {
  ...uncompletedTodo,
  todo: { ...uncompletedTodo.todo, completed: true }
}

export const mockTodoProps = {
  completedTodo,
  uncompletedTodo
}
