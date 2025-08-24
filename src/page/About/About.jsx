import React from 'react'

const About = ({ skills }) => {
  return (
    <div>
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
    </div>
  )
}

export default About
