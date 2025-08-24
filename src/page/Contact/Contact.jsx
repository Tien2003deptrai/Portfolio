import { Github, Linkedin, Mail } from "lucide-react"

const Contact = () => {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect & Build Something Amazing
          </h2>

          <p className="text-xl text-white/70 mb-12">
            Bạn có dự án thú vị, hay cần một developer năng động đồng hành? Đừng ngần ngại, tôi luôn sẵn sàng lắng nghe và cùng bạn hiện thực hóa ý tưởng.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Mail className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/70">duongvantiendtu@gmail.com</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Github className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-white/70">@Tien2003deptrai</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl">
              <Linkedin className="mx-auto mb-4 text-purple-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-white/70">linkedin.com/in/duongvantien</p>
            </div>
          </div>

          <a
            href="mailto:duongvantiendtu@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Gửi Email Ngay
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
