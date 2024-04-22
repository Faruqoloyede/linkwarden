import styles from "../styles"

const Services = () => {
  return (
    <section className={`${styles.paddingY}`} >
      <h1 className={`${styles.heading2} text-center`}>Hold on, there's more!</h1>
      <div className="flex flex-wrap sm:justify-start justify-center w-full my-5 gap-3">
        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Open Source, Self-Hostable</h4>
            <p className="text-[16px]">We published our entire source code to GitHub for transparency and trust.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72Zm8,120a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Responsive Design</h4>
            <p className="text-[16px]">Designed for every screen size, from widescreen monitors down to smartphones.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M235.33,104l-53.47,53.65c4.56,12.67,6.45,33.89-13.19,60A15.93,15.93,0,0,1,157,224c-.38,0-.75,0-1.13,0a16,16,0,0,1-11.32-4.69L96.29,171,53.66,213.66a8,8,0,0,1-11.32-11.32L85,159.71l-48.3-48.3A16,16,0,0,1,38,87.63c25.42-20.51,49.75-16.48,60.4-13.14L152,20.7a16,16,0,0,1,22.63,0l60.69,60.68A16,16,0,0,1,235.33,104Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Pin your Favorite links</h4>
            <p className="text-[16px]">Pin your favorite webpages to the dashboard for easy access anytime.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm-34.34,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Privacy Friendly</h4>
            <p className="text-[16px]">Privacy is a fundamental human right. We won't sell your data to third parties.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h72a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm88,48H40a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm109.66,2.34L217.36,166A40,40,0,1,0,206,177.36l20.3,20.3a8,8,0,0,0,11.32-11.32Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Powerful Search</h4>
            <p className="text-[16px]">You can search and filter all your curated contents across all your collections effortlessly.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M165.78,224H208a16,16,0,0,0,16-16V170.35A8,8,0,0,0,212.94,163a23.37,23.37,0,0,1-8.94,1.77c-13.23,0-24-11.1-24-24.73s10.77-24.73,24-24.73a23.37,23.37,0,0,1,8.94,1.77A8,8,0,0,0,224,109.65V72a16,16,0,0,0-16-16H171.78a35.36,35.36,0,0,0,.22-4,36,36,0,0,0-72,0,35.36,35.36,0,0,0,.22,4H64A16,16,0,0,0,48,72v32.22a35.36,35.36,0,0,0-4-.22,36,36,0,0,0,0,72,35.36,35.36,0,0,0,4-.22V208a16,16,0,0,0,16,16h42.22"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Browser Extension</h4>
            <p className="text-[16px]">Collect webpages directly from your browser with our open-source extension.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg  width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Bulk Actions</h4>
            <p className="text-[16px]">Edit or delete multiple items at once easily.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M42.34,85.66a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,88,48V72H208a8,8,0,0,1,0,16H88v24a8,8,0,0,1-13.66,5.66Zm171.32,84.68-32-32A8,8,0,0,0,168,144v24H48a8,8,0,0,0,0,16H168v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,213.66,170.34Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Import & Export</h4>
            <p className="text-[16px]">You can import and export your bookmarks easily from the settings.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
          <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M82.34,117.66A8,8,0,0,1,88,104h32V40a8,8,0,0,1,16,0v64h32a8,8,0,0,1,5.66,13.66l-40,40a8,8,0,0,1-11.32,0ZM216,144a8,8,0,0,0-8,8v56H48V152a8,8,0,0,0-16,0v56a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A8,8,0,0,0,216,144Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Installable PWA for Mobile</h4>
            <p className="text-[16px]">App-like experience across devices with PWA support, ensuring optimal performance and accessibility for all users.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
         <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M160,16A80.07,80.07,0,0,0,83.91,120.78L26.34,178.34A8,8,0,0,0,24,184v40a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A80,80,0,1,0,160,16Zm20,76a16,16,0,1,1,16-16A16,16,0,0,1,180,92Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Secure API Integration</h4>
            <p className="text-[16px]">Connect and secure your integrations using access tokens to create custom solutions and automate with ease.</p>
          </div>   
        </div>

        <div className="bg-service flex flex-col items-center justify-center text-white p-6 border border-border rounded-xl max-w-[370px]">
          <div className="bg-blue p-2 w-fit rounded-2xl mb-3">
         <svg width="4em" height="4em" fill="currentColor" viewBox="0 0 256 256"><path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.82-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM116.69,80H74.36L40,114.34l37.15,5.18ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path></svg>
          </div>
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">And Many More Features...</h4>
            <p className="text-[16px]">We're constantly improving and got tons of updates planned, some are outlined in our</p>
          </div>   
        </div>

      </div>
    </section>
  )
}

export default Services
