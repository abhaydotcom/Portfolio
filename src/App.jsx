import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Home from "./pages/Home"






function App() {

  



  return (
    <>
    <div   className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">

      <Navbar/> 
      <Hero/>
      <Skills/>
      <Footer/>
    </div>
     
 
    </>
  )
}

export default App
