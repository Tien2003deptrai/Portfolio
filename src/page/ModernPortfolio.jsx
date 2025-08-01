import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, ExternalLink, Star,
  ArrowRight, Menu,
  X
} from 'lucide-react';

import { projects } from '../util/Project';
import { skills } from '../util/Skill';

const ModernPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        >
        </div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`relative px-4 py-2 transition-all duration-300 ${activeSection === item.toLowerCase()
                    ? 'text-purple-400'
                    : 'text-white/70 hover:text-white'
                    }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="text-2xl text-white/70 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="relative z-10">
        {activeSection === 'home' && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent animate-pulse">
                  Dương Văn Tiến
                </h1>
                <h2 className="text-3xl md:text-5xl font-light mb-6 text-white/90">
                  Full-Stack Web Developer
                </h2>
                <h3 className="text-xl text-white/60 mb-4">
                  React.js | Node.js | MongoDB | MySQL | Tailwind
                </h3>
              </div>

              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
                Tôi đam mê xây dựng ứng dụng web hiện đại, kết hợp giữa thiết kế UI/UX đẹp mắt và khả năng xử lý backend linh hoạt. Hiện là sinh viên Duy Tân, đã thực chiến các dự án như Sbay-Airplane, PetPort và Sakura Nihongo.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <button
                  onClick={() => setActiveSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  <span className="flex items-center gap-2">
                    Xem Dự Án
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>

                <button
                  onClick={() => setActiveSection('contact')}
                  className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  Liên Hệ Ngay
                </button>
              </div>

              <div className="flex justify-center space-x-6">
                {[
                  { Icon: Github, link: "https://github.com/Tien2003deptrai" },
                  { Icon: Linkedin, link: "https://linkedin.com/in/duongvantien" },
                  { Icon: Mail, link: "mailto:duongvantiendtu@gmail.com" },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="group-hover:scale-110 transition-transform" size={24} />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Me
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white/80 leading-relaxed">
                    Tôi là sinh viên năm cuối ngành Kỹ thuật phần mềm tại Đại học Duy Tân, đồng thời là một lập trình viên full-stack với kinh nghiệm thực chiến qua các dự án như <strong>Sbay-Airplane</strong>, <strong>Pet Port</strong> và <strong>Sakura Nihongo</strong>.
                  </p>

                  <p className="text-lg text-white/80 leading-relaxed">
                    Tôi đam mê phát triển ứng dụng web hiện đại, đặc biệt chú trọng vào trải nghiệm người dùng (UI/UX) và tối ưu logic backend. Với tinh thần học hỏi liên tục, tôi luôn nỗ lực nâng cao kỹ năng qua việc tham gia dự án nhóm, giải quyết vấn đề thực tế và áp dụng best practices.
                  </p>

                  <p className="text-lg text-white/80 leading-relaxed">
                    Thành tích nổi bật: GPA 3.58, Top 35 LG DREAM CODE 2025, chứng chỉ AWS Cloud Practitioner Essentials.
                    Tôi tin rằng tư duy hệ thống và thái độ cầu tiến là yếu tố then chốt để tạo ra những sản phẩm có giá trị.
                  </p>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <skill.icon size={20} className="text-purple-400" />
                        <span className="font-semibold">{skill.name}</span>
                        <span className="text-purple-400 ml-auto">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}


        {activeSection === 'projects' && (
          <section className="min-h-screen px-6 py-20">
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
        )}

        {activeSection === 'contact' && (
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
        )}

      </main>
    </div>
  );
};

export default ModernPortfolio;
