import styles from "../styles"
import { service } from "../constant"

const Services = () => {
  return (
    <section className={`${styles.paddingY}`} >
      <h1 className={`${styles.heading2} text-center`}>Hold on, there's more!</h1>
      <div className="flex flex-wrap sm:justify-start justify-center w-full my-5 gap-3">
      
        {service.map((item, index)=>(
           <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]" key={index}>
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <img src={item.icon}  className="w-[4rem]" />
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
            <p className="text-[16px]">{item.text}</p>
          </div>   
        </div> 
        ))}

      </div>
    </section>
  )
}

export default Services
