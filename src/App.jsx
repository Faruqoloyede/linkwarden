import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Sponsor from './sections/Sponsor'
import Organize from './sections/Organize'
import Features from './sections/Features'
import Plan from './sections/Plan'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Sponsor />
      <Organize/>
      <Features />
      <Plan />
    </div>
  )
}

export default App