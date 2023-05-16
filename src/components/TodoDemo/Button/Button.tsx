import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import { BiCheckCircle, BiChevronsRight, BiTrash } from 'react-icons/bi'

import { classNames } from '@/assets/utils/functions'

import { mockButtonProps } from './Button.mocks'

const buttonVariants = cva(
  'border-0 px-4 py-2 rounded-full text-white flex gap-2 items-center shrink-0',
  {
    variants: {
      variant: {
        delete: 'bg-red-600',
        'to do': 'bg-blue-600',
        done: 'bg-green-600'
      }
    }
  }
)

export type ButtonProps = {
  buttonText: 'delete' | 'to do' | 'done'
} & VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<'button'>

// const buttonColors: Record<ButtonProps['buttonText'], string> = {
//   delete: 'bg-red-600',
//   'to do': 'bg-blue-600',
//   done: 'bg-green-600'
// }

const buttonIcons: Record<ButtonProps['buttonText'], JSX.Element> = {
  delete: <BiTrash />,
  'to do': <BiChevronsRight />,
  done: <BiCheckCircle />
}

export const Button = ({
  buttonText,
  onClick,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(buttonVariants({ variant }))}
      onClick={onClick}
      {...props}
    >
      {buttonText} {buttonIcons[buttonText]}
    </button>
  )
}

export const DeleteButton = ({ onClick }: Pick<ButtonProps, 'onClick'>) => {
  const props = { ...mockButtonProps.destroy, onClick }
  return <Button {...props} />
}

export const ToCompleteButton = ({ onClick }: Pick<ButtonProps, 'onClick'>) => {
  const props = { ...mockButtonProps.todo, onClick }
  return <Button {...props} />
}

export const CompletedButton = ({ onClick }: Pick<ButtonProps, 'onClick'>) => {
  const props = { ...mockButtonProps.done, onClick }
  return <Button {...props} />
}
