import { logo, menu, close } from "../assets"
import { navlinks } from "../constant"
import styles from "../styles"
import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.flex} w-full py-6 `}>
      <a href="#">
        <img src={logo} alt="logo" className="w-[129px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-center item-center flex-1">
        {navlinks.map((link)=>(
            <li key={link.id} className="font-poppins text-grey mr-4 font-normal cursor-pointer text-[16px]">
                <a href={`#${link.id}`}>
                    {link.title}
                </a>
            </li>
        ))}
      </ul>
        <div className="login_btn px-5 py-2 rounded-full sm:block hidden">
            <a href="#" className="text-grey cursor-pointer">Login</a>
        </div>
        
        <div className="sm:hidden flex flex-1 items-center justify-end">
          <img src={toggle ? close : menu} alt="menu"
           className="w-[28px] h-[28px] object-contain"
           onClick={()=> setToggle((prev)=> !prev)} />

            <div className={`${toggle ? "flex" : "hidden"} flex-col p-6 absolute bg-navbar w-full top-[65px] right-0 sidebar`}>
              <ul className="list-none sm:hidden flex flex-col justify-center items-center  mt-4">
                {navlinks.map((link)=>(
                  <li key={link.id} className="font-poppins text-white font-normal cursor-pointer text-[16px] mb-5">
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                ))}
                  <div className=" flex flex-col items-center justify-center">
                    <a href="#" className="text-white cursor-pointer px-5 py-2 login_btn rounded-full mb-4">Login</a>
                    <a href="#" className="text-white bg-blue cursor-pointer px-20 py-2 login_btn rounded-full font-semi">Start Free Trial</a>
                  </div>
              </ul>
              
            </div>
        </div>
    </nav>
  )
}

export default Navbar
