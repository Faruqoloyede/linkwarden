import React from 'react'
import { Element } from 'react-scroll'
import { faq } from '../constant'
import FaqItem from '../components/FaqItem'

const Faq = () => {
  return (
    <section>
        <Element name="FAQS">
            <div className="container relative py-28 z-2">
                <div>
                    <h1 className='text-[40px] max-lg:text-[30px] font-poppins font-semibold text-center'>Frequently Asked Questions</h1>
                    <div className='relative border-2 border-pb p-12 max-lg:p-6 g2 rounded-xl'>
                        {faq.map((item, index)=>(
                            <FaqItem key={item.id} item={item} index={index}  />
                        ))}
                    </div>
                </div>
                <p className='text-center mt-5 font-poppins font-normal'>For any other questions, feel free to reach out to us at <a href="support@linkwarden.app">support@linkwarden.app</a></p>
            </div>
        </Element>
    </section>
  )
}

export default Faq