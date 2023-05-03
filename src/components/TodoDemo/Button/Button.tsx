import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

import { resolveStyle } from '@/functions'

// *** Button Blueprint ***

export type ButtonType = {
  text: 'delete' | 'to do' | 'done'
  disabled: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
} & ComponentPropsWithoutRef<'button'>

const baseStyleButton = 'border-0 px-4 py-2 rounded-full text-white flex'

const buttonColors: Record<ButtonType['text'], string> = {
  delete: 'bg-red-600',
  'to do': 'bg-blue-600',
  done: 'bg-green-600'
}
export const Button = ({ text, disabled = false, onClick }: ButtonType) => {
  return (
    <button
      className={resolveStyle(baseStyleButton, buttonColors[text])}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

// *** Variant delete button***

export const DeleteButton = ({
  onClick,
  disabled
}: Pick<ButtonType, 'onClick' | 'disabled'>) => {
  return <Button onClick={onClick} disabled={disabled} text="delete" />
}

export const UpdateButton = ({
  onClick,
  disabled,
  text
}: ButtonType & { text: 'to do' | 'done' }) => {
  return <Button onClick={onClick} disabled={disabled} text={text} />
}
