import { cloud } from "../constant"

const Cloud = ({ isshowyear }) => {
  return (
    <div className="w-full text-center max-w-sm lg:max-w-full mx-auto flex flex-col gap-5 justify-between p-5 rounded-2xl border border-border h-auto border border-blue">
      <div className="flex flex-col">
        <p className="text-icon">Cloud</p>
        <p className="text-3xl text-white">{isshowyear}$ <span className="text-sm text-grey">/mo <br/>Per user</span> </p>
      </div>
      <div className="h-[1px] bg-gradient"></div>
      {cloud.map((item, index)=>(
        <ul key={index} className="flex flex-col gap-1 text-white">
            <li className="flex items-start gap-2 text-left">
                <img src={item.icon} alt="icon" className="w-[2rem]" />
                {item.text}
            </li>
        </ul>
      ))}
      <div>
        <p className="text-sm text-white mb-3">14-day free trial, cancel anytime.</p>
        <a href="" className="w-full border border-border mx-auto px-4 py-2 rounded-full text-white bg-blue border border-white">Start Free Trial</a>
      </div>
    </div>
  )
}

export default Cloud
