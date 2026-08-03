import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ls from "../../../utils/secureLS";

function ProjectsAdmin() {
  // Default Projects
  const defaultProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      technology: "React + Tailwind",
      github: "https://github.com/",
      live: "https://example.com",
      status: "Completed",
    },
    {
      id: 2,
      title: "Gym Website",
      technology: "React",
      github: "https://github.com/",
      live: "https://example.com",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      technology: "React + Tailwind",
      github: "https://github.com/",
      live: "https://example.com",
      status: "Developing",
    },
  ];

let storedProjects;

try {
  storedProjects = ls.get("projects");

  if (!Array.isArray(storedProjects) || storedProjects.length === 0) {
    storedProjects = defaultProjects;
  } else {
    // Convert existing IDs to 1,2,3...
    storedProjects = storedProjects.map((project, index) => ({
      ...project,
      id: index + 1,
    }));
  }

  ls.set("projects", storedProjects);
} catch (error) {
  storedProjects = defaultProjects;
  ls.set("projects", defaultProjects);
}

const [projects, setProjects] = useState(storedProjects);
  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [status, setStatus] = useState("Completed");

  const [editingId, setEditingId] = useState(null);

const saveProjects = (updatedProjects) => {
  ls.set("projects", updatedProjects);
  setProjects(updatedProjects);
};
  // Add
  const addProject = () => {
  if (!title.trim() || !technology.trim()) return;

  const newId =
    projects.length > 0
      ? Math.max(...projects.map((item) => Number(item.id))) + 1
      : 1;

  const newProject = {
    id: newId,
    title,
    technology,
    github,
    live,
    status,
  };

  const updated = [...projects, newProject];

  saveProjects(updated);

  setTitle("");
  setTechnology("");
  setGithub("");
  setLive("");
  setStatus("Completed");
};

  // Delete
  const deleteProject = (id) => {
  const updated = projects
    .filter((item) => item.id !== id)
    .map((item, index) => ({
      ...item,
      id: index + 1,
    }));

  saveProjects(updated);
};
  // Edit
  const editProject = (project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setTechnology(project.technology);
    setGithub(project.github);
    setLive(project.live);
    setStatus(project.status);
  };

  // Update
  const updateProject = () => {
  const updated = projects
    .map((item) =>
      item.id === editingId
        ? {
            ...item,
            title,
            technology,
            github,
            live,
            status,
          }
        : item
    )
    .map((item, index) => ({
      ...item,
      id: index + 1,
    }));

  saveProjects(updated);

  setEditingId(null);
  setTitle("");
  setTechnology("");
  setGithub("");
  setLive("");
  setStatus("Completed");
};
  return (
    <div className="flex-1 bg-slate-900 min-h-screen p-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Projects</h1>

          <p className="text-gray-400 mt-2">Manage your portfolio projects</p>
        </div>
      </div>

      {/* Form */}

      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-slate-700 p-3 rounded-lg text-white outline-none"
          />

          <input
            type="text"
            placeholder="Technology"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            className="bg-slate-700 p-3 rounded-lg text-white outline-none"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-slate-700 p-3 rounded-lg text-white outline-none"
          >
            <option>Completed</option>
            <option>In Progress</option>
            <option>Developing</option>
          </select>

          <input
            type="text"
            placeholder="GitHub Link"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="bg-slate-700 p-3 rounded-lg text-white outline-none md:col-span-2"
          />

          <input
            type="text"
            placeholder="Live Demo Link"
            value={live}
            onChange={(e) => setLive(e.target.value)}
            className="bg-slate-700 p-3 rounded-lg text-white outline-none"
          />
        </div>

        <div className="mt-6">
          {editingId ? (
            <button
              onClick={updateProject}
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-semibold"
            >
              Update Project
            </button>
          ) : (
            <button
              onClick={addProject}
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white flex items-center gap-2"
            >
              <FaPlus />
              Add Project
            </button>
          )}
        </div>
      </div>

      {/* Table */}

      <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700">
            <tr>
              <th className="text-left px-6 py-4 text-gray-300">ID</th>

              <th className="text-left px-6 py-4 text-gray-300">Project</th>

              <th className="text-left px-6 py-4 text-gray-300">Technology</th>

              <th className="text-left px-6 py-4 text-gray-300">GitHub</th>

              <th className="text-left px-6 py-4 text-gray-300">Live Demo</th>

              <th className="text-left px-6 py-4 text-gray-300">Status</th>

              <th className="text-center px-6 py-4 text-gray-300">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-b border-slate-700 hover:bg-slate-700"
              >
                <td className="px-6 py-5 text-white">{project.id}</td>

                <td className="px-6 py-5 text-white">{project.title}</td>

                <td className="px-6 py-5 text-gray-300">
                  {project.technology}
                </td>

                <td className="px-6 py-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    GitHub
                  </a>
                </td>

                <td className="px-6 py-5">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </td>

                <td className="px-6 py-5">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => editProject(project)}
                      className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg text-white"
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="bg-red-500 hover:bg-red-600 p-3 rounded-lg text-white"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectsAdmin;
