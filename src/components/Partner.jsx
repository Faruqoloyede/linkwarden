import { google, microsoft, amazon, bytedance, salesforce } from "../assets"
import styles from "../styles"

const Partner = () => {
  return (
    <section className="text-center">
      <p className="text-white font-semibold text-[20px] mb-6">Loved by thousands at the world's<br /> most innovative companies</p>
      <div className="flex flex-row items-center justify-between flex-wrap sm:mb-20 mb-6 img">
        <img src={microsoft} alt="microsoft" className="sm:w-[180px] w-[120px]" />
        <img src={google} alt="google" className="sm:w-[180px] w-[120px]" />
        <img src={amazon} alt="amazon" className="sm:w-[180px] w-[120px]" />
        <img src={bytedance} alt="bytedance" className="sm:w-[180px] w-[120px]" />
        <img src={salesforce} alt="salesforce" className="sm:w-[180px] w-[120px]" />
      </div>
    </section>
  )
}

export default Partner
