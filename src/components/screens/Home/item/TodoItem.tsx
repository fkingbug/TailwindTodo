import React, { FC } from 'react'
import Check from './Check'
import { BiTrash } from 'react-icons/bi'
import { TodoProps } from '../../../../features/TodoProps'

const TodoItem: FC<TodoProps> = ({ _id, title, isCompleted, changeTodo, removeTodo }) => {
  return (
    <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'>
      <button className='flex items-center' onClick={() => changeTodo(_id)}>
        <Check isCompleted={isCompleted} />
        <span className={`${isCompleted ? 'line-through' : ''}`}>{title}</span>
      </button>
      <button onClick={() => removeTodo(_id)}>
        <BiTrash className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
      </button>
    </div>
  )
}

export default TodoItem
