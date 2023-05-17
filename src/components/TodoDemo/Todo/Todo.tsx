import { TodoType } from '@/assets/schemas/todo.schema'

import { ButtonProps, DeleteButton, UpdateButton } from '../Button/Button'

export type TodoProps = {
  todo: TodoType
  onHandleUpdate: () => void
  onHandleDelete: () => void
}

export const Todo = ({ todo, onHandleUpdate, onHandleDelete }: TodoProps) => {
  const { completed, todo: text } = todo

  // there are various ways to handle the update of the todo

  const doneOrToComplete: ButtonProps['buttonText'] = completed
    ? 'done'
    : 'to do'

  return (
    <div className="border-1 mb-4 flex items-center gap-4 rounded-lg border p-4">
      <span className={`grow ${completed && 'line-through'}`}>{text}</span>

      <UpdateButton onClick={onHandleUpdate} buttonText={doneOrToComplete} />

      {/* {completed ? (
        <DoneButton onClick={onHandleUpdate} />
      ) : (
        <ToCompleteButton onClick={onHandleUpdate} />
      )} */}

      {/* <Button
        onClick={onHandleUpdate}
        buttonText={doneOrToComplete}
        variant={doneOrToComplete}
      /> */}

      <DeleteButton onClick={onHandleDelete} />
    </div>
  )
}
