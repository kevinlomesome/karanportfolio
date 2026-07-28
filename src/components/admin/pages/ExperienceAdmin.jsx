import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import ls from "../../../utils/secureLS";
function ExperienceAdmin() {

  // Default Data
  const defaultExperience = [
    {
      id: 1,
      company: "LJ University",
      role: "AI & ML Diploma",
      duration: "2022 - 2025",
    },
    {
      id: 2,
      company: "JG University",
      role: "B.Tech AI & DS",
      duration: "2025 - Present",
    },
    {
      id: 3,
      company: "Portfolio Project",
      role: "Frontend Developer",
      duration: "2025",
    },
  ];

 let storedExperience;

try {
  storedExperience = ls.get("experience");

  if (!Array.isArray(storedExperience)) {
    storedExperience = defaultExperience;

    ls.set("experience", defaultExperience);
  }

} catch (error) {

  localStorage.removeItem("experience");

  storedExperience = defaultExperience;

  ls.set("experience", defaultExperience);

}

const [experiences, setExperiences] =
  useState(storedExperience);



  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");

  const [editingId, setEditingId] = useState(null);

  // Save
const saveExperience = (updated) => {
  ls.set("experience", updated);

  setExperiences(updated);
};
  // Add
  const addExperience = () => {
    if (!company || !role || !duration) return;

    const newExperience = {
      id: Date.now(),
      company,
      role,
      duration,
    };

    const updated = [...experiences, newExperience];

    saveExperience(updated);

    setCompany("");
    setRole("");
    setDuration("");
  };

  // Delete
  const deleteExperience = (id) => {
    const updated = experiences.filter(
      (item) => item.id !== id
    );

    saveExperience(updated);
  };

  // Edit
  const editExperience = (item) => {
    setEditingId(item.id);

    setCompany(item.company);
    setRole(item.role);
    setDuration(item.duration);
  };

  // Update
  const updateExperience = () => {
    const updated = experiences.map((item) =>
      item.id === editingId
        ? {
            ...item,
            company,
            role,
            duration,
          }
        : item
    );

    saveExperience(updated);

    setEditingId(null);

    setCompany("");
    setRole("");
    setDuration("");
  };

  return (
  <div className="flex-1 bg-slate-900 min-h-screen p-8">

    {/* Header */}
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Experience
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your education & work experience
        </p>
      </div>

    </div>

    {/* Form */}

    <div className="bg-slate-800 p-6 rounded-xl mb-8">

      <div className="grid md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Company / Institute"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-slate-700 p-3 rounded-lg text-white outline-none"
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="bg-slate-700 p-3 rounded-lg text-white outline-none"
        />

        <input
          type="text"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-slate-700 p-3 rounded-lg text-white outline-none"
        />

        {editingId ? (

          <button
            onClick={updateExperience}
            className="bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold"
          >
            Update Experience
          </button>

        ) : (

          <button
            onClick={addExperience}
            className="bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white flex items-center justify-center gap-2"
          >
            <FaPlus />
            Add Experience
          </button>

        )}

      </div>

    </div>

    {/* Table */}

    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">

      <table className="w-full">

        <thead className="bg-slate-700">

          <tr>

            <th className="text-left px-6 py-4 text-gray-300">
              ID
            </th>

            <th className="text-left px-6 py-4 text-gray-300">
              Company / Institute
            </th>

            <th className="text-left px-6 py-4 text-gray-300">
              Role
            </th>

            <th className="text-left px-6 py-4 text-gray-300">
              Duration
            </th>

            <th className="text-center px-6 py-4 text-gray-300">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {experiences.map((item) => (

            <tr
              key={item.id}
              className="border-b border-slate-700 hover:bg-slate-700"
            >

              <td className="px-6 py-5 text-white">
                {item.id}
              </td>

              <td className="px-6 py-5 text-white">
                {item.company}
              </td>

              <td className="px-6 py-5 text-gray-300">
                {item.role}
              </td>

              <td className="px-6 py-5">

                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                  {item.duration}
                </span>

              </td>

              <td className="px-6 py-5">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={() => editExperience(item)}
                    className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg text-white"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => deleteExperience(item.id)}
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

export default ExperienceAdmin;