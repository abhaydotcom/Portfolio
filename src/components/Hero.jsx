import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
   <section
   className='relative flex flex-col items-center py-80 justify-center text-center min-h-screen'
   >


     <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-linear-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>


    <h1 className='text-4xl  font-extrabold sm:text-6xl bg-linear-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight'>Hey, I'm Abhay kumar singh</h1>
    <p
    className='mt-5 text-lg leading-relaxed max-w-2xl sm:text-xl text-gray-600 dark:text-gray-300' 
    >A MERN Stack Developer passionate about crafting
        {" "}
        <span className='font-semibold text-blue-500'>clean</span>,{" "}
        <span className='font-semibold text-cyan-500'>scalable</span> web apps — blending logic and design.
    </p>

    <div className='flex gap-5 mt-5 relative z-10 flex-wrap justify-center'>

        <div className=' mx-4 px-7 py-4 rounded-lg font-medium text-white  bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg transition-all duration-300 shadow-blue-500/30'>
            <Link to="/projects">View Work</Link>
            
        </div>

        <div className='border px-7 py-4 rounded-lg font-medium   border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300'>
            <Link to='/contact'>Contact Me</Link>
        </div>

    </div>


   </section>
  )
}

export default Hero