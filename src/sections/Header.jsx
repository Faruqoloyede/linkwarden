import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { logo, close, menu, line } from "../assets"
import { Link as LinkScroll } from 'react-scroll'
import { navlinks } from '../constant'


const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [HasScroll, setHasScroll] = useState(false)
  const Navlink = ({ title })=>(
    <LinkScroll to={title} offset={-100} spy smooth className='text-white uppercase font-poppins font-normal transition-colors duration-500 cursor-pointer hover:text-[#5312C6] max-lg:my-4'>{title}</LinkScroll>
  ) 

  useEffect(()=>{
    const Handlescroll = ()=>{
      setHasScroll(window.scrollY > 32);
    };
    window.addEventListener("scroll", Handlescroll);
    return ()=>{
      window.removeEventListener("scroll", Handlescroll)
    }
  }, [])
  
  return (
    <header>
        <div className={clsx("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500", HasScroll && "bg-primary py-10 backdrop-blur-[8px]")}>
            <div className='container flex h-4 items-center justify-between'>
                <LinkScroll to='home' offset={-100} spy smooth>
                  <img src={logo} alt="logo" width={200} height={55} />
                </LinkScroll>
                <ul className='list-none flex items-center gap-10 justify-center flex-1 max-lg:hidden'>
                    {navlinks.map(({ id, title })=>(
                        <li key={id}>
                          <Navlink title={title} />
                        </li>
                    ))}
                </ul>
                <button className='border-2 border-border px-4 py-3 rounded-[12px] max-lg:hidden'>Login</button>
                <div className='hidden max-lg:block cursor-pointer' onClick={()=> setToggle(true)}>
                    <img src={menu} alt="menu" className='size-7 object-contain' />
                </div>
            </div>
            <div className='hidden max-lg:block relative'>
              <div className={clsx("fixed w-full top-0 bg-primary min-h-screen px-4", toggle ? "block" : "hidden")}>
              <div className='flex items-center justify-between py-9 relative z-4'>
                <img src={logo} alt="logo" width={200} height={55} />
                <img src={close} alt="close" className="cursor-pointer size-7 object-contain" onClick={()=>  setToggle(false)} />
              </div>
            <ul className='list-none flex flex-col mt-20 items-center gap-10 justify-center flex-1 relative z-4'>
                    {navlinks.map(({ id, title })=>(
                        <li key={id}>
                          <Navlink title={title} />
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center">
                <button className='border-2 border-border px-4 py-3 rounded-[12px] mt-5 w-[200px] relative z-4'>Login</button>
                </div>
                <div className='absolute top-0 left-0 w-[960px] h-[380px] translate-x-[-290px] z-0'>
                    <img src={line} alt="" />
                </div>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header