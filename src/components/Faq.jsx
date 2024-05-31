import styles from "../styles"
import { add } from "../assets"
import { close } from "../assets"
import { faq } from "../constant"
import { useState } from "react"
import Getstarted from "./Getstarted"

const Faq = () => {
    const [istoggle, setIstoggle] = useState(null)

    const toggle = (i)=>{
        if(istoggle == i){
            return setIstoggle(null)
        }
        setIstoggle(i)
    }

  return (
    <section className={`${styles.paddingY} text-center`}>
        <h1 className={`${styles.heading2}`}>Frequently Asked Questions</h1>
        <div className="pr-5 rounded-2xl border border-border bg-gradient-to-br from-[#a27dff29] via-transparent to-[#ffffff0a] p-3 mt-5 ">
            
        {faq.map((item, i, index)=>(
                <div className="p-5">
                    <div className="flex items-center cursor-pointer text-grey" onClick={()=> toggle(i)}>
                        <img src={istoggle === i ? close : add} alt="" className="w-[30px] pr-3" />
                        <h2 className="text-grey font-semibold sm:text-[20px] text-[18px]" >{item.question}</h2>
                        {/* <span>{istoggle === i ? "-" : "+"}</span> */}
                    </div>
                    <div className={`${istoggle === i ? "flex" : "hidden"} text-white text-left pt-3 pl-3 pb-3 leading-6 duration-20`}>{item.answer}</div>
                    <div className={`${index === faq.length -1 ? "" : "h-[1px] bg-grey mt-3"}`}></div>
                </div>
            ))}
        </div>
        <p className="text-grey pt-3">For any other questions, feel free to reach out to us at <a href="support@linkwarden.app.">support@linkwarden.app.</a></p>
        <div className={styles.paddingY}>
            <Getstarted />
        </div>
    </section>
  )
}

export default Faq
