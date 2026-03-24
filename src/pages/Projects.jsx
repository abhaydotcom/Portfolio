
import { motion } from 'framer-motion'

import bussinesPage from '../../public/BusinesLandingPage.jpg'
import Blogz from '../../public/Blogz.jpg'
import foodiecart from '../../public/foodiecart.jpg'
import Movieflix from '../../public/Movieflix.jpg'
import WeatherWeb from '../../public/WeatherWeb.jpg'
import chatify from '../../public/image.png'
import DashboardPage from "../../public/DashboardPage.jpg"
import prepPulse1 from "../../public/prepPulseai1.jpg"
import { ProjectCard } from '../components/ProjectCard'
import { Links } from '../components/Links'
import { FeaturedCard } from '../components/FeaturedCard'

const EASE = [0.16, 1, 0.3, 1]

const projects = [
  {
    title: "PrepPulse AI",
    tag: "AI · Full Stack",
    description: "AI-powered resume analyzer that matches resumes with job descriptions, generates interview questions, identifies skill gaps, and creates ATS-friendly PDFs using Gemini API and Puppeteer.",
    tech: ["React", "MongoDB", "Express", "Node.js", "TailwindCSS", "Puppeteer", "Gemini API"],
    image: prepPulse1,
    demo: "https://preppulseaiweb.vercel.app/",
    github: "https://github.com/abhaydotcom/Ai-resume-generation",
    featured: true,
  },
  {
    title: "Job Tracker",
    tag: "Dashboard · TypeScript",

    description: "A job application tracker where users organize applications into stages — Wishlist, Applied, Interviewing, Offer, and Rejected. Built with Next.js, React, TypeScript, and TailwindCSS.",
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "ShadCN"],
    image: DashboardPage,
    demo: "https://jobtrackerweb.vercel.app/",
    github: "https://github.com/abhaydotcom/Job-Tracker",
    featured: true,
  },
  {
    title: "Business Landing Page",
    tag: "Frontend · Animation",

    description: "A Business Solutions Landing Page with React, TailwindCSS, Framer Motion, SwiperJS, and React Icons delivering a modern, responsive, and engaging experience.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: bussinesPage,
    demo: "https://businesslandingvite.vercel.app",
    github: "https://github.com/abhaydotcom/BusinessLandingPage",
  },
  {
    title: "Full Stack Blogz",
    tag: "MERN · Blog",
  
    description: "A feature-rich MERN blogging platform with an intuitive user experience, Redux state management, and a comprehensive content management flow.",
    tech: ["React", "Node", "Express", "Redux", "MongoDB", "Tailwind"],
    image: Blogz,
    demo: "https://mernblogz.vercel.app/",
    github: "https://github.com/abhaydotcom/Mern-Blog",
  },
  {
    title: "Movieflix",
    tag: "React · API",
 
    description: "A React movie app featuring live API data, movie search, detailed info pages, YouTube trailer playback, and optimized pagination.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: Movieflix,
    demo: "https://movflix4u.vercel.app/",
    github: "https://github.com/abhaydotcom/MovFlix",
  },
  {
    title: "Weather App",
    tag: "TypeScript · TanStack",

    description: "A modern weather experience built with React, TypeScript, TanStack Query, and ShadCN — real-time data with a refined UI.",
    tech: ["React", "TypeScript", "ShadCN", "TanStack", "Tailwind"],
    image: WeatherWeb,
    demo: "https://climatetsx.vercel.app/",
    github: "https://github.com/abhaydotcom/Weather-tanstack-tsx",
  },
  {
    title: "FoodieCart",
    tag: "Frontend · UI",

    description: "A responsive food ordering UI built with React and Tailwind, offering smooth navigation and a clean, appetizing user experience.",
    tech: ["React", "Framer Motion", "Tailwind"],
    image: foodiecart,
    demo: "https://foodiecart.vercel.app/",
    github: "https://github.com/abhaydotcom/Foodie-Kart",
  },
  {
    title: "Chatify",
    tag: "Real-time · WebSocket",
    description: "Real-time chat application with React, Zustand, and WebSockets. Includes authentication, online presence indicators, and instant messaging.",
    tech: ["React", "WebSocket", "Tailwind", "Node.js", "MongoDB", "Express"],
    image: chatify,
    demo: "https://chatifyweb.vercel.app/",
    github: "https://github.com/abhaydotcom/Chatify",
  },
]

export const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
})

export function Pill({ label }) {
  return (
    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase border border-white/10 text-zinc-500 bg-white/5">
      {label}
    </span>
  )
}





export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section className="min-h-screen py-20 sm:py-28 px-4 sm:px-10 bg-zinc-950" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div className="mx-auto max-w-6xl">

        <motion.div {...fade()} className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="w-5 h-px bg-zinc-700" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">Selected Work</span>
        </motion.div>

        <div className="mb-12 sm:mb-20">
          <motion.h2 {...fade(0.05)} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Things I've<br />
            <span className="text-zinc-700">built.</span>
          </motion.h2>
          <motion.p {...fade(0.15)} className="mt-4 text-sm sm:text-base text-zinc-600 max-w-sm leading-relaxed">
            A selection of projects — modern, scalable, and <span className="text-zinc-300 font-medium">visually refined</span>.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          {featured.map((p, i) => <FeaturedCard key={p.title} project={p} index={i} />)}
        </div>

        <motion.div {...fade()} className="flex items-center gap-4 my-10 sm:my-14">
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">More projects</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>

        <motion.div {...fade(0.3)} className="flex items-center gap-4 mt-14 sm:mt-20">
          <span className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">{projects.length} projects total</span>
          <span className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

      </div>
    </section>
  )
}