import ls from "../utils/secureLS"; // adjust path if needed
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = ls.get("projects") || [];

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          My Projects
        </h1>

        {projects.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No projects added yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                technology={project.technology}
                github={project.github}
                live={project.live}
                status={project.status}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;