import { Code2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-linear-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950"></div>
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-linear-to-r from-cyan-400/30 to-blue-600/30 blur-3xl rounded-full opacity-30"></div>

      <h1 className="text-4xl sm:text-6xl font-bold mb-10 text-center bg-linear-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
        About
      </h1>

      <div className="w-full max-w-4xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-lg p-7 sm:p-10 border border-gray-200/40 dark:border-gray-700/40">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="text-blue-500 dark:text-cyan-400" size={28} />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Hey, I’m Abhay 👋
          </h2>
        </div>

        <div className="space-y-5 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I’m a{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              MERN Stack Developer
            </span>{" "}
            who loves building clean server-side logic, secure APIs, and
            efficient data systems. I mostly work with{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              React.js, Node.js, Express, and MongoDB
            </span>{" "}
            to create scalable backend architectures and awesome web ui.
          </p>

          <p>
            While backend is my main playground, I also enjoy crafting smooth
            and responsive user interfaces with{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              React
            </span>{" "}
            and{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              TailwindCSS
            </span>
            . Understanding both frontend and backend flow helps me build
            complete, well-structured applications.
          </p>

          <p>
            I’m currently pursuing my{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              Bachelor's of computer application
            </span>{" "}
            at{" "}
            <span className="font-medium text-blue-600 dark:text-cyan-400">
              Gniot
            </span>
            . I love solving real-world problems, exploring system design, and
            continuously leveling up my development skills.
          </p>
        </div>

        <div className="mt-10 bg-gray-900/90 text-gray-100 font-mono text-xs sm:text-sm rounded-xl overflow-hidden border border-gray-700">
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 text-gray-400 text-xs">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="ml-2">about.js</span>
          </div>

          <pre className="text-gray-300 p-5 whitespace-pre-wrap wrap-break-word">
            <code>
              {`const Abhay = {
  role: "MERN Stack Developer",
  skills: ["Node.js", "Express", "MongoDB", "React", "TailwindCSS","Framer-Motion"],
  focus: "Building scalable APIs & Awesome Ui",
  loves: ["problem-solving", "architecture design", "clean code"],
  learning: "Cloud deployment & system optimization"
};`}
            </code>
          </pre>
        </div>

        <div className="text-center mt-10">
          <button
            className="text-white hover:opacity-75 transition-all duration-200 px-8 py-4 rounded-lg text-md font-medium  bg-linear-to-r from-blue-600 to-cyan-400  "
            onClick={() => navigate("/contact")}
          >
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
