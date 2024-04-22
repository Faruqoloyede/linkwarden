import styles from "../styles"
import Button from "./Button"
import PersonalUse from "./PersonalUse"


const Usecases = () => {

  return (
    <section className={`${styles.paddingY}`}>
      <h1 className='sm:text-4xl text-3xl font-bold text-white text-center mb-3'>Exploring the Use Cases</h1>
      <div className="hidden sm:flex items-center justify-evenly w-100 py-5">
        <div className="bg-blue px-[50px] py-6 text-white border border-border rounded-2xl cursor-pointer ">
        <svg  width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 256 256" class="mx-auto mb-2"><path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg>
            <Button text= "Personal Use" />
        </div>

        <div className=" px-[50px] py-6 text-white border border-border rounded-2xl cursor-pointer">
        <svg width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 256 256" class="mx-auto mb-2"><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path></svg>
            <Button text= "Design Inpirations" />
        </div>

        <div className="px-[50px] py-6 text-white border border-border rounded-2xl cursor-pointer ">
        <svg  width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 256 256" class="mx-auto mb-2"><path d="M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z"></path></svg>
            <Button text= "Research & Reference" />
        </div>

        <div className="px-[50px] py-6 text-white border border-border rounded-2xl cursor-pointer ">
        <svg width="2.5rem" height="2.5rem" fill="currentColor" viewBox="0 0 256 256" class="mx-auto mb-2"><path d="M160,56v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h40A8,8,0,0,1,160,56Zm64-8H184a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h40a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48Zm0,80H184a8,8,0,0,0-8,8v40a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V136A8,8,0,0,0,224,128ZM80,48H40a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V56A8,8,0,0,0,80,48Zm0,80H40a8,8,0,0,0-8,8v72a16,16,0,0,0,16,16H72a16,16,0,0,0,16-16V136A8,8,0,0,0,80,128Z"></path></svg>
            <Button text= "Projet Collaboration" />
        </div>
       
      </div>
      {/* displays */}
      <div>
        <PersonalUse />
      </div>
    </section>
  )
}

export default Usecases
