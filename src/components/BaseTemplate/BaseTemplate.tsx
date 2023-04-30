type IBaseTemplate = {
  customStyle: string
  text: string
}

const baseStyle = 'border-1 p-4 rounded-lg'

export const BaseTemplate = ({ customStyle, text }: IBaseTemplate) => {
  return <div className={baseStyle + ' ' + customStyle}>{text}</div>
}
