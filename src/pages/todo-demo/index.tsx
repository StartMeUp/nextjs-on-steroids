import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { getTodos } from '@/assets/utils/fetch'
import { Todo } from '@/components/TodoDemo/Todo/Todo'
import { log } from '@/logger'

const Todos = () => {
  const { data, isError } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
  // dummyjson.com is not a real server that can handle posting or updating data
  // here we only get the data from server side, and modify it locally using a useState
  const [todos, setTodos] = useState(data?.todos.slice(0, 10))

  // how to use the logger
  log.info('todos', todos)

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
      {isError && <p>Error retrieving todos</p>}
      {!!todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={() => handleDelete(todo.id)}
            handleUpdate={() => handleUpdate(todo.id)}
          />
        ))}
    </main>
  )
}

export const getStaticProps = async () => {
  // how to manage server side data with "@tanstack/react-query"
  // it fetches data from the backend and then hydrates the front-end with the result
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['todos'], getTodos)

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Todos
