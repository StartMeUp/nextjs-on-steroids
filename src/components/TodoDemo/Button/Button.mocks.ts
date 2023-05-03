import { ButtonType } from './Button'

const button: ButtonType = {
  text: 'delete',
  disabled: false,
  onClick: () => {
    console.log('clicked on delete')
  }
}

export const mockButtonProps = {
  button
}
