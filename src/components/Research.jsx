import { research } from "../constant"

const Research = ({ styles }) => {
  return (
    <div className={`${styles} flex flex-wrap items-center justify-between gap-6 py-4 `}>

      {research.map((item)=>(
        <div key={item.id} className='flex items-center '>
            <div className=' flex items-center justify-center bg-service rounded-full border border-border p-3 mr-3 '>
                <img src={item.icon} className='w-[2rem]' />
            </div>
            <div>
                <p className='text-white sm:text-2xl text-[18px]'>{item.text}</p>
                <p className='text-sm text-grey max-w-[370px] sm:flex hidden'>{item.content}</p>
            </div>
      </div> 
      ))}
      
    </div>
  )
}

export default Research
