// import Hero from "./components/Hero"
// import Navbar from "./components/Navbar"
// import Partner from "./components/Partner"
import { Hero, Navbar, Partner, Features, Preserve, Share, Services, Usecases, Plan, Faq } from "./components"

import styles from "./styles"


const App = () => {
  return (
    <div className="sm:bg-primary bg-navbar w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
          <Navbar />
      </div>
      {/* HERO SECTION */}
      <div className={`${styles.boxWidth} ${styles.paddingX} py-20`}>
        <Hero/>
      </div>
      <div className={`${styles.boxWidth} ${styles.paddingX}`}>
        <Partner />
        <Features />
        <Preserve />
        <Share />
        <Services />
        <Usecases />
        <Plan />
        <Faq />
      </div>
    </div>
  )
}

export default App
