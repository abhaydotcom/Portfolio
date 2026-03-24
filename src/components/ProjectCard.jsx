import { useState } from "react"
import { motion } from 'framer-motion'
import { Pill } from "../pages/Projects"
import { Links } from "./Links"


export function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
    const EASE = [0.16, 1, 0.3, 1]
    const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
})

  return (
    <motion.article
      {...fade(index * 0.07)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-zinc-900 hover:border-white/[0.13] transition-colors duration-300"
    >
      <div className="relative overflow-hidden h-44">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.55, ease: EASE }}
        />
        <span className="absolute top-3 left-3 text-[9px] font-mono text-white/60 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
          {project.num}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5">
        <p className="text-[9px] font-mono tracking-widest uppercase text-zinc-600 mb-1.5">{project.tag}</p>
        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-zinc-300 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
          {project.title}
        </h3>
        <p className="text-xs text-zinc-500 leading-relaxed mb-3 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map(t => <Pill key={t} label={t} />)}
        </div>
        <Links demo={project.demo} github={project.github} />
      </div>
    </motion.article>
  )
}