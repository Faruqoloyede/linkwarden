import React from 'react'
import { google, amazon, bytedance } from '../assets'

const Company = () => {
  return (
    <section className='relative pb-20 max-lg:pb-20'>
        <div className="container flex flex-col items-center justify-center">
            <h4 className='font-poppins font-normal text-white text-[30px] max-lg:text-[25px] leading-[52px] text-center'>Loved by thousands at the world's<br className='max-lg:hidden' /> most innovative companies</h4>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                <img src={google} alt="google" className='w-[200px] object-contain' />
                <img src={amazon} alt="amazon"  className='w-[200px] object-contain'/>
                <img src={bytedance} alt="bytedance" className='w-[500px] object-contain' />
            </div>
        </div>
    </section>
  )
}

export default Company