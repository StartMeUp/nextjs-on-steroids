import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { mockButtonProps } from './Button.mocks'

const meta: Meta<typeof Button> = {
  title: 'Demo/Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const DeleteButton: Story = {
  args: mockButtonProps.destroy
}

export const TodoButton: Story = {
  args: mockButtonProps.todo
}

export const DoneButton: Story = {
  args: mockButtonProps.done
}
