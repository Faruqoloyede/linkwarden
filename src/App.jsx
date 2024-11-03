import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Company from './sections/Company'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
      <Company />
    </div>
  )
}

export default App