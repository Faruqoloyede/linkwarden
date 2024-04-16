import { dashboard } from "../assets";
import styles from "../styles";

const Hero = () => {
  return (
    <section className="text-center">
      <span className="text-white rounded-full px-7 py-2 announce">🎉️ Announcing  Linkwarden v2.5! 🚀</span>
      <div className="my-6">
        <h1 className={`${styles.heading2}`}>Bookmark Preservation for<br/> Individuals and Teams</h1>
        <p className={`${styles.paragraph}`}>Linkwarden is an open-source collaborative bookmark manager to<br className="sm:block hidden" /> collect, organize and preserve webpages.</p>
        <div className="mt-5 flex items-center justify-center font-semibold  sm:text-[16px] text-[13px]">
            <a href="#" className="bg-blue text-white px-6 py-3 rounded-full mx-3 login_btn">Start Free Trial</a>
            <a href="#" className="text-grey login_btn px-6 py-3 rounded-full flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" class="text-2xl mr-2"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>Star on Github</a>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <img src={dashboard} alt="dashboard" className="sm:w-[80%] w-[100%]" />
      </div>
    </section>
  )
}

export default Hero
