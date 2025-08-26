import { useTranslation } from "react-i18next";

const About = ({ skills }) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#0c0e12]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          {t("about.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-400 leading-relaxed">
              {t("about.desc1")}
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              {t("about.desc2")}
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              {t("about.desc3")}
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-3">
                  <skill.icon size={20} className="text-emerald-400" />
                  <span className="font-semibold text-slate-100">{skill.name}</span>
                  <span className="text-emerald-400 ml-auto">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
