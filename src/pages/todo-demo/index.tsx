import { useState } from 'react'

import { DeleteButton, UpdateButton } from '@/components/TodoDemo/Button/Button'

const Todos = () => {
  const [isDone, setIsDone] = useState(false)
  const toDoState = isDone ? 'done' : 'to do'
  return (
    <>
      <DeleteButton onClick={() => console.log('delete button in page')} />

      <UpdateButton
        onClick={() => {
          setIsDone((state) => !state)
        }}
        text={toDoState}
      />
    </>
  )
}

export default Todos
