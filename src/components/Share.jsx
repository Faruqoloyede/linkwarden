import { collaborate } from "../assets";

const Share = () => {
  return (
    <section className="sm:py-[200px] py-16">
       <div className="flex flex-wrap items-center justify-between gap-10 relative">
        <div>
            <h3 className="text-white font-bold text-3xl mb-3">Preserve Webpages</h3>
            <ul className="list-none">
              <li className="flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="text-2xl text-secondary"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" className="text-icon text-2xl"></path></svg>
              <p className="text-white ml-2">Collect webpages and bookmarks from any browser.</p>
              </li>
              <li className="flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="text-2xl text-secondary"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" className="text-icon text-2xl"></path></svg>
              <p className="text-white ml-2">Safeguard your webpages against <a href="#" className="underline">Link Rot.</a></p>
              </li>
              <li className="flex items-center py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="text-2xl text-secondary"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" className="text-icon text-2xl"></path></svg>
              <p className="text-white ml-2">Download your archived webpages.</p>
              </li>
            </ul>
        </div>
        <video loop muted autoPlay className="rounded-3xl border border-grey max-w-xl mx-auto w-full z-10" id="vid">
          <source src={collaborate} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default Share
