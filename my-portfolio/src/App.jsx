import React from 'react'
import Navbar from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import CustomCursor from './components/CustomCursor'


const App = () => {
  return (
    <div className='relative gradient text-white'>
      <CustomCursor />
      <ParticlesBackground />
      <Navbar />
    </div>
  )
}

export default App
