import { useEffect, useState } from "react";
import ls from "../utils/secureLS"; // adjust the path if needed

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    try {
      const storedSkills = ls.get("skills") || [];
      setSkills(storedSkills);
    } catch (error) {
      console.error("Error loading skills:", error);
      setSkills([]);
    }
  }, []);

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            My Skills
          </h2>

          <p className="text-gray-400 mt-3">
            Technologies I work with
          </p>
        </div>

        {skills.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No skills added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {skills.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-cyan-400">
                  {item.skill}
                </h3>

                <p className="mt-4 text-gray-300">
                  Level
                </p>

                <span className="inline-block mt-2 bg-cyan-500 px-4 py-1 rounded-full">
                  {item.level}
                </span>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;