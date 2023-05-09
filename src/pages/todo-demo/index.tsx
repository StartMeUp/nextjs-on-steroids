import {
  DeleteButton,
  DoneButton,
  TodoButton
} from '@/components/TodoDemo/Button/Button'

const Todos = () => {
  return (
    <>
      <DeleteButton onClick={() => console.log('delete button in page')} />
      <DoneButton onClick={() => console.log('done button in page')} />
      <TodoButton onClick={() => console.log('to do button in page')} />
    </>
  )
}

export default Todos
