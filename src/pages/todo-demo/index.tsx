import { DeleteButton, UpdateButton } from '@/components/TodoDemo/Button/Button'

const TodoDemo = () => (
  <>
    <DeleteButton onClick={() => console.log('clicked')} disabled={false} />
    <UpdateButton
      onClick={() => console.log('clicked')}
      text="To do"
      disabled={false}
    />
    <UpdateButton
      onClick={() => console.log('clicked')}
      text="Done"
      disabled={false}
    />
  </>
)

export default TodoDemo
