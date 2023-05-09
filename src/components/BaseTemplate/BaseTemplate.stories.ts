import type { Meta, StoryObj } from '@storybook/react'

import { BaseTemplate } from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

const meta: Meta<typeof BaseTemplate> = {
  title: 'Demo/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof BaseTemplate>

export const OkBaseTemplate: Story = {
  args: mockBaseTemplateProps.ok
}

export const WarningBaseTemplate: Story = {
  args: mockBaseTemplateProps.warning
}

export const AlertBaseTemplate: Story = {
  args: mockBaseTemplateProps.alert
}
