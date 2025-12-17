import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Projects from './Projects'
import Contact from './Contact' 
const Home = () => {
  return (
    <>
    
   
       <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>

    
   
    </>
  )
}

export default Home