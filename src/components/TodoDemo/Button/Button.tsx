import { ComponentPropsWithoutRef, MouseEventHandler } from 'react'

import { resolveStyle } from '@/functions'

// *** Blueprint ***

type ButtonType = {
  text: 'To do' | 'Done' | 'Delete'
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled: boolean
} & ComponentPropsWithoutRef<'button'>

const buttonColors: Record<ButtonType['text'], string> = {
  'To do': 'bg-blue-600',
  Done: 'bg-green-600',
  Delete: 'bg-red-600'
}

const baseStyleButton = 'border-0 px-4 py-2 rounded-full text-white'
export const Button = ({ text, onClick, disabled }: ButtonType) => {
  return (
    <button
      className={resolveStyle(baseStyleButton, buttonColors[text])}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

// *** delete button ***
export const DeleteButton = ({
  onClick,
  disabled
}: Omit<ButtonType, 'text'>) => (
  <Button text="Delete" onClick={onClick} disabled={disabled} />
)

//
export const UpdateButton = ({
  onClick,
  text,
  disabled
}: ButtonType & { text: 'To do' | 'Done' }) => {
  return <Button text={text} onClick={onClick} disabled={disabled} />
}
