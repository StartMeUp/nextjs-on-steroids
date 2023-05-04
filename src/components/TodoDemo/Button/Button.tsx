import { MouseEventHandler } from 'react'

import { resolveStyle } from '@/functions'

// *** Button Blueprint ***

export type ButtonType = {
  text: 'delete' | 'to do' | 'done'
  onClick: MouseEventHandler<HTMLButtonElement>
}

const baseStyleButton = 'border-0 px-4 py-2 rounded-full text-white flex'

const buttonColors: Record<ButtonType['text'], string> = {
  delete: 'bg-red-600',
  'to do': 'bg-blue-600',
  done: 'bg-green-600'
}
export const Button = ({ text, onClick }: ButtonType) => {
  return (
    <button
      className={resolveStyle(baseStyleButton, buttonColors[text])}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

// *** Variant delete button***
export const DeleteButton = ({ onClick }: Pick<ButtonType, 'onClick'>) => {
  return <Button onClick={onClick} text="delete" />
}

// *** Variant update button***
export const UpdateButton = ({
  onClick,
  text
}: ButtonType & { text: 'to do' | 'done' }) => {
  return <Button onClick={onClick} text={text} />
}
