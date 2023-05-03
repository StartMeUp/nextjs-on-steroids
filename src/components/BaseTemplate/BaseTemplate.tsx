import { resolveStyle } from '@/functions'

import { mockBaseTemplateProps } from './BaseTemplate.mocks'

// *** Blueprint ***

export type BaseTemplateType = {
  variantStyle: string
  text: string
}

const baseStyleBaseTemplate = 'border border-3 p-4 rounded-lg'
export const BaseTemplate = ({ variantStyle, text }: BaseTemplateType) => {
  return (
    <div className={resolveStyle(baseStyleBaseTemplate, variantStyle)}>
      {text}
    </div>
  )
}

// *** Variant ***
export const PrimaryBaseTemplate = () => (
  <BaseTemplate {...mockBaseTemplateProps.primary} />
)

// *** Variant ***
export const SecondaryBaseTemplate = () => (
  <BaseTemplate {...mockBaseTemplateProps.secondary} />
)
