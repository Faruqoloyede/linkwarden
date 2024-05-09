import styles from "../styles"
import Cloud from "./Cloud"
import Custom from "./Custom"
import Free from "./Free"
import { useState } from "react"

const Plan = () => {
  const [ismonth, setMonth] = useState(true);
  const [isYear, setYear] = useState(false);

  const showMonth = ()=>{
    setMonth(true)
    setYear(false)
  }

  const showyear = ()=>{
    setMonth(false)
    setYear(true)
  }
  
  return (
    <section className={`${styles.paddingY} text-center`}>
      <h1 className={`${styles.heading2}`}>Pick the Right Plan for You</h1>
      <div className="flex items-center justify-center gap-3 border border-border w-72 mx-auto relative p-1 rounded-full text-white mt-10 mb-5">
        <button className={`${ismonth ? "bg-blue" : ""} w-full duraion-75 text-sm rounded-full p-1 hover:opacity-80 `} onClick={showMonth}>
            <p>Monthly</p>
        </button>
        <button className={`${isYear ? "bg-blue" : ""} w-full duraion-75 text-sm rounded-full p-1 hover:opacity-80`} onClick={showyear}>
            <p>Yearly</p>
        </button>
        <div className="absolute -top-3 -right-4 bg-red text-sm px-1 text-white rounded-md rotate-[22deg]">
        25% off
      </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Free />
        <Cloud isshowyear={`${isYear ? "3" : "4"}`} />
        <Custom />
      </div>
    </section>
  )
}

export default Plan
