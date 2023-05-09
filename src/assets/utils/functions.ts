import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const sortSpaceSeparatedStrings = (str: string) =>
  str.split(' ').sort().join(' ')

export const resolveStyle = (baseStyle: string, customStyle?: string) =>
  sortSpaceSeparatedStrings(
    `${baseStyle}${customStyle ? ' ' + customStyle : ''}`
  )

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
