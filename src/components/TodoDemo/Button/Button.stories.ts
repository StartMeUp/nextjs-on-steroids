import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Demo/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'radio', options: ['To do', 'Done', 'Delete'] }
  },
  args: {
    onClick: () => console.log('button clicked')
  }
}

export default meta
type Story = StoryObj<typeof Button>

// *** delete button ***
export const Buttons: Story = {
  args: {
    text: 'Done',
    disabled: false
  }
}
