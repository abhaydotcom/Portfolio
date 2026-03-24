import { motion } from 'framer-motion'




export function Hamburger({ open, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] focus:outline-none group"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block w-5 h-px bg-white group-hover:bg-[#e2ff5d] transition-colors duration-200 origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-3.5 h-px bg-white/60 group-hover:bg-[#e2ff5d]/60 transition-colors duration-200 self-start ml-[3px]"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="block w-5 h-px bg-white group-hover:bg-[#e2ff5d] transition-colors duration-200 origin-center"
      />
    </button>
  )
}