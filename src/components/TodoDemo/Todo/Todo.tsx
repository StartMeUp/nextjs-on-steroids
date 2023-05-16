import { TodoType } from '@/assets/schemas/todo.schema'

import { DeleteButton, DoneButton, TodoButton } from '../Button/Button'

// *** Blueprint ***

export type TodoProps = {
  todo: TodoType
  handleUpdate: () => void
  handleDelete: () => void
}

export const Todo = ({ todo, handleUpdate, handleDelete }: TodoProps) => {
  const { completed, todo: text } = todo
  return (
    <div className="border-1 mb-4 flex items-center gap-4 rounded-lg border p-4">
      <span className={`grow ${completed && 'line-through'}`}>{text}</span>

      {completed ? (
        <DoneButton onClick={handleUpdate} />
      ) : (
        <TodoButton onClick={handleUpdate} />
      )}

      <DeleteButton onClick={handleDelete} />
    </div>
  )
}
