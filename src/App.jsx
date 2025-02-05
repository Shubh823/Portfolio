import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Achievments from './componenets/Achievments'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Achievments/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}

export default App
