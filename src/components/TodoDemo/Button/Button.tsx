import { ComponentPropsWithoutRef } from 'react'

import { resolveStyle } from '../../../assets/utils/utility.functions'

type IButton = {
  customStyle: string
  text: string
} & ComponentPropsWithoutRef<'button'>

const baseStyle = 'border-0 px-4 py-2 rounded-full shadow-sm'

export const Button = ({ customStyle, text, ...props }: IButton) => {
  return (
    <button className={resolveStyle(baseStyle, customStyle)} {...props}>
      {text}
    </button>
  )
}
