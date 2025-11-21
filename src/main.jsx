import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    element:<><App/></>
  },
  {
    path:'/about',
    element:<><Navbar> </Navbar>  <About/> <Footer/></>
  },
  {
    path:'/projects',
    element:<><Navbar/><Projects/></>
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


createRoot(document.getElementById('root')).render(
  <StrictMode>
 
   <RouterProvider router={router}>
          

      </RouterProvider>
   
   
    
  </StrictMode>,
)
