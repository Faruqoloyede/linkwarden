import React from 'react'
import { Element } from 'react-scroll'
import Button from '../components/Button'

const NewsLetter = () => {
  return (
    <section>
        <Element name='DOCS'>
            <div className="container">
                <div className="flex flex-col items-center justify-center">
                    <h1 className='font-poppins font-bold text-[40px] max-lg:text-[30px] text-center mb-6'>Start your bookmarking journey</h1>
                    <p className='font-poppins font-normal text-[18px]'>14-day free trial, cancel anytime</p>
                    <div className='flex items-center justify-center gap-10 my-12'>
                        <Button containerCLass="g3">Start Free Trial</Button>
                        <Button containerCLass= "border-2 border-border" icon="/star.png">Star us on GitHub</Button>
                    </div>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default NewsLetter