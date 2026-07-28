function ProjectCard({
  title,
  technology,
  github,
  live,
  status,
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300">

      {/* Project Title */}
      <h2 className="text-2xl font-bold text-cyan-400">
        {title}
      </h2>

      {/* Technology */}
      <p className="mt-4 text-cyan-300 font-semibold">
        {technology}
      </p>

      {/* Status */}
      <span className="inline-block mt-4 bg-green-500 px-3 py-1 rounded-full text-sm text-white">
        {status}
      </span>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg transition"
          >
            Live Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-500 hover:bg-cyan-500 hover:text-white px-5 py-2 rounded-lg transition"
          >
            GitHub
          </a>
        )}

      </div>

    </div>
  );
}

export default ProjectCard;