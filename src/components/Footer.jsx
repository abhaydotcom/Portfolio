import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const social=[
        {icons:<Github size={22} />, href: "https://github.com/abhaydotcom"},
        {icons:<Linkedin size={22} />, href:"https://linkedin.com/in/abhaydotcom"},
        {icons:<Mail size={22}/>,href:"mailto:abhaykrsingh194@gmail.com"}
    ]

  return (
    <footer className='relative border-t border-gray-200 dark:border-gray-800 py-10 text-center mt-20  '>

           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-px bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-60"></div>
        
        <div className='flex justify-center items-center gap-6 text-gray-400  p-10' >

            {
                social.map((icon,i)=>(
                    <div key={i}   className='hover:text-cyan-600 transition-all duration-300' >
                       <Link to={icon.href}>
                        {icon.icons}
                       </Link>
                    </div>
                ))
            }

        </div>

 <p className='text-gray-400 text-center '>
                  © {new Date().getFullYear()} developed and maintained by -Abhay kumar singh
            </p>

    </footer>
  )
}

export default Footer