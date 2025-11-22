import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const social = [
    { icons: <Github size={22} />, href: "https://github.com/abhaydotcom" },
    { icons: <Linkedin size={22} />, href: "https://linkedin.com/in/abhaydotcom" },
    { icons: <Mail size={22} />, href: "mailto:abhaykrsingh194@gmail.com" }
  ]

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 py-10 mt-20 px-6 text-center">
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      
      {/* Social icons */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 py-8">
        {social.map((item, i) => (
          <Link
            key={i}
            to={item.href}
            className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icons}
          </Link>
        ))}
      </div>

      {/* Footer text */}
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base px-3 leading-relaxed">
        © {new Date().getFullYear()} Developed and maintained by <span className="font-semibold text-blue-500">Abhay Kumar Singh</span>
      </p>
    </footer>
  )
}

export default Footer
