import React from 'react'
import { Element } from 'react-scroll'
import Button from '../components/Button'
import { dashboard, line, microsoft } from '../assets'


const Hero = () => {
  return (
    <section className='relative pt-56 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
        <Element name='home'>
          <div className="container flex flex-col items-center justify-center">
              <h1 className='text-[60px] max-lg:text-[40px] text-center leading-[84px] max-md:leading-12'>Webpage Management for Individuals and Teams</h1>
              <p className='text-[18px] text-p1 text-center mt-5'>Linkwarden is a fully self-hostable, open-source collaborative bookmark manager to <br className='max-lg:hidden block' />collect, organize and archive webpages.</p>
              <div className="flex items-center gap-5 justify-center mt-5">
                <Button containerCLass= "bg-blue">Start Free Trial</Button>
                <Button containerCLass= "border-2 border-border" icon="/star.png">Star us on GitHub</Button>
              </div> 
              <div className='pointer-events-none absolute top-20 left-0 z-2 mx-auto w-[100%]'>
                    <img src={line} alt="" />
                </div>
                <div className='relative z-4 mt-10'>
                <img src={dashboard} alt="" />
                </div>
          </div>
        </Element>
    </section>
  )
}

export default Hero