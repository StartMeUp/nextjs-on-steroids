import { ButtonProps } from './Button'

const destroy: ButtonProps = {
  buttonText: 'delete',
  variant: 'delete',
  onClick: () => {
    console.log('clicked on delete')
  }
}

const todo: ButtonProps = {
  buttonText: 'to do',
  variant: 'to do',
  onClick: () => {
    console.log('clicked on to do')
  }
}

const done: ButtonProps = {
  buttonText: 'done',
  variant: 'done',
  onClick: () => {
    console.log('clicked on delete')
  }
}

export const mockButtonProps = {
  destroy,
  todo,
  done
}
