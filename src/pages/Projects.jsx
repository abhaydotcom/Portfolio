import { ExternalLink, Github } from 'lucide-react'
import React from 'react'


const project=[
  { title: "Student Admin Panel",
    description:
      "A school website built with React, for showcasing the school in the upper level.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762506417/project%20school.jpg",
    demo: "https://rhacademy.in",
    github: "https://github.com/fahimlisl/rhacademy",
  },
    {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio — built with React, Tailwind, Express, Framer Motion, and MongoDB. Features animations, dark mode, and backend integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762710961/myport.jpg",
    demo: "https://fahim.in",
    github: "https://github.com/fahimlisl/myPortfolio",
  },
    {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio — built with React, Tailwind, Express, Framer Motion, and MongoDB. Features animations, dark mode, and backend integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762710961/myport.jpg",
    demo: "https://fahim.in",
    github: "https://github.com/fahimlisl/myPortfolio",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio — built with React, Tailwind, Express, Framer Motion, and MongoDB. Features animations, dark mode, and backend integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762710961/myport.jpg",
    demo: "https://fahim.in",
    github: "https://github.com/fahimlisl/myPortfolio",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio — built with React, Tailwind, Express, Framer Motion, and MongoDB. Features animations, dark mode, and backend integration.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image:
      "https://res.cloudinary.com/dkrwq4wvi/image/upload/v1762710961/myport.jpg",
    demo: "https://fahim.in",
    github: "https://github.com/fahimlisl/myPortfolio",
  },
  
]

const Projects = () => {
  
  return (
   <section  
   className='relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans py-40 px-6 sm:px-12 lg:px-20  overflow-hidden  '
   >

      <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-linear-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>



      <h1 className='font-bold text-cyan-500 text-5xl text-center'>
        Projects
      </h1>

      <p 
      className='max-w-xl mx-auto text-gray-700 dark:text-gray-300 mt-10 text-center text-lg'
      >
        A selection of projects that showcase my skills in building modern, scalable, and visually appealing full-stack applications.
      </p>

      <div 
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10 '
      >

        {
          project.map((card,i)=>(
            <div 
            key={i}
            className='group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-blue-500/20 transition-all '
            > 
              <div  
              className='h-52 overflow-hidden'
              >
                <img
                src={card.image}
                alt={`${card.title} preview`}
                loading='lazy'
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
              </div>


              <div
              className='p-6 z-10'>

                  <h3 
                  className='font-bold text-xl py-2'
                  >
                    {card.title}
                  </h3>

                  <p
                  className="text-gray-600 dark:text-gray-300 text-sm mb-4"
                  >
                    {card.description}
                  </p>

                  <div 
                  className='flex flex-wrap gap-2 mb-4 '
                  >

                    {card.tech.map((item,i)=>(
                      <span 
                      key={i}

                      className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-cyan-400 rounded-full"
                      >
                        {item}

                      </span>
                    ))}
                  </div>


                     <div className="flex gap-4">

                {card.demo ? (
                  <a
                    href={card.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-cyan-400 hover:underline hover:scale-105 transition-transform duration-300"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                ) : (
                  <p className="text-gray-500 text-xs italic">Demo coming soon</p>
                )}


                {card.github ? (
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:scale-105 transition-all duration-300"
                  >
                    <Github size={16} /> Code
                  </a>
                ) : (
                  <p className="text-gray-500 text-xs italic">Private</p>
                )}
              </div>

              </div>

            </div>
          ))
        }

      </div>


   </section>
  )
}

export default Projects