import { useState } from "react"
import { fade, Pill } from "../pages/Projects"
import { Links } from "./Links"
import { motion } from 'framer-motion'

export function FeaturedCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
    const EASE = [0.16, 1, 0.3, 1]

  return (
    <motion.article
      {...fade(index * 0.1)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-zinc-900 hover:border-white/[0.13] transition-colors duration-300"
    >
      <div className="relative overflow-hidden h-52 sm:h-64 lg:h-auto min-h-[220px]">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover opacity-90"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-[10px] font-mono text-white/60 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
            {project.num}
          </span>
          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/20">
            Featured
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-2">{project.tag}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-zinc-300 transition-colors duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map(t => <Pill key={t} label={t} />)}
          </div>
        </div>
        <Links demo={project.demo} github={project.github} large />
      </div>
    </motion.article>
  )
}
