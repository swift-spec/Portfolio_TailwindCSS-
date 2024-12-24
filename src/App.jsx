import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import ProjectComp from './components/ProjectComp'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="border-t border-violet-400 mx-16"></div>
    <Skills />
    <div className="border-t border-violet-400 mx-16"></div>
    <About />
    <div className="border-t border-violet-400 mx-16"></div>
    <ProjectComp />
    </>
  )
}

export default App