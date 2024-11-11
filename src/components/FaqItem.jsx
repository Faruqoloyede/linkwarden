import React from 'react'
import { useState } from 'react';
import { add, close } from '../assets'


const FaqItem = ({ item, index }) => {
    const [isOpen, setIsopen] = useState(false);
    const active = isOpen === item.id;
  return (
    <div className='relative mb-16'>
        <div className='flex items-center gap-5 cursor-pointer' onClick={()=>{setIsopen(isOpen === item.id ? null : item.id)}}>
            <img src={active ? close : add} alt="add" className='size-5 object-contain transition-colors duration-500' />
            <div className='h-6 text-white font-poppins font-normal text-xl max-lg:text-[18px] transition-colors duration-500 max-md:flex max-md:min-h-20 max-md:items-center'>{item.question}</div>
        </div>
          <div className='content'>
          {isOpen === item.id && <div className='font-poppins font-normal px-7 py-3.5 text-[18px]'>{item.answer}</div>}
          </div>
        {index !== 5 && <div className='w-full h-[1px] mt-4 g4' />}
    </div>
  )
}

export default FaqItem