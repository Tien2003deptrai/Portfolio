import { Github, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#0c0e12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>

          <p className="text-xl text-slate-400 mb-12">
            {t('contact.desc')}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Mail className="mx-auto mb-4 text-emerald-400" size={32} />
              <h3 className="text-xl font-semibold text-slate-100 mb-2">Email</h3>
              <p className="text-slate-400">duongvantiendtu@gmail.com</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Github className="mx-auto mb-4 text-emerald-400" size={32} />
              <h3 className="text-xl font-semibold text-slate-100 mb-2">GitHub</h3>
              <p className="text-slate-400">@Tien2003deptrai</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Linkedin className="mx-auto mb-4 text-emerald-400" size={32} />
              <h3 className="text-xl font-semibold text-slate-100 mb-2">LinkedIn</h3>
              <p className="text-slate-400">linkedin.com/in/duongvantien</p>
            </div>
          </div>

          <a
            href="mailto:duongvantiendtu@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 text-black"
          >
            {t('contact.mail')}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
