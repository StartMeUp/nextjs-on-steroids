import { resolveStyle } from '@/functions'

import { mockButtonProps } from './Button.mocks'

// *** Blueprint ***

export type ButtonType = {
  variantStyle: string
  text: string
}

const baseStyleButton = 'border border-3 p-4 rounded-lg'
export const Button = ({ variantStyle, text }: ButtonType) => {
  return (
    <div className={resolveStyle(baseStyleButton, variantStyle)}>{text}</div>
  )
}

// *** Variant ***
export const PrimaryButton = () => <Button {...mockButtonProps.primary} />

// *** Variant ***
export const SecondaryButton = () => <Button {...mockButtonProps.secondary} />
