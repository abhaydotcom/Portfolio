import {
  SiCss3, SiExpress, SiFramer, SiGithub,
  SiHtml5, SiJavascript, SiMongodb,
  SiNodedotjs, SiReact, SiTailwindcss,
  SiTypescript, SiRedux, SiMysql, SiPrisma, SiShadcnui,
} from "react-icons/si"
import { motion } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1]

const skills = [
  { name: "JavaScript",    icon: SiJavascript,  color: "#F7DF1E", bg: "rgba(247,223,30,0.08)"   },
  { name: "TypeScript",    icon: SiTypescript,  color: "#3178C6", bg: "rgba(49,120,198,0.08)"   },
  { name: "React",         icon: SiReact,       color: "#61DAFB", bg: "rgba(97,218,251,0.08)"   },
  { name: "Redux",         icon: SiRedux,       color: "#764ABC", bg: "rgba(118,74,188,0.08)"   },
  { name: "Tailwind CSS",  icon: SiTailwindcss, color: "#38BDF8", bg: "rgba(56,189,248,0.08)"   },
  { name: "ShadCN UI",     icon: SiShadcnui,    color: "#FFFFFF", bg: "rgba(255,255,255,0.06)"  },
  { name: "Node.js",       icon: SiNodedotjs,   color: "#6CC24A", bg: "rgba(108,194,74,0.08)"   },
  { name: "Express",       icon: SiExpress,     color: "#EEEEEE", bg: "rgba(238,238,238,0.06)"  },
  { name: "MongoDB",       icon: SiMongodb,     color: "#47A248", bg: "rgba(71,162,72,0.08)"    },
  { name: "MySQL",         icon: SiMysql,       color: "#4479A1", bg: "rgba(68,121,161,0.08)"   },
  { name: "Prisma",        icon: SiPrisma,      color: "#2D3748", bg: "rgba(100,130,160,0.08)"  },
  { name: "HTML5",         icon: SiHtml5,       color: "#E34F26", bg: "rgba(227,79,38,0.08)"    },
  { name: "CSS3",          icon: SiCss3,        color: "#1572B6", bg: "rgba(21,114,182,0.08)"   },
  { name: "GitHub",        icon: SiGithub,      color: "#FFFFFF", bg: "rgba(255,255,255,0.06)"  },
  { name: "Framer Motion", icon: SiFramer,      color: "#e2ff5d", bg: "rgba(226,255,93,0.08)"   },
]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
})

function SkillCard({ skill, index }) {
  const Icon = skill.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.05, duration: 0.6, ease: EASE }}
      whileHover="hovered"
      className="group relative flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5 cursor-default rounded-2xl border border-white/5"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: skill.bg }}
        initial={{ opacity: 0 }}
        variants={{ hovered: { opacity: 1 } }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ border: `1px solid ${skill.color}` }}
        initial={{ opacity: 0 }}
        variants={{ hovered: { opacity: 0.25 } }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        variants={{ hovered: { scale: 1.18, y: -2 } }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10 text-2xl sm:text-3xl"
        style={{ color: skill.color }}
      >
        <motion.div variants={{ hovered: { filter: `drop-shadow(0 0 10px ${skill.color}80)` } }} transition={{ duration: 0.3 }}>
          <Icon />
        </motion.div>
      </motion.div>
      <p className="relative z-10 text-[10px] sm:text-xs font-semibold tracking-wide uppercase text-white/40 group-hover:text-white/90 transition-colors duration-300"
        style={{ fontFamily: "'DM Mono', monospace" }}>
        {skill.name}
      </p>
    </motion.div>
  )
}

function Marquee() {
  const items = [...skills, ...skills]
  return (
    <div className="relative overflow-hidden w-full mt-10 sm:mt-14">
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #08080d, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #08080d, transparent)" }} />
      <motion.div
        className="flex gap-2 sm:gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {items.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={`${s.name}-${i}`}
              className="flex items-center gap-2 px-3 py-2 flex-shrink-0 rounded-full border border-white/[0.06]"
              style={{ background: "rgba(255,255,255,0.025)" }}>
              <span style={{ color: s.color, fontSize: "13px" }}><Icon /></span>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-white/30 whitespace-nowrap"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                {s.name}
              </span>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-10 overflow-hidden"
      style={{ background: "#08080d", fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div className="relative z-10 mx-auto max-w-5xl">

        <motion.div {...fade()} className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-5 h-px bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">Stack / Toolbox</span>
        </motion.div>

        <div className="mb-12 sm:mb-16">
          <motion.h2
            {...fade(0.05)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Tools I use<br />
            <span className="text-zinc-700">every day.</span>
          </motion.h2>
          <motion.p
            {...fade(0.15)}
            className="mt-4 text-sm sm:text-base text-white/35 max-w-sm leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Technologies I reach for to ship{" "}
            <span className="text-white/60">modern</span> and{" "}
            <span className="text-white/60">scalable</span> applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        <Marquee />

        <motion.div {...fade(0.4)} className="flex items-center gap-4 mt-10 sm:mt-14">
          <span className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">
            {skills.length} technologies
          </span>
          <span className="flex-1 h-px bg-white/[0.05]" />
        </motion.div>

      </div>
    </section>
  )
}