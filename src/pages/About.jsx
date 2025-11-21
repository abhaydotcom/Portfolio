import React from 'react'

const About = () => {
  return (
    <div
    className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans py-40 px-6 sm:px-12 lg:px-20  overflow-hidden "
    >
       <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-linear-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>

      
      <h1 className=' font-bold text-5xl text-center'>
        About
      </h1>
      
      
      </div>
  )
}

export default About