import styles from "../styles"
import { add } from "../assets"
import { faq } from "../constant"
import { useState } from "react"




const Faq = () => {
    const [istoggle, setIstoggle] = useState(null)

    const toggle = (e)=>{
        if(istoggle == e){
            return setIstoggle(null)
        }
        setIstoggle(e)
    }

  return (
    <section className={`${styles.paddingY} text-center`}>
        <h1 className={`${styles.heading2}`}>Frequently Asked Questions</h1>
        <div className="pr-5 rounded-2xl border border-border bg-gradient-to-br from-[#a27dff29] via-transparent to-[#ffffff0a] p-2 mt-5">
            
            {faq.map((item, index, e)=>(
                <div className="p-5" key={index}>
                <div className="flex items-center cursor-pointer text-grey" onClick={()=> toggle(e)}>
                    <img src={add} className="w-[2rem]" alt="" />
                    <p className="text-grey font-semibold sm:text-[20px] text-[18px]">{item.question}</p>
                </div>
                <div className={`${istoggle == e ? "flex" : "hidden"} text-white text-left pt-3 pl-3 pb-3 leading-6`}>
                    <p>{item.answer}</p>
                </div>
                <div className={`${index=== faq.length -1 ? "" : "h-[1px] bg-grey mt-3"}`}></div>
            </div> 
            ))}
        </div>
    </section>
  )
}

export default Faq
