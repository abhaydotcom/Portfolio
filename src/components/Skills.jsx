import React from "react";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section className="relative py-24 px-6 sm:px-20 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-blue-50/30 to-transparent dark:via-gray-900/50"></div>

      <h2 className="text-2xl mb-10   font-bold sm:text-6xl bg-linear-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight">
        My Toolbox
      </h2>

      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14">
        Technologies I work with every day to build fast, modern, and scalable
        applications.
      </p>

    <div 
    className="  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto max-w-5xl gap-6"
    >

    {skills.map((skill)=>(
        <div key={skill.name} 
        className="group relative flex flex-col items-center justify-center gap-3 rounded-xl bg-white/60
        p-5 dark:bg-gray-800/60 backdrop-blur-2xl shadow-md hover:shadow-blue-500/20 transition-all"
        >
            <div className="text-4xl">
                {skill.icon}

            </div>

            <p 
            className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors"
            >{skill.name}</p>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-cyan-400/10 to-blue-500/10 blur-lg -z-10"></div>

        </div>
        
        
    ))}

    </div>


    </section>
  );
};

export default Skills;
