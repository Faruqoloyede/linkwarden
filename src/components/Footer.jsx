import React from 'react'
import styles from '../styles'
import { footer } from '../constant'

const Footer = () => {
  return (
    <section className='pt-16'>
      <ul className='list-none flex flex-wrap items-center justify-center'>
        {footer.map((item)=>(
            <li key={item.id} className='px-3 text-grey'>
                <a href="">{item.title}</a>
            </li>
        ))}
      </ul>
      <p className='text-white text-[16px] text-center pt-20 pb-6'>© 2024 Linkwarden. All rights reserved.</p>
    </section>
  )
}

export default Footer
