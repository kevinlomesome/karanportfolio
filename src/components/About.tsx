import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import profile from "../assets/kevin.jpeg";

function About() {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16">
          About Me
        </h1>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div className="flex justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl"
            />
          </div>

          {/* Right */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl md:text-4xl font-bold">
              Hi, I'm Kevin 👋
            </h2>

            <p className="text-cyan-400 text-lg md:text-xl mt-2">
              Frontend Developer
            </p>

            <p className="mt-6 text-gray-300 leading-8 text-base md:text-lg">
              I am a Computer Science student passionate about building
              responsive websites using React, TypeScript and Tailwind CSS.
              I enjoy creating clean, modern and user-friendly web applications.
            </p>

            {/* Education */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-3">
                Education
              </h3>

              <p className="text-gray-300">
                B.Tech – Computer Science
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-5">
                Skills
              </h3>

              <div className="grid grid-cols-2 gap-4">

                <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl hover:bg-slate-700 transition">
                  <FaReact className="text-cyan-400 text-2xl" />
                  <span>React</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl hover:bg-slate-700 transition">
                  <SiTypescript className="text-blue-500 text-2xl" />
                  <span>TypeScript</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl hover:bg-slate-700 transition">
                  <SiTailwindcss className="text-sky-400 text-2xl" />
                  <span>Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-3 bg-slate-800 px-4 py-3 rounded-xl hover:bg-slate-700 transition">
                  <FaGitAlt className="text-orange-500 text-2xl" />
                  <span>Git</span>
                </div>

              </div>
            </div>

            {/* Button */}
            <button className="mt-10 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition duration-300">
              Download Resume
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;