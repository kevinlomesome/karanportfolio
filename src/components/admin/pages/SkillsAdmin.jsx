  import { useState } from "react";
  import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
  import ls from "../../../utils/secureLS";




window.ls = ls;
  function SkillsAdmin() {
    // Default Data
    const defaultSkills = [
      {
        id: 1,
        skill: "React.js",
        level: "Advanced",
      },
      {
        id: 2,
        skill: "JavaScript",
        level: "Advanced",
      },
      {
        id: 3,
        skill: "Tailwind CSS",
        level: "Intermediate",
      },
      {
        id: 4,
        skill: "Python",
        level: "Intermediate",
      },
    ];

  // Initialize SecureLS
  let storedSkills;

try {
  storedSkills = ls.get("skills");

  if (!Array.isArray(storedSkills)) {
    storedSkills = defaultSkills;
    ls.set("skills", defaultSkills);
  }
} catch (error) {
  localStorage.removeItem("skills");

  storedSkills = defaultSkills;

  ls.set("skills", defaultSkills);
}
  const [skills, setSkills] = useState(storedSkills);

    // Form State
    const [skillName, setSkillName] = useState("");
    const [level, setLevel] = useState("Beginner");
    const [editingId, setEditingId] = useState(null);

    // Save to Local Storage
  const saveSkills = (updatedSkills) => {
    ls.set("skills", updatedSkills);
    setSkills(updatedSkills);
  };

    // Add Skill
   const addSkill = () => {
  if (skillName.trim() === "") return;

  const newId =
    skills.length > 0
      ? Math.max(...skills.map((item) => item.id)) + 1
      : 1;

  const newSkill = {
    id: newId,
    skill: skillName,
    level,
  };

  const updated = [...skills, newSkill];

  saveSkills(updated);

  setSkillName("");
  setLevel("Beginner");
};
    // Delete Skill
    const deleteSkill = (id) => {
  const updated = skills
    .filter((item) => item.id !== id)
    .map((item, index) => ({
      ...item,
      id: index + 1,
    }));

  saveSkills(updated);
};

    // Edit Button
    const editSkill = (item) => {
      setEditingId(item.id);
      setSkillName(item.skill);
      setLevel(item.level);
    };

    // Update Skill
    const updateSkill = () => {
      const updated = skills.map((item) =>
        item.id === editingId
          ? {
              ...item,
              skill: skillName,
              level,
            }
          : item
      );

      saveSkills(updated);

      setEditingId(null);
      setSkillName("");
      setLevel("Beginner");
    };

    return (
      <div className="flex-1 bg-slate-900 min-h-screen p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Skills
            </h1>

            <p className="text-gray-400">
              Manage your technical skills
            </p>
          </div>

        </div>

        {/* Form */}

        <div className="bg-slate-800 rounded-xl p-6 mb-8">

          <div className="grid md:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Skill Name"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              className="bg-slate-700 text-white p-3 rounded-lg outline-none"
            />

            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="bg-slate-700 text-white p-3 rounded-lg outline-none"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Expert</option>
            </select>

            {editingId ? (
              <button
                onClick={updateSkill}
                className="bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold"
              >
                Update Skill
              </button>
            ) : (
              <button
                onClick={addSkill}
                className="bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white font-semibold flex justify-center items-center gap-2"
              >
                <FaPlus />
                Add Skill
              </button>
            )}

          </div>

        </div>

        {/* Table */}

        <div className="bg-slate-800 rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-700">

              <tr>

                <th className="px-6 py-4 text-left text-gray-300">
                  ID
                </th>

                <th className="px-6 py-4 text-left text-gray-300">
                  Skill
                </th>

                <th className="px-6 py-4 text-left text-gray-300">
                  Level
                </th>

                <th className="px-6 py-4 text-center text-gray-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {skills.map((item) => (

                <tr
                  key={item.id}
                  className="border-b border-slate-700 hover:bg-slate-700"
                >

                  <td className="px-6 py-5 text-white">
                    {item.id}
                  </td>

                  <td className="px-6 py-5 text-white">
                    {item.skill}
                  </td>

                  <td className="px-6 py-5">

                    <span className="bg-green-500 px-3 py-1 rounded-full text-white text-sm">
                      {item.level}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => editSkill(item)}
                        className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-lg text-white"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => deleteSkill(item.id)}
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

  export default SkillsAdmin;