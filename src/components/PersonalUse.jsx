import React from 'react'
import { Personal } from '../constant'

const PersonalUse = ({ styles }) => {
  return (
    <div className={`${styles} flex flex-wrap items-center justify-between gap-6 py-4 `}>

      {Personal.map((item)=>(
        <div key={item.id} className='flex items-center '>
            <div className=' flex items-center justify-center bg-service rounded-full border border-border p-3 mr-3 '>
                <img src={item.icon} className='w-[2rem]' />
            </div>
            <div>
                <p className='text-white sm:text-2xl text-[18px]'>{item.text}</p>
                <p className='text-sm text-grey max-w-[370px] sm:flex hidden'>{item.content}</p>
            </div>
      </div> 
      ))}
      
    </div>
  )
}

export default PersonalUse