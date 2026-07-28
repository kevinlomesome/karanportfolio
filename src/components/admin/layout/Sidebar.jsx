import {
  FaTachometerAlt,
  FaProjectDiagram,
  FaCode,
  FaBriefcase,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },
    {
      label: "Projects",
      icon: <FaProjectDiagram />,
      path: "/admin/dashboard/projects",
    },
    {
      label: "Skills",
      icon: <FaCode />,
      path: "/admin/dashboard/skills",
    },
    {
      label: "Experience",
      icon: <FaBriefcase />,
      path: "/admin/dashboard/experience",
    },
    {
      label: "Messages",
      icon: <FaEnvelope />,
      path: "/admin/dashboard/messages",
    },
    {
      label: "Settings",
      icon: <FaCog />,
      path: "/admin/dashboard/settings",
    },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-800 border-r border-slate-700 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-cyan-400">
          Admin
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Portfolio Dashboard
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4">

        {menuItems.map((item) => (

         <NavLink
  key={item.path}
  to={item.path}
  end={item.path === "/admin/dashboard"}
  className={({ isActive }) =>
    `w-full flex items-center gap-4 px-6 py-4 transition duration-200 ${
      isActive
        ? "bg-cyan-500 text-white"
        : "text-gray-300 hover:bg-slate-700"
    }`
  }
>
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>

          </NavLink>

        ))}

      </div>

      {/* Logout */}
      <div className="border-t border-slate-700 p-4">

        <button
          onClick={() => navigate("/admin")}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Sidebar;