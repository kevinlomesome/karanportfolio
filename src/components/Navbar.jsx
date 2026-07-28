import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold"
      : "hover:text-cyan-400 transition";

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-cyan-400"
        >
          Kevin
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">

          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>


          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/experience" className={navLinkClass}>
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin" className={navLinkClass}>
              Admin
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
            >
              Hire Me
            </NavLink>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">

          <ul className="flex flex-col items-center gap-6 py-8">

            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/experience"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>


            <li>
              <NavLink
                to="/admin"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Admin
              </NavLink>
            </li>

            <li>
            <NavLink
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
            >
              Hire Me
            </NavLink>
          </li>
          </ul>

        </div>
      )}
    </nav>
  );
}

export default Navbar;