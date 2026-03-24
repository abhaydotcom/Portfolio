import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValue, useSpring } from "framer-motion"

const EASE = [0.16, 1, 0.3, 1]

const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")"

function useTypewriter(texts) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    let t

    if (!isDeleting && charIndex < current.length) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }, 95)
    } else if (!isDeleting && charIndex === current.length) {
      t = setTimeout(() => setIsDeleting(true), 1400)
    } else if (isDeleting && charIndex > 0) {
      t = setTimeout(() => { setDisplayText(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 55)
    } else {
      t = setTimeout(() => { setIsDeleting(false); setTextIndex(i => (i + 1) % texts.length) }, 280)
    }

    return () => clearTimeout(t)
  }, [charIndex, isDeleting, textIndex, texts])

  return displayText
}

function FloatingBadge({ label, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      style={style}
      className="absolute hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-white/10 bg-white/5 backdrop-blur-md text-white/60 select-none"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      {label}
    </motion.div>
  )
}

function MagneticBtn({ children, className, to, variant = "primary" }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  const styles = {
    primary: "text-[#0a0a0f] bg-[#e2ff5d] hover:bg-white shadow-[0_0_30px_rgba(226,255,93,0.35)] hover:shadow-[0_0_50px_rgba(226,255,93,0.5)]",
    outline: "text-white border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm",
  }

  return (
    <Link to={to} className={className}>
      <motion.div
        ref={ref}
        style={{ x: sx, y: sy }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileTap={{ scale: 0.96 }}
        className={`relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer w-full ${styles[variant]}`}
      >
        {children}
      </motion.div>
    </Link>
  )
}

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: EASE },
})

export default function Hero() {
  const displayText = useTypewriter(["a Developer", "a Designer", "a Creator"])

  const cx = useMotionValue(-400)
  const cy = useMotionValue(-400)
  const gx = useSpring(cx, { stiffness: 80, damping: 22 })
  const gy = useSpring(cy, { stiffness: 80, damping: 22 })

  useEffect(() => {
    const move = (e) => { cx.set(e.clientX); cy.set(e.clientY) }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [cx, cy])

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden"
      style={{ background: "#0a0a0f", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,300&family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
        .hero-name { font-family: 'Playfair Display', Georgia, serif; font-style: italic; }
        .role-cursor::after { content: '|'; animation: blink 1s step-end infinite; color: #e2ff5d; margin-left: 2px; font-weight: 300; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .stat-line::before { content: ''; display: block; width: 1px; height: 24px; background: rgba(255,255,255,0.12); margin: 0 auto 8px; }
        @media (min-width: 640px) { .stat-line::before { height: 32px; margin-bottom: 10px; } }
      `}</style>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: NOISE, backgroundSize: "256px 256px" }} />

      <motion.div
        className="pointer-events-none fixed z-0 hidden md:block"
        style={{ left: gx, top: gy, x: "-50%", y: "-50%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(226,255,93,0.07) 0%, transparent 65%)" }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />

      <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] sm:w-[55vw] sm:h-[55vw] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-15%] right-[-8%] w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(226,255,93,0.05) 0%, transparent 65%)", filter: "blur(80px)" }} />

      <FloatingBadge label="Open to work"  delay={1.2} style={{ top: "22%", left: "5%" }} />
      <FloatingBadge label="Based in India" delay={1.4} style={{ top: "38%", right: "4%" }} />
      <FloatingBadge label="MERN Stack"    delay={1.6} style={{ bottom: "24%", left: "6%" }} />

      <div className="relative z-10 px-5 sm:px-8 w-full max-w-5xl mx-auto flex flex-col items-center pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28">

        <motion.div {...fadeUp(0.2)} className="mb-1 sm:mb-2">
          <span className="text-base sm:text-lg md:text-xl font-light text-white/30 tracking-widest">Hey, I'm</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.3)} className="hero-name text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] leading-[1.05] mb-3 sm:mb-4 text-white">
          Abhay Kumar<br />
          <span style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.15)", color: "transparent" }}>Singh</span>
        </motion.h1>

        <motion.div {...fadeUp(0.45)} className="mb-7 sm:mb-10 h-8 sm:h-10 flex items-center justify-center flex-wrap gap-x-1">
          <span className="text-sm sm:text-base md:text-lg font-light text-white/40 tracking-widest uppercase">I am&nbsp;</span>
          <span className="role-cursor text-sm sm:text-base md:text-lg font-semibold text-[#e2ff5d] tracking-wide">{displayText}</span>
        </motion.div>

        <motion.p {...fadeUp(0.55)} className="max-w-xs sm:max-w-sm md:max-w-lg text-sm sm:text-base leading-relaxed text-white/40 font-light mb-8 sm:mb-12 px-2 sm:px-0">
          Crafting{" "}
          <em className="text-white/70 not-italic font-normal">clean</em>,{" "}
          <em className="text-white/70 not-italic font-normal">scalable</em> web experiences where thoughtful engineering meets intentional design.
        </motion.p>

        <motion.div {...fadeUp(0.65)} className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-center w-full xs:w-auto">
          <MagneticBtn to="/projects" variant="primary" className="w-full xs:w-auto">View Work <Arrow /></MagneticBtn>
          <MagneticBtn to="/contact" variant="outline" className="w-full xs:w-auto">Get in Touch</MagneticBtn>
        </motion.div>

       
      </div>

    
    </section>
  )
}