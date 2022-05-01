import React, { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'

interface CheckProps {
  isCompleted: boolean
}

const Check: FC<CheckProps> = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 rounded-lg ${
        isCompleted ? 'bg-pink-400' : ''
      } border-pink-400 w-6 h-6 mr-3 flex items-center justify-center`}
    >
      {isCompleted && <BsCheckLg size={10} className='text-gray-900' />}
    </div>
  )
}

export default Check
