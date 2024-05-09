import { collaborate } from "../assets";
import { share } from "../constant";

const Share = () => {
  return (
    <section className="sm:py-[200px] py-16">
       <div className="flex flex-wrap items-center justify-between gap-10 relative">
        <div>
            <h3 className="text-white font-bold text-3xl mb-3">Collaborate and Share</h3>
            {share.map((item, index)=>(
              <ul className="list-none" key={index}>
              <li className="flex items-center py-2">
              <img src={item.icon} className="w-[2rem]" />
              <p className="text-white ml-2">{item.text}</p>
              </li>
            </ul> 
            ))}
        </div>
        <video loop muted autoPlay className="rounded-3xl border border-grey max-w-xl mx-auto w-full z-10" id="vid">
          <source src={collaborate} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Share
