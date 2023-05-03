export const sortSpaceSeparatedStrings = (str: string) =>
  str.split(' ').sort().join(' ')

export const resolveStyle = (baseStyle: string, customStyle?: string) =>
  sortSpaceSeparatedStrings(
    `${baseStyle}${customStyle ? ' ' + customStyle : ''}`
  )
