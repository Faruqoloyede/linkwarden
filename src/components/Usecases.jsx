import styles from "../styles"
import { user, bulb, research, bookmark } from "../assets"
import Preserve from "./Preserve"
import PersonalUse from "./PersonalUse"
import Design from "./Design"
import Research from "./Research"
import Project from "./Project"
import { useState } from "react"

const Usecases = () => {
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);

  const showOne = ()=>{
    setToggleOne(true)
    setToggleTwo(false)
    setToggleThree(false)
    setToggleFour(false)
  }

  const showTwo = ()=>{
    setToggleOne(false)
    setToggleTwo(true)
    setToggleThree(false)
    setToggleFour(false)
  }

  const showThree = ()=>{
    setToggleOne(false)
    setToggleTwo(false)
    setToggleThree(true)
    setToggleFour(false)
  }

  const showFour = ()=>{
    setToggleOne(false)
    setToggleTwo(false)
    setToggleThree(false)
    setToggleFour(true)
  }
  return (
    <section className={`${styles.paddingY}`}>
      <h1 className='sm:text-4xl text-3xl font-bold text-white text-center mb-3'>Exploring the Use Cases</h1>
      <div className="hidden sm:flex items-center justify-evenly w-100 py-5">

        <button className={`${toggleOne ? "bg-blue" : ""} flex flex-col items-center justify-center  px-10 py-4 text-white font-semibold text-sm border border-border rounded-2xl `} onClick={showOne}>
            <img src={user} alt="" className="w-[3rem]" />
            Personal Use
        </button>

        <button className={`${toggleTwo ? "bg-blue" : ""} flex flex-col items-center justify-center  px-10 py-4 text-white font-semibold text-sm border border-border rounded-2xl`} onClick={showTwo} >
            <img src={bulb} alt="" className="w-[3rem]" />
            Design Inpirations
        </button>

        <button className={`${toggleThree ? "bg-blue" : ""} flex flex-col items-center justify-center  px-10 py-4 text-white font-semibold text-sm border border-border rounded-2xl`} onClick={showThree}>
            <img src={research} alt="" className="w-[3rem]" />
           Research & Reference
        </button>

        <button className={`${toggleFour ? "bg-blue" : ""} flex flex-col items-center justify-center  px-10 py-4 text-white font-semibold text-sm border border-border rounded-2xl`} onClick={showFour}>
            <img src={bookmark} alt="" className="w-[3rem]" />
            Project Collaboration
        </button>
      </div>
       {/* display */}
       <PersonalUse styles={`${toggleOne ? "flex" : "hidden"}`}  />
       <Design styles={`${toggleTwo ? "flex" : "hidden"}`}  />
       <Research styles={`${toggleThree ? "flex" : "hidden"}`} />
       <Project styles={`${toggleFour ? "flex" : "hidden"}`} />
    </section>
  )
}

export default Usecases
