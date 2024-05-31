
import { Hero, Navbar, Partner, Features, Preserve, Share, Services, Usecases, Plan, Faq, Footer } from "./components"

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
        <Footer />
      </div>
    </div>
  )
}

export default App
