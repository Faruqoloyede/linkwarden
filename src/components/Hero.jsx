import { dashboard } from "../assets";
import styles from "../styles";

const Hero = () => {
  return (
    <section className="text-center">
      <span className="text-white rounded-full px-7 py-2 announce">Announcing Linkwarden v2.5!</span>
      <div className="my-6">
        <h1 className={`${styles.heading2}`}>Bookmark Preservation for<br/> Individuals and Teams</h1>
        <p className={`${styles.paragraph}`}>Linkwarden is an open-source collaborative bookmark manager to<br className="sm:block hidden" /> collect, organize and preserve webpages.</p>
        <div className="mt-5 flex items-center justify-center font-semibold  text-[16px]">
            <a href="#" className="bg-blue text-white px-6 py-3 rounded-full mx-3 login_btn">Start Free Trial</a>
            <a href="#" className="text-grey login_btn px-6 py-3 rounded-full">Star on Github</a>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <img src={dashboard} alt="dashboard" className="sm:w-[80%] w-[100%]" />
      </div>
    </section>
  )
}

export default Hero
