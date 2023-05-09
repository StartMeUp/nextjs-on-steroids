import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

import { classNames } from '@/assets/utils/functions'

import { mockBaseTemplateProps } from './BaseTemplate.mocks'

// *** Blueprint ***

const variantsBaseTemplate = cva('border-2 p-4 rounded-lg text-white', {
  variants: {
    variant: {
      alert: 'border-red-800 bg-red-400',
      ok: 'border-blue-800 bg-blue-400',
      warning: 'border-orange-800 bg-orange-400'
    },
    fontWeight: {
      bold: 'font-bold',
      medium: 'font-medium'
    }
  },
  defaultVariants: {
    variant: 'ok',
    fontWeight: null
  }
})

export type BaseTemplateProps = {
  text: string
} & ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof variantsBaseTemplate>

export const BaseTemplate = ({
  text,
  variant,
  fontWeight
}: BaseTemplateProps) => {
  return (
    <div className={classNames(variantsBaseTemplate({ variant, fontWeight }))}>
      {text}
    </div>
  )
}

export const OkTemplateBase = ({ text }: Pick<BaseTemplateProps, 'text'>) => {
  const props = { ...mockBaseTemplateProps.ok, text }
  return <BaseTemplate {...props} />
}

export const WarningTemplateBase = ({
  text
}: Pick<BaseTemplateProps, 'text'>) => {
  const props = { ...mockBaseTemplateProps.warning, text }
  return <BaseTemplate {...props} />
}

export const AlertTemplateBase = ({
  text
}: Pick<BaseTemplateProps, 'text'>) => {
  const props = { ...mockBaseTemplateProps.alert, text }
  return <BaseTemplate {...props} />
}
