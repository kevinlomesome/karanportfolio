import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";

function Experience() {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Experience
        </h1>

        {/* Experience Card */}
        <div className="bg-slate-800 rounded-2xl shadow-xl p-8 hover:shadow-cyan-500/20 transition">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

            <div>

              <div className="flex items-center gap-3">
                <FaBriefcase className="text-cyan-400 text-2xl" />

                <h2 className="text-3xl font-bold">
                  React Developer Intern
                </h2>
              </div>

              <p className="text-cyan-400 text-lg mt-2">
                Tech Solutions Inc
              </p>

            </div>

            <div className="flex items-center gap-2 bg-slate-700 px-5 py-2 rounded-lg">

              <FaCalendarAlt className="text-cyan-400" />

              <span>June 2026 - Present</span>

            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-slate-700 my-8"></div>

          {/* Responsibilities */}
          <h3 className="text-2xl font-semibold mb-6">
            Responsibilities
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-4">
              <FaCode className="text-cyan-400 mt-1" />
              <p className="text-gray-300">
                Developed responsive web applications using React,
                TypeScript and Tailwind CSS.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-cyan-400 mt-1" />
              <p className="text-gray-300">
                Built reusable React components to improve maintainability.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-cyan-400 mt-1" />
              <p className="text-gray-300">
                Implemented React Router for seamless navigation.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-cyan-400 mt-1" />
              <p className="text-gray-300">
                Created forms using Formik and Yup validation.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-cyan-400 mt-1" />
              <p className="text-gray-300">
                Worked with Git and GitHub for version control and collaboration.
              </p>
            </div>

          </div>

          {/* Skills Used */}
          <div className="mt-10">

            <h3 className="text-2xl font-semibold mb-5">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-cyan-500 px-4 py-2 rounded-lg">
                React
              </span>

              <span className="bg-blue-500 px-4 py-2 rounded-lg">
                TypeScript
              </span>

              <span className="bg-sky-500 px-4 py-2 rounded-lg">
                Tailwind CSS
              </span>

              <span className="bg-orange-500 px-4 py-2 rounded-lg">
                Git
              </span>

              <span className="bg-gray-700 px-4 py-2 rounded-lg">
                GitHub
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;