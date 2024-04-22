import React from 'react'
import { buttons } from '../constant'

const Button = ({ text }) => {
  return (
    <div>
      <button className='text-sm font-semibold outline-none'>{text}</button>
    </div>
  )
}

export default Button
