import { free } from "../constant"


const Free = () => {
  return (
    <div className="w-full text-center max-w-sm lg:max-w-full mx-auto flex flex-col gap-5 justify-between p-5 rounded-2xl border border-border h-auto">
      <div className="flex flex-col">
        <p className="text-icon">Self-Hosted</p>
        <p className="text-3xl text-white">Free</p>
      </div>
      <div className="h-[1px] bg-gradient"></div>
      {free.map((item, index)=>(
        <ul key={index} className="flex flex-col gap-1 text-white">
            <li className="flex items-start gap-2 text-left">
                <img src={item.icon} alt="icon" className="w-[2rem]" />
                {item.text}
            </li>
        </ul>
      ))}
      <div>
        <a href="" className="w-full border border-border mx-auto px-4 py-2 rounded-full text-white">Get Started</a>
      </div>
    </div>
  )
}

export default Free
