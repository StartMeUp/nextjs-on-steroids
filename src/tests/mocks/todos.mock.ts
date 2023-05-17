import { TodoType } from '@/assets/schemas/todo.schema'

export const mockTodos: TodoType[] = [
  {
    id: 1,
    completed: true,
    todo: 'Do something nice for someone I care about',
    userId: 26
  },
  {
    id: 2,
    completed: false,
    todo: 'Memorize the fifty states and their capitals',
    userId: 48
  },
  {
    id: 3,
    completed: false,
    todo: 'Watch a classic movie',
    userId: 4
  },
  {
    id: 4,
    completed: false,
    todo: 'Contribute code or a monetary donation to an open-source software project',
    userId: 48
  },
  {
    id: 5,
    completed: false,
    todo: "Solve a Rubik's cube",
    userId: 31
  },
  {
    id: 6,
    completed: false,
    todo: 'Bake pastries for me and neighbor',
    userId: 39
  },
  {
    id: 7,
    completed: false,
    todo: 'Go see a Broadway production',
    userId: 32
  },
  {
    id: 8,
    completed: true,
    todo: 'Write a thank you letter to an influential person in my life',
    userId: 13
  },
  {
    id: 9,
    completed: false,
    todo: 'Invite some friends over for a game night',
    userId: 47
  },
  {
    id: 10,
    completed: false,
    todo: 'Have a football scrimmage with some friends',
    userId: 19
  }
]
