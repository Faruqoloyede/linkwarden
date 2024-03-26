import { logo } from "../assets"
import { navlinks } from "../constant"
import styles from "../styles"

const Navbar = () => {
  return (
    <nav className={`${styles.flex} w-full py-6`}>
      <a href="#">
        <img src={logo} alt="logo" className="w-[120px]" />
      </a>
      <ul className="list-none sm:flex hidden justify-center item-center flex-1">
        {navlinks.map((link)=>(
            <li key={link.id} className="font-poppins text-grey mr-4 font-normal cursor-pointer">
                <a href={`#${link.id}`}>
                    {link.title}
                </a>
            </li>
        ))}
      </ul>
        <div className="">
            <a href="#" className="text-grey cursor-pointer">Login</a>
        </div>
    </nav>
  )
}

export default Navbar
