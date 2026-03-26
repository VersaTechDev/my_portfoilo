import { useState } from 'react'

import  Hero  from './section/Hero.jsx'
import Projects from './section/Projects'
import Experience from './section/Experience'
import About from './section/About'
import Testimonials from './section/Testimonials'
import Contact from './section/Contact'
import Navbar from './layout/Navbar.jsx'
import Footer from './layout/Footer.jsx'

function App() {
  

  return (
    <>
     <div className='min-h-screen overflow-x-hidden'>
      <Navbar></Navbar>
      <main>
        <Hero />
        <About></About>
        <Projects></Projects>
        {/* <Experience></Experience> */}
        {/* <Testimonials></Testimonials> */}
        <Contact></Contact>
        
      </main>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App
