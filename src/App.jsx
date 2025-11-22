import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Home from "./pages/Home"
import About from './pages/About'
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"




const router=createBrowserRouter([
  {
    path:'/',
    element:<><Navbar></Navbar><Home/><Footer/></>
  },
  {
    path:'/about',
    element:<><Navbar> </Navbar>  <About/><Footer/> </>
  },
  {
    path:'/projects',
    element:<><Navbar/><Projects/><Footer/></>
  },
  {
    path:'/contact',
    element:<><Navbar></Navbar><Contact/><Footer/></>
  },
  {
    path:'*',
    element:<><NotFound/></>
  }
])




function App() {

  



  return (
    <>
    <div  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans" >
       <RouterProvider router={router}>
          
     

      </RouterProvider>

    
    </div>
     
 
    </>
  )
}

export default App
