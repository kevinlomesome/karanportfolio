import StatCard from "./StatCard";
import ls from "../../../utils/secureLS";

import {
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

import { MdWork } from "react-icons/md";

function DashboardHome() {
  const projects = ls.get("projects") || [];
  const skills = ls.get("skills") || [];
  const experience = ls.get("experience") || [];
  const messages = ls.get("messages") || [];
  const settings = ls.get("settings") || {};

  return (
    <div className="p-8 bg-slate-900 min-h-screen">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Welcome back, {settings.name || "Admin"} 👋
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Projects"
          value={projects.length}
          icon={<FaProjectDiagram />}
          color="bg-cyan-500 text-white"
        />

        <StatCard
          title="Skills"
          value={skills.length}
          icon={<FaCode />}
          color="bg-green-500 text-white"
        />

        <StatCard
          title="Messages"
          value={messages.length}
          icon={<FaEnvelope />}
          color="bg-yellow-500 text-white"
        />

        <StatCard
          title="Experience"
          value={experience.length}
          icon={<MdWork />}
          color="bg-purple-500 text-white"
        />

      </div>

      {/* Recent Projects */}
      <div className="mt-10 bg-slate-800 rounded-xl shadow-lg border border-slate-700">

        <div className="p-6 border-b border-slate-700">
          <h2 className="text-2xl font-semibold text-white">
            Recent Projects
          </h2>
        </div>

        <table className="w-full">

          <thead>

            <tr className="text-gray-400 border-b border-slate-700">

              <th className="text-left px-6 py-4">
                Project
              </th>

              <th className="text-left px-6 py-4">
                Technology
              </th>

              <th className="text-left px-6 py-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {projects.length > 0 ? (
              projects.slice(0, 5).map((project, index) => (
                <tr
                  key={project.id || index}
                  className="border-b border-slate-700"
                >
                  <td className="px-6 py-4 text-white">
                    {project.title}
                  </td>

                  <td className="px-6 py-4 text-gray-300">
                    {project.technology}
                  </td>

                  <td
                    className={`px-6 py-4 ${
                      project.status === "Completed"
                        ? "text-green-400"
                        : project.status === "In Progress"
                        ? "text-yellow-400"
                        : "text-cyan-400"
                    }`}
                  >
                    {project.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center py-10 text-gray-400"
                >
                  No Projects Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default DashboardHome;