export const resolveStyle = (baseStyle: string, customStyle: string) =>
  baseStyle + (customStyle ? ' ' + customStyle : '')
