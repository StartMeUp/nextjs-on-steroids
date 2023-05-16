import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { getTodos } from '@/assets/utils/fetch'
import { Todo } from '@/components/TodoDemo/Todo/Todo'

const Todos = () => {
  const { data } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  const [todos, setTodos] = useState(data?.todos.slice(0, 10))
  console.log('todos =>', todos)

  const handleDelete = (todoId: number) =>
    setTodos((currentTodos) =>
      currentTodos?.filter((todo) => todo.id !== todoId)
    )

  const handleUpdate = (todoId: number) =>
    setTodos((currentTodos) =>
      currentTodos?.map((todo) =>
        todo.id !== todoId ? todo : { ...todo, completed: !todo.completed }
      )
    )

  return (
    <main className="m-6 mx-auto max-w-3xl">
      {todos ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={() => handleDelete(todo.id)}
            handleUpdate={() => handleUpdate(todo.id)}
          />
        ))
      ) : (
        <p>Error retrieving todos</p>
      )}
    </main>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['todos'], getTodos)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Todos
