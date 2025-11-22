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
import {AnimatePresence, motion } from "framer-motion"
import Layout from "./components/layout"






// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<><Navbar></Navbar>
//     <motion.div {...pageTransition}
//     ><Home/></motion.div>
//     <Footer/></>
//   },
//   {
//     path:'/about',
//     element:<><Navbar> </Navbar>  <motion.div {...pageTransition}
//     ><About/></motion.div><Footer/> </>
//   },
//   {
//     path:'/projects',
//     element:<><Navbar/>
//      <motion.div {...pageTransition}
//     ><Projects/></motion.div>
//     <Footer/></>
//   },
//   {
//     path:'/contact',
//     element:<><Navbar></Navbar>
//     <motion.div {...pageTransition}
//     ><Contact/></motion.div>
    
//     <Footer/></>
//   },
//   {
//     path:'*',
//     element:<>
//      <motion.div {...pageTransition}
//     ><NotFound/></motion.div></>
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },        // default child route
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);




function App() {

  



  return (
    <>
    <div  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans" >
      
      <RouterProvider router={router}/>
      

    
    </div>
     
 
    </>
  )
}

export default App
