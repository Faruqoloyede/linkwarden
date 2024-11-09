import clsx from 'clsx'
import React from 'react'
import { Element } from 'react-scroll'
import { useState } from 'react'
import { plans } from '../constant'
import CountUp from 'react-countup'
import Button from '../components/Button'
import { check } from '../assets'

const Pricing = () => {
    const [monthly, setMonthly] = useState(false)
  return (
    <section>
        <Element name='Pricing'>
            <div className="container">
                <div className='max-w-900  relative mx-auto bg-primary pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
                    <div className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-pb p-2 backdrop-blur-[6px] max-md:w-[310px]'>
                    <button className={clsx("pricing-head_btn", monthly && "text-white")} onClick={()=>setMonthly(true)}>Monthly</button>
                    <button className={clsx("pricing-head_btn" , !monthly && "text-grey")} onClick={()=> setMonthly(false)}>Yearly</button>
                    <div className={clsx('rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500', !monthly && "translate-x-full")} />
                    </div>
                    <h3 className='font-poppins font-semibold text-4xl max-mmd:text-3xl max-sm:text-2xl text-center my-10'>Pick the Right Plan for You</h3>
                    <div className='scroll-hide relative z-2 mt-12 flex items-start gap-5 max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
                        {plans.map((plan, index)=>(
                            <div key={plan.id} className={clsx("max-xl:min-w-80 h-auto border-2 p-6 rounded-[12px] border-pb mt-16 xl:w-[calc(33.33%+2px)]", index === 1 && ("h-auto -mt-5 g2 "))}>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3 className='text-xl font-normal font-poppins text-icon'>{plan.caption}</h3>
                                    <div className='relative z-2 flex items-center justify-center my-5'>
                                        <div className={clsx("text-[72px] font-bold leading-[84px] font-poppins flex items-center")}>${""}
                                            <CountUp 
                                                start={plan.monthly}
                                                end={monthly ? plan.monthly : plan.yearly}
                                                duration={0.4}
                                                useEasing={false}
                                                preserveValue
                                            />
                                        </div>
                                        <div className='relative font-poppins font-semibold'>{monthly ? "/mon" :"/year"}</div>
                                    </div>
                                    <div className='my-5'>
                                    <Button containerCLass={clsx("g2 border-2 border-pb", index === 1 && "g3 border-none")}>Get Started Now</Button>

                                    </div>
                                    <ul className='mx-auto space-y-4 xl:px-7'>
                                        {plan.feature.map((feature)=>(
                                            <li key={feature} className='relative flex items-center gap-5'>
                                                <img src={check} alt="check" className='size-10 object-contain' />
                                                <p className='flex-1'>{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {index === 1 && <p className='font-poppins font-normal text-[16px] text-center mt-9'>14-day free trial, cancel anytime.</p>}
                            </div>
                        ))}
                    </div>
                  
                </div>
            </div>
        </Element>
    </section>
  )
}

export default Pricing