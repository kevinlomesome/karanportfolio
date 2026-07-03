function ProjectCard({
  title,
  description,
  tech,
  image,
  github,
  live,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">

      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          {title}
        </h2>

        <p className="text-gray-300 mt-4">
          {description}
        </p>

        <p className="mt-4 text-cyan-300 font-semibold">
          {tech}
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-500 hover:bg-cyan-500 px-5 py-2 rounded-lg transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;