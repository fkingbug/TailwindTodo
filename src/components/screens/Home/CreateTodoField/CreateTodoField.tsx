import React, { FC, useState } from 'react'
import { ITodo } from '../../../../features/ITodo'

interface CreateProp {
  setTodos: any
}

const CreateTodoField: FC<CreateProp> = ({ setTodos }) => {
  const [title, setTitle] = useState('')
  const addTodo = (title: string) => {
    setTodos((prev: ITodo[]) => [{ _id: `${new Date()}`, title, isCompleted: false }, ...prev])
    setTitle('')
  }

  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add a task'
      />
    </div>
  )
}

export default CreateTodoField
