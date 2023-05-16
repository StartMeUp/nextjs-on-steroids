import { TodoType } from '@/assets/schemas/todo.schema'

import {
  CompletedButton,
  DeleteButton,
  ToCompleteButton
} from '../Button/Button'

// *** Blueprint ***

export type TodoProps = {
  todo: TodoType
  onHandleUpdate: () => void
  onHandleDelete: () => void
}

export const Todo = ({ todo, onHandleUpdate, onHandleDelete }: TodoProps) => {
  const { completed, todo: text } = todo
  return (
    <div className="border-1 mb-4 flex items-center gap-4 rounded-lg border p-4">
      <span className={`grow ${completed && 'line-through'}`}>{text}</span>

      {completed ? (
        <CompletedButton onClick={onHandleUpdate} />
      ) : (
        <ToCompleteButton onClick={onHandleUpdate} />
      )}

      <DeleteButton onClick={onHandleDelete} />
    </div>
  )
}
