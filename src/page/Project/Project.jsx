import { ExternalLink, Github, Star } from "lucide-react"

const Project = ({ projects }) => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"
                  style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}>
                </div>

                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:bg-white/10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center`}>
                    <Star className="text-white" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-white/70 mb-6 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="text-white/50 hover:text-white transition-colors cursor-pointer" size={20} />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
