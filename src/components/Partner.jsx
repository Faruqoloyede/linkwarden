import { google, microsoft, amazon, bytedance, salesforce } from "../assets"

const Partner = () => {
  return (
    <section className="text-center">
      <p className="text-white font-semibold text-[20px]">Loved by thousands at the world's<br /> most innovative companies</p>
      <div>
        <img src={microsoft} alt="microsoft" />
        <img src={google} alt="google" />
        <img src={amazon} alt="amazon" />
        <img src={bytedance} alt="bytedance" />
        <img src={salesforce} alt="salesforce" />
      </div>
    </section>
  )
}

export default Partner
