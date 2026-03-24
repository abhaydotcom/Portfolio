import { motion, AnimatePresence  } from 'framer-motion'
import { Logo } from './Navbar'
import { Link } from 'react-router-dom'


const navLinks = [
  { name: 'Home',     path: '/',        num: '01' },
  { name: 'Projects', path: '/projects', num: '02' },
  { name: 'About',    path: '/about',    num: '03' },
  { name: 'Contact',  path: '/contact',  num: '04' },
]


export function MobileDrawer({ open, setOpen, location }) {
  return (
    <>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

    
      <AnimatePresence>
        {open && (
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-[320px] flex flex-col"
            style={{ background: '#0e0e15', borderLeft: '1px solid rgba(255,255,255,0.06)' }}
            aria-hidden={!open}
          >
       
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
              <Logo onClick={() => setOpen(false)} />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-[#e2ff5d]/40 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/50"/>
                </svg>
              </button>
            </div>

           
            <nav className="flex-1 px-6 py-8 flex flex-col justify-center">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const active = location.pathname === link.path
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-200 group ${
                          active
                            ? 'bg-[#e2ff5d]/8'
                            : 'hover:bg-white/4'
                        }`}
                      >
                        <span className="text-[10px] font-mono text-white/20 group-hover:text-[#e2ff5d]/50 transition-colors">
                          {link.num}
                        </span>
                        <span
                          className={`text-xl font-semibold tracking-tight transition-colors ${
                            active ? 'text-[#e2ff5d]' : 'text-white/70 group-hover:text-white'
                          }`}
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {link.name}
                        </span>
                        {active && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#e2ff5d]" />
                        )}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            <div className="px-6 py-6 border-t border-white/5">
              <p className="text-[11px] text-white/20 tracking-widest uppercase font-mono">
                Portfolio — 2025
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}