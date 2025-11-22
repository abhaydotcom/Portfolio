import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
 const [open, setOpen] = useState(false);
    const navLinks=[
        {name:"Home",path:'/'},
        {name:"Projects",path:'/projects'},
        {name:"About",path:'/about'},
        {name:"Contact",path:'/contact'},
    ]

    const location=useLocation();
    

    return (
    <>
      <nav className="fixed top-6 left-0 w-full z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-gray-800/95 text-white flex items-center justify-between py-3 px-4 md:px-6 rounded-3xl border border-sky-600 shadow-lg">
            <div className="flex items-center gap-3">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <span className="text-xl font-bold text-cyan-400">&lt;/&gt;</span>
                <h1 className="hover:opacity-70  text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 tracking-tight">
                  Abhay.in
                </h1>
              </Link>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((e) => (
                <div key={e.name} className="relative group">
                  <Link
                    to={e.path}
                    className={`text-md font-semibold transition-colors ${
                      location.pathname === e.path ? "text-blue-400" : "text-gray-200 hover:text-blue-300"
                    }`}
                  >
                    {e.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${
                      location.pathname === e.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu: backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity ${open ? "opacity-80 visible" : "opacity-0 invisible"}`}
        style={{ background: "rgba(2,6,23,0.6)" }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile sliding panel */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[86%] max-w-xs transform bg-gray-900 text-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <span className="text-lg font-bold text-cyan-400">&lt;/&gt;</span>
            <span className="font-semibold text-lg">Abhay.in</span>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-3">
            {navLinks.map((e) => {
              const active = location.pathname === e.path;
              return (
                <li key={e.name}>
                  <Link
                    to={e.path}
                    onClick={() => setOpen(false)}
                    className={`block w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      active ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "text-gray-200 hover:bg-gray-800/60"
                    }`}
                  >
                    {e.name}
                  </Link>
                </li>
              );
            })}
          </ul>

         
        </nav>
      </aside>
    </>
  );
}

export default Navbar