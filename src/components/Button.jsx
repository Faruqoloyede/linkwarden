import clsx from 'clsx'
import React from 'react'

const Button = ({ children, href, icon, containerCLass }) => {
    const Inner = ()=>(
        <>
            <span className='flex items-center max-lg:text-sm'>
                {icon && (
                    <img src={icon} alt="icon" className='size-5 mr-3 object-contain' />
                )}
                {children}
            </span>
        </>
    )
  return href ? (
    <a href={href} className={clsx('relative rounded-2xl shadow-md px-7 py-4', containerCLass)}>
        {children}
    </a>
  ) : (
    <button className={clsx('relative rounded-full shadow-md px-7 py-4 z-4', containerCLass)}>
        <Inner />
    </button>
  )
}

export default Button