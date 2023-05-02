import { resolveStyle } from '../../assets/utils/customFC'

// *** Blueprint ***

type BaseTemplateType = {
  variantStyle: string
  text: string
}

const baseStyleBaseTemplate = 'border-1 p-4 rounded-lg'
export const BaseTemplate = ({ variantStyle, text }: BaseTemplateType) => {
  return (
    <div className={resolveStyle(baseStyleBaseTemplate, variantStyle)}>
      {text}
    </div>
  )
}

// *** Variant ***

export const primaryBaseTemplateProps: BaseTemplateType = {
  variantStyle: 'border-blue-600 bg-blue-200',
  text: 'Primary Base Template'
}
export const PrimaryBaseTemplate = () => (
  <BaseTemplate
    variantStyle={primaryBaseTemplateProps.variantStyle}
    text={primaryBaseTemplateProps.text}
  />
)

// *** Variant ***

export const secondaryBaseTemplateProps: BaseTemplateType = {
  variantStyle: 'border-red-600 bg-red-200',
  text: 'secondary Base Template'
}
export const SecondaryBaseTemplate = () => (
  <BaseTemplate
    variantStyle={secondaryBaseTemplateProps.variantStyle}
    text={secondaryBaseTemplateProps.text}
  />
)
