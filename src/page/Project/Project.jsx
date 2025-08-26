import { ExternalLink, Github, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Project = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#0c0e12]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"
                style={{
                  background: `linear-gradient(135deg, ${project.color.split(" ")[1]}, ${project.color.split(" ")[3]
                    })`,
                }}
              />

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:bg-white/10">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} mb-6 flex items-center justify-center`}
                >
                  <Star className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {t(`projects.descriptions.${project.key}`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    {t("projects.view")}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      className="text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
