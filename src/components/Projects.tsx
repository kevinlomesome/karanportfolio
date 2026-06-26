import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with React and Tailwind CSS.",
    tech: "React • TypeScript • Tailwind CSS",
    image: "https://placehold.co/600x400",
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Gym Website",
    description:
      "Responsive gym website with modern design and animations.",
    tech: "React • Tailwind CSS",
    image: "https://placehold.co/600x400",
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "AI SaaS Website",
    description:
      "Landing page for an AI SaaS product with a premium UI.",
    tech: "React • TypeScript • Tailwind",
    image: "https://placehold.co/600x400",
    github: "https://github.com/",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "Complete frontend for an online shopping platform.",
    tech: "React • Node.js • MongoDB",
    image: "https://placehold.co/600x400",
    github: "https://github.com/",
    live: "https://example.com",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-slate-900 text-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-16">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              github={project.github}
              live={project.live}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;