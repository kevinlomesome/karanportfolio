import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Kevin
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Frontend Developer passionate about building
              modern, responsive and user-friendly web applications
              using React, TypeScript and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/experience" className="hover:text-cyan-400 transition">
                  Experience
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400">
              kevinwork2005@email.com
            </p>

            <div className="flex gap-5 mt-6">

              <a
                href="https://github.com/kevindaniels2004"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/kevinnn7x"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com/KEVINNN7.X"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="mailto:kevinwork2005@email.com"
                className="bg-slate-800 p-3 rounded-full hover:bg-cyan-500 transition"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kevin. All Rights Reserved.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;