import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion,  } from 'framer-motion'
import { Hamburger } from './Hamburger'
import { NavLink } from './NavLink'
import { MobileDrawer } from './MobileDrawer'

const navLinks = [
  { name: 'Home',     path: '/',        num: '01' },
  { name: 'Projects', path: '/projects', num: '02' },
  { name: 'About',    path: '/about',    num: '03' },
  { name: 'Contact',  path: '/contact',  num: '04' },
]


export function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5 group select-none">
      <motion.div
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-8 h-8 flex items-center justify-center"
      >
       
        <span className="absolute inset-0 rounded-full border border-[#e2ff5d]/40 group-hover:border-[#e2ff5d] transition-colors duration-300" />
      
        <span className="w-2 h-2 rounded-full bg-[#e2ff5d]" />
      </motion.div>
      <span
        className="text-white font-semibold text-base tracking-tight leading-none"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Abhay
        <span className="text-[#e2ff5d]">dotcom</span>
      </span>
    </Link>
  )
}






export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  
  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5"
      >
        <div
          className="mx-auto max-w-5xl transition-all duration-500"
        >
          <motion.div
            animate={{
              backgroundColor: scrolled ? 'rgba(10,10,15,0.85)' : 'rgba(10,10,15,0.5)',
              borderColor: scrolled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)',
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl border backdrop-blur-xl"
            style={{
              boxShadow: scrolled
                ? '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)'
                : '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
          
            <Logo />

            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  link={link}
                  active={location.pathname === link.path}
                />
              ))}
            </nav>

   
            <div className="hidden md:flex items-center gap-3">
           
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">
                  Available
                </span>
              </div>

              <Link
                to="/contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-[#0a0a0f] bg-[#e2ff5d] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(226,255,93,0.25)] hover:shadow-[0_0_30px_rgba(226,255,93,0.4)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Contact Me
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

      
            <div className="md:hidden">
              <Hamburger open={open} toggle={() => setOpen((v) => !v)} />
            </div>
          </motion.div>
        </div>
      </motion.header>

  
      <MobileDrawer open={open} setOpen={setOpen} location={location} />
    </>
  )
}