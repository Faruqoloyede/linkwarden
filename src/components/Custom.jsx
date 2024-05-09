import { custom } from "../constant"

const Custom = () => {
  return (
    <div className="w-full text-center max-w-sm lg:max-w-full mx-auto flex flex-col gap-5 justify-between p-5 rounded-2xl border border-border h-auto ">
      <div className="flex flex-col">
        <p className="text-icon">Custom</p>
        <p className="text-3xl text-white">Contact Us</p>
      </div>
      <div className="h-[1px] bg-gradient"></div>
      {custom.map((item, index)=>(
        <ul key={index} className="flex flex-col gap-1 text-white">
            <li className="flex items-start gap-2 text-left">
                <img src={item.icon} alt="icon" className="w-[2rem]" />
                {item.text}
            </li>
        </ul>
      ))}
      <div>
        <a href="" className="w-full border border-border mx-auto px-4 py-2 rounded-full text-white">Start Free Trial</a>
      </div>
    </div>
  )
}

export default Custom
