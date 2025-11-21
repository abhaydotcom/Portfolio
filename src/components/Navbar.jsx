import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const navLinks=[
        {name:"Home",path:'/'},
        {name:"Projects",path:'/projects'},
        {name:"About",path:'/about'},
        {name:"Contact",path:'/contact'},
    ]

    const location=useLocation();
    

  return (
    <nav className='fixed top-8
     left-0 w-full z-50 '>
        <div className='bg-gray-800 text-white flex justify-between mx-auto py-3 px-6 items-center max-w-6xl rounded-4xl border border-sky-600'>
           <div className=' flex justify-center items-center gap-2 hover:opacity-80 transition-all cursor-pointer   '>
             <Link to='/'>
             <span className='text-xl font-bold  text-cyan-400'>
                &lt;/&gt;
            </span>
             </Link>
            <h1 className='text-2xl bg-linear-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight'>Abhay.in</h1>
           </div>

           <div  >
            <div className=' hidden md:flex justify-centre items-center gap-8 text-gray-700 dark:text-gray-200 '>
                {navLinks.map((e)=>(
                    <div key={e.name} className='relative group'>
                        <Link
                        to={e.path}
                        className={`hover:text-blue-500 transition-colors text-md font-semibold  ${
                  location.pathname === e.path
                    ? "text-blue-500 font-semibold"
                    : ""
                }`}
                        >
                        {e.name}
                        </Link>
                         <span
                className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${
                  location.pathname === e.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

                    </div>

                ))}
            </div>
           </div>
        </div>

    </nav>
  )
}

export default Navbar