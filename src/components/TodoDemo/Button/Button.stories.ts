import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Demo/Button',
  component: Button,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const DeleteButton: Story = {
  args: {
    text: 'Delete',
    customStyle: 'bg-red-400 text-white'
  }
}
