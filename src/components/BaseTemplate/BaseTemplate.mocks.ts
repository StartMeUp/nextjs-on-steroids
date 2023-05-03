import { BaseTemplateType } from './BaseTemplate'

const primary: BaseTemplateType = {
  variantStyle: 'border-blue-600 bg-blue-200',
  text: 'Primary Base Template'
}

const secondary: BaseTemplateType = {
  variantStyle: 'border-red-600 bg-red-200',
  text: 'secondary Base Template'
}

export const mockBaseTemplateProps = {
  primary,
  secondary
}
