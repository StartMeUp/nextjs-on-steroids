import type { Meta, StoryObj } from '@storybook/react'

import { BaseTemplate } from './BaseTemplate'

const meta: Meta<typeof BaseTemplate> = {
  title: 'Demo/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof BaseTemplate>

export const PrimaryBaseTemplate: Story = {
  args: {
    text: 'Primary text',
    customStyle: 'border-blue-600 bg-blue-200'
  }
}

export const SecondaryBaseTemplate: Story = {
  args: {
    text: 'secondary text',
    customStyle: 'border-red-600 bg-red-200'
  }
}
