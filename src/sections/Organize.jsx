import React from 'react'
import { service, mask } from '../assets'
import { features } from '../constant'

const Organize = () => {
  return (
    <section className='relative z-4 py-6'>
        
        <div className="container">
        <div className='pointer-events-none absolute top-0 left-0 z-0 w-1/2'>
                    <img src={mask} alt="line" />
                </div>
            <div className='flex mb-5 items-center justify-center'>
            <div className='border-2 border-border px-3 py-1 rounded-full g2 mb-10 max-lg:mb-5'>
                Collect & Organize
            </div>
            </div>
            <div className='flex items-start justify-between max-lg:flex-col max-lg:gap-10'>
                <div className='flex flex-col items-center mt-10'>
                    <h1 className='font-poppins font-bold text-white text-[40px] max-lg:text-[30px]'>Collect and Organize Webpages</h1>
                    <div className='flex flex-col gap-5 mt-5'>
                        {features.map(({ id, icon, text })=>(
                            <div key={id} className='flex items-center gap-3'>
                                <img src={icon} alt="check" className='size-6' />
                                <p className='font-poppins font-normal text-[16px]'>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <img src={service} alt="" className='w-1/2 max-lg:w-full' />
            </div>
            
        </div>
    </section>
  )
}

export default Organize