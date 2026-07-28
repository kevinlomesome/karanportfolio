import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import ls from "../utils/secureLS"; // Adjust the path if needed

function Experience() {
  const experiences = ls.get("experience") || [];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          Experience
        </h1>

        {experiences.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No experience added yet.
          </div>
        ) : (
          <div className="space-y-8">

            {experiences.map((item) => (

              <div
                key={item.id}
                className="bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                  <div>

                    <div className="flex items-center gap-3">

                      <FaBriefcase className="text-cyan-400 text-2xl" />

                      <h2 className="text-3xl font-bold">
                        {item.role}
                      </h2>

                    </div>

                    <p className="text-cyan-400 text-lg mt-2">
                      {item.company}
                    </p>

                  </div>

                  <div className="flex items-center gap-2 bg-slate-700 px-5 py-2 rounded-lg">

                    <FaCalendarAlt className="text-cyan-400" />

                    <span>{item.duration}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Experience;