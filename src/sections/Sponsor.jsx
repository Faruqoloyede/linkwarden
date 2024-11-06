import React from 'react'
import { google, amazon, bytedance } from '../assets'

const Sponsor = () => {
  return (
    <section className='relative pb-20 max-lg:pb-3'>
        <div className="container flex flex-col items-center justify-center">
            <h4 className='font-poppins font-normal text-white text-[30px] max-lg:text-[25px] leading-[52px] text-center'>Loved by thousands at the world's<br className='max-lg:hidden' /> most innovative companies</h4>
            <div className='flex flex-wrap items-center justify-center gap-10 max-lg:gap-5 mt-10'>
                <img src={google} alt="google" width={156} height={48} />
                <img src={amazon} alt="amazon"  width={194} height={48}/>
                <img src={bytedance} alt="bytedance" width={400} height={48} />
            </div>
        </div>
    </section>
  )
}

export default Sponsor