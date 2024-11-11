import React from 'react'
import { Element } from 'react-scroll'
import { logo } from '../assets'
import { footer, social } from '../constant'

const Footer = () => {
  return (
    <section className='relative pt-28'>
        <Element name='FOOTER'>
            <div className="container">
                <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col items-center max-w-[400px]">
                        <img src={logo} alt="logo" width={200} height={55} className='cursor-pointer' />
                        <p className='pl-28 mt-5 leading[89px] text-start'>Linkwarden is a fully self-hostable, open-source collaborative bookmark manager.</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h4 className='text-[20px] font-poppins font-normal'>Useful Links</h4>
                        <ul className='flex flex-col items-start mt-10'>
                            {footer.map((item, index)=>(
                                <li key={item.id} className='mb-5 text-[16px]'><a href="#">{item.title}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col items-center'>
                    <h4 className='text-[20px] font-poppins font-normal'>Contact Us</h4>
                    <a href="support@linkwarden.app">support@linkwarden.app</a>
                    <div className='flex items-center gap-5 mt-10'>
                        {social.map(({ icon, id })=>(
                            <a href="/">
                                <img src={icon} alt="" className='size-7 object-contain' />
                            </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Footer