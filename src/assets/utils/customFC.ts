import type { FC, PropsWithChildren } from 'react'

import { sortSpaceSeparatedStrings } from './functions'

type WithVariantStyle = {
  variantStyle?: string | Record<string, string>
}

export type CustomFC<Props> = FC<Props & WithVariantStyle>

export type CustomFCWithChildren<Props> = FC<
  PropsWithChildren<Props & WithVariantStyle>
>

export const resolveStyle = (baseStyle: string, customStyle?: string) =>
  sortSpaceSeparatedStrings(
    `${baseStyle}${customStyle ? ' ' + customStyle : ''}`
  )
