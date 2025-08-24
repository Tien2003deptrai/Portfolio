import { Download } from 'lucide-react';
import { socials } from '../../util/Social'

const Home = ({ setActiveSection }) => {
  return (
    <main className="min-h-screen flex items-center bg-[#0c0e12] text-slate-100">
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] grid place-items-center">
              <div
                className="
                  absolute inset-0 -m-6 rounded-full
                  motion-safe:animate-[spin_14s_linear_infinite]
                  motion-reduce:animate-none
                  [background:repeating-conic-gradient(#34d399_0_6deg,transparent_6deg_18deg)]
                  [mask:radial-gradient(farthest-side,transparent_calc(100%-14px),#000_calc(100%-14px))]
                "
                aria-hidden="true"
              />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="Chân dung Dương Văn Tiến"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1">
            <p className="text-emerald-400/90 mb-3 tracking-wide">Software Developer</p>

            <h1 className="font-extrabold mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)', lineHeight: 1.05 }}>
              Xin chào, mình là
              <span className="block text-emerald-400">Dương Văn Tiến</span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8">
              Mình yêu thích tạo ra trải nghiệm số tinh gọn, thanh lịch và thành thạo nhiều ngôn ngữ
              & công nghệ để hiện thực hóa các sản phẩm đó.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="/CV.pdf"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition-all"
                download
              >
                Tải CV
                <span className="grid place-items-center w-6 h-6 rounded-full border border-emerald-400/60">
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>

              <button
                onClick={() => setActiveSection?.('contact')}
                className="px-5 sm:px-6 py-3 rounded-full bg-emerald-400 text-black hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 transition-all"
                type="button"
              >
                Thuê mình
              </button>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {socials.map(({ Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target={link.startsWith('http') ? '_blank' : undefined}
                  rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-full border border-emerald-400/50 hover:bg-emerald-400/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition-all"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-20 pt-8 md:pt-10 border-t border-white/5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { n: '12', l1: 'Năm', l2: 'kinh nghiệm' },
              { n: '26', l1: 'Dự án', l2: 'hoàn thành' },
              { n: '8', l1: 'Công nghệ', l2: 'thành thạo' },
              { n: '498', l1: 'Lần', l2: 'commit' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 tabular-nums">
                  {s.n}
                </div>
                <div className="text-slate-400 leading-tight text-xs sm:text-sm">
                  {s.l1}<br />{s.l2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
