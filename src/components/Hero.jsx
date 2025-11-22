import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-28 md:py-40 lg:py-52 min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950" />

      <div className="absolute -top-32 sm:-top-36 left-1/2 -translate-x-1/2 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] md:w-[700px] md:h-[700px] pointer-events-none bg-gradient-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30 -z-10" />

      <div className="px-6 w-full max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 tracking-tight">
          Hey, I'm Abhay kumar singh
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A MERN Stack Developer passionate about crafting{" "}
          <span className="font-semibold text-blue-500">clean</span>,{" "}
          <span className="font-semibold text-cyan-500">scalable</span> web apps — blending logic and design.
        </p>

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