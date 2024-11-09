import React from 'react'
import { Element } from 'react-scroll'
import { f1 } from '../assets'
import { service } from '../constant'

const Features = () => {
  return (
    <section className='relative z-2 pt-32 max-lg:pt-20 pb-10'>
        <Element name='Features'>
            <div className="container">
                <h1 className='font-poppins font-semibold text-[40px] max-lg:text-[30px] text-center mb-10'>Hold on, there’s more!</h1>
                <div className='grid grid-cols-3 items-center justify-center max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center gap-5'>
                  
                    {service.map(({ id, icon, title, content} )=>(
                          <div key={id} className='h-auto border-2 border-b2 box px-3 py-5 rounded-3xl'>
                          <div className='flex flex-col items-center justify-center mb-3'>
                          <img src={icon} alt="" className=' p-5 rounded-[20px] w-[80px] object-contain icon' />
                          </div>
                          <div className='flex flex-col items-center justify-center'>
                              <h4 className='text-[20px] font-poppins font-semibold'>{title}</h4>
                              <p className='text-center text-[16px] font-poppins font-normal'>{content}</p>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Features