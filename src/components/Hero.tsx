import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="text-center lg:text-left">

            <p className="text-cyan-400 text-lg font-semibold">
              Hello, I'm 👋
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mt-3">
              Kevin
            </h1>

            <h2 className="text-2xl sm:text-3xl mt-5 text-gray-300">
              Frontend Developer
            </h2>

            <p className="mt-6 text-gray-400 leading-8 max-w-xl mx-auto lg:mx-0">
              I build modern, responsive and user-friendly web
              applications using React, TypeScript and Tailwind CSS.
              Passionate about creating clean UI and great user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <a
                href="/resume.pdf"
                download
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition"
              >
                Download Resume
              </a>

              <Link
                to="/contact"
                className="border border-cyan-500 hover:bg-cyan-500 px-8 py-3 rounded-lg font-semibold transition"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">

              <a
                href="https://github.com/kevindaniels2004"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kevinnn7x"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/kevinnn7.x"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400 transition"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <img
              src="/src/assets/kevin.png"
              alt="Kevin"
              className="w-full max-w-sm rounded-full border-4 border-cyan-500 shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;