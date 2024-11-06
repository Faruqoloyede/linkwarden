import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Sponsor from './sections/Sponsor'
import Organize from './sections/Organize'


const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Sponsor />
      <Organize/>
    </div>
  )
}

export default App