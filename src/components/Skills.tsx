import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-400" /> },
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} className="text-sky-400" /> },
    { name: "Vite", icon: <SiVite size={50} className="text-purple-400" /> },
    { name: "Git", icon: <FaGitAlt size={50} className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub size={50} className="text-white" /> },
    { name: "Figma", icon: <FaFigma size={50} className="text-pink-500" /> },
  ];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-14">
          My Skills
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-lg transition-all duration-300"
            >
              {skill.icon}

              <h3 className="mt-4 text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;