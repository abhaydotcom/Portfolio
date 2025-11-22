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
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Framer Motion", icon: <SiFramer /> },
];

export default function Skills() {
  return (
    <section className="relative py-10 px-4 sm:px-8 lg:px-20 text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-blue-50/30 to-transparent dark:via-gray-900/50" />

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-blue-700 text-transparent bg-clip-text tracking-tight">
        My Toolbox
      </h2>

      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 px-2">
        Technologies I work with every day to build fast, modern, and scalable
        applications.
      </p>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              tabIndex={0}
              role="button"
              aria-label={skill.name}
              className="group relative flex flex-col items-center justify-center gap-2 rounded-xl p-3 sm:p-4 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-[1.03] transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <div className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl text-current text-transparent group-hover:text-blue-500">
                {React.cloneElement(skill.icon, {
                  className:
                    skill.name === "JavaScript"
                      ? "text-yellow-400"
                      : skill.name === "React"
                      ? "text-cyan-400"
                      : skill.name === "TailwindCSS"
                      ? "text-sky-400"
                      : skill.name === "Node.js"
                      ? "text-green-500"
                      : skill.name === "MongoDB"
                      ? "text-green-400"
                      : skill.name === "HTML"
                      ? "text-orange-500"
                      : skill.name === "CSS"
                      ? "text-blue-500"
                      : "text-gray-300",
                })}
              </div>

              <p className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-200 group-hover:text-blue-500 transition-colors">
                {skill.name}
              </p>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-cyan-400/8 to-blue-500/8 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
