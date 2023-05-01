import type { Meta, StoryObj } from '@storybook/react'

import {
  BaseTemplate,
  primaryBaseTemplateProps,
  secondaryBaseTemplateProps
} from './BaseTemplate'

const meta: Meta<typeof BaseTemplate> = {
  title: 'Demo/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof BaseTemplate>

export const PrimaryBaseTemplate: Story = {
  args: primaryBaseTemplateProps
}

export const SecondaryBaseTemplate: Story = {
  args: secondaryBaseTemplateProps
}
