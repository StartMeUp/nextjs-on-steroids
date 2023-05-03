import { resolveStyle } from '@/functions'

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
  <BaseTemplate
    variantStyle="border-blue-600 bg-blue-200"
    text="Primary Base Template"
  />
)

// *** Variant ***
export const SecondaryBaseTemplate = () => (
  <BaseTemplate
    variantStyle="border-red-600 bg-red-200"
    text="secondary Base Template"
  />
)
