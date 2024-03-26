import Navbar from "./components/Navbar"
import styles from "./styles"


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.boxWidth}`}>
          <Navbar />
      </div>
    </div>
  )
}

export default App
