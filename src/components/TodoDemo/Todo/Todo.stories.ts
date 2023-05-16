import type { Meta, StoryObj } from '@storybook/react'

import { Todo } from './Todo'
import { mockTodoProps } from './Todo.mocks'

const meta: Meta<typeof Todo> = {
  title: 'Demo/Todo',
  component: Todo,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Todo>

export const OkTodo: Story = {
  args: mockTodoProps.todo
}
