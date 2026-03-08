import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion"

export default function Hero() {

const texts = [
  'Abhay Kumar Singh',
  'a Developer',
  'a Designer',
  'a Creator'
];

const [textIndex, setTextIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [displayText, setDisplayText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentText = texts[textIndex];

  let timeout;

  if (!isDeleting && charIndex < currentText.length) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    }, 110);
  }

  if (!isDeleting && charIndex === currentText.length) {
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 1200);
  }

  if (isDeleting && charIndex > 0) {
    timeout = setTimeout(() => {
      setDisplayText(currentText.slice(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    }, 70);
  }

  if (isDeleting && charIndex === 0) {
    timeout = setTimeout(() => {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 300);
  }

  return () => clearTimeout(timeout);
}, [charIndex, isDeleting, textIndex]);



  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-28 md:py-40 lg:py-52 min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />

      <div className="absolute -top-32 sm:-top-36 left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] pointer-events-none bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30 -z-10" />

      <div className="px-6 w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold text-blue-400 flex flex-wrap items-center justify-center gap-x-3"
        >  
          <div>Hey, I'm</div>
          <span className="">
            {displayText}
            {/* <AnimatePresence mode="wait">
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
                className=""
              >
                {displayText}
              </motion.span>
            </AnimatePresence> */}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
        >
          A MERN Stack Developer passionate about crafting{" "}
          <span className="font-semibold text-blue-500">clean</span>,{" "}
          <span className="font-semibold text-cyan-500">scalable</span> web apps — blending logic and design.
        </motion.p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
          <Link
            to="/projects"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-lg transition-all duration-300"
          >
            View Work
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium border border-blue-400 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}