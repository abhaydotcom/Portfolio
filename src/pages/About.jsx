import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1]

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
})

const skills = ['Node.js', 'Express', 'MongoDB', 'React', 'TailwindCSS', 'Framer Motion']

const code = `const Abhay = {
  role: "MERN Stack Developer",
  skills: ["Node.js", "Express", "MongoDB",
           "React", "TailwindCSS", "Framer-Motion"],
  focus: "Scalable APIs & polished UI",
  loves: ["problem-solving", "system design", "clean code"],
  learning: "Cloud deployment & system optimization",
};`

export default function About() {
  const navigate = useNavigate()

  return (
    <section
      className="min-h-screen bg-zinc-950 px-4 sm:px-10 py-20 sm:py-28"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div className="mx-auto max-w-6xl">

        <motion.div {...fade()} className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-5 h-px bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
            About Me
          </span>
        </motion.div>

       

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-4">

     
          <div className="flex flex-col gap-4">

           
            <motion.div
              {...fade(0.1)}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-10"
            >
              <div className="space-y-5 text-sm sm:text-base text-zinc-500 leading-relaxed">
                <p>
                  I'm a{' '}
                  <span className="text-white font-medium">MERN Stack Developer</span>{' '}
                  who loves building clean server-side logic, secure APIs, and efficient data systems. I mostly work with{' '}
                  <span className="text-white font-medium">React, Node.js, Express, and MongoDB</span>{' '}
                  to create scalable architectures and great web UIs.
                </p>
                <p>
                  While backend is my main playground, I also enjoy crafting smooth, responsive interfaces with{' '}
                  <span className="text-white font-medium">React</span> and{' '}
                  <span className="text-white font-medium">TailwindCSS</span>.
                  Understanding both sides of the stack helps me build complete, well-structured applications.
                </p>
                <p>
                  Currently pursuing my{' '}
                  <span className="text-white font-medium">Bachelor's in Computer Applications</span>{' '}
                  at <span className="text-white font-medium">GNIOT</span>. I love solving real-world problems, exploring system design, and continuously leveling up.
                </p>
              </div>
            </motion.div>

            
            <motion.div
              {...fade(0.2)}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-zinc-950">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-[11px] font-mono text-zinc-600">about.js</span>
              </div>
              <pre
                className="p-5 sm:p-7 text-xs sm:text-sm leading-relaxed overflow-x-auto"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <code>
                  {code.split('\n').map((line, i) => {
                    const keyMatch = line.match(/^(\s*)(\w+)(:\s*)(.*)/)
                    if (keyMatch) {
                      return (
                        <div key={i}>
                          <span className="text-zinc-600">{keyMatch[1]}</span>
                          <span className="text-sky-400">{keyMatch[2]}</span>
                          <span className="text-zinc-600">{keyMatch[3]}</span>
                          <span className="text-emerald-400">{keyMatch[4]}</span>
                        </div>
                      )
                    }
                    return (
                      <div key={i}>
                        <span className="text-zinc-500">{line}</span>
                      </div>
                    )
                  })}
                </code>
              </pre>
            </motion.div>

          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">

            
            <motion.div
              {...fade(0.15)}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-8"
            >
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-5">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: 0.2 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.07] bg-zinc-950 text-zinc-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            
            <motion.div
              {...fade(0.2)}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-8"
            >
              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-600 mb-5">
                Currently
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: 'Studying', value: 'BCA @ GNIOT' },
                  { label: 'Building', value: 'Full-stack projects' },
                  { label: 'Learning', value: 'Cloud & system design' },
                  { label: 'Status', value: 'Open to opportunities' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">{label}</span>
                    <span className="text-xs text-zinc-300">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA card */}
            <motion.div
              {...fade(0.25)}
              className="rounded-2xl border border-white/[0.07] bg-zinc-900 p-6 sm:p-8 flex flex-col gap-4"
            >
              <p className="text-sm text-zinc-500 leading-relaxed">
                Interested in working together or just want to chat?
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/contact')}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-white text-zinc-900 text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors duration-200"
              >
                Let's connect <ArrowUpRight size={15} />
              </motion.button>
            </motion.div>

          </div>
        </div>

        <motion.div {...fade(0.35)} className="flex items-center gap-4 mt-14 sm:mt-20">
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">
            Always building, always learning
          </span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

      </div>
    </section>
  )
}