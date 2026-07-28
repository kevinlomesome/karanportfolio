import {
  FaBell,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Welcome back, Kevin 👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Search Box */}
        <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-4 py-2">

          <FaSearch className="text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 bg-transparent outline-none text-white placeholder-gray-500 w-56"
          />

        </div>

        {/* Notification */}
        <button className="relative">

          <FaBell className="text-2xl text-gray-300 hover:text-cyan-400 transition" />

          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-4xl text-cyan-400" />

          <div className="hidden md:block">

            <p className="text-white font-semibold">
              Kevin
            </p>

            <p className="text-xs text-gray-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;