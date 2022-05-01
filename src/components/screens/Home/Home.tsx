import React, { useState } from 'react'
import { ITodo } from '../../../features/ITodo'
import CreateTodoField from './CreateTodoField/CreateTodoField'
import TodoItem from './item/TodoItem'

const data: ITodo[] = [
  {
    _id: '1',
    title: 'Finish the essay collboration',
    isCompleted: false,
  },
  {
    _id: '2',
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    _id: '3',
    title: 'Send the finished assigment',
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)
  const changeTodo = (id: string) =>
    setTodos([...todos].map((e) => (e._id === id ? { ...e, isCompleted: !e.isCompleted } : e)))

  const removeTodo = (id: string) => setTodos([...todos].filter((t) => t._id !== id))

  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
      {todos.map((todo) => (
        <TodoItem key={todo._id} changeTodo={changeTodo} removeTodo={removeTodo} {...todo} />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home
