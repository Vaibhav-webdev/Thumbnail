import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AboutServices from './components/AboutServices'
import Projects from "./components/Projects"
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <AboutServices />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default page