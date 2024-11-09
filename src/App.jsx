import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Sponsor from './sections/Sponsor'
import Organize from './sections/Organize'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import NewsLetter from './sections/NewsLetter'
import Footer from './sections/Footer'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Sponsor />
      <Organize/>
      <Features />
      <Pricing />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App