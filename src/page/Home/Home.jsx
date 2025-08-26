import { Download } from 'lucide-react';
import { socials } from '../../util/Social'
import CountUp from '../../hooks/CountUp';
import AnimatedText from '../../hooks/AnimatedText';
import { useTranslation } from 'react-i18next';
import avatar from '../../assets/avatar.jpg';

const Home = ({ setActiveSection }) => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex items-center bg-[#0c0e12] text-slate-100 pt-20 sm:pt-24">
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 md:gap-16">

          <div className="order-1 md:order-2 flex flex-col items-center">
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
                  src={avatar}
                  alt="Chân dung Dương Văn Tiến"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 mb-8">
            <p className="text-emerald-400/90 text-xl mb-3 tracking-wide">{t("home.role")}</p>

            <AnimatedText text={t("home.name")} />

            <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-8">
              {t("home.about")}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <a
                href="/CV.pdf"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 transition-all"
                download
              >
                {t("home.download_cv")}
                <span className="grid place-items-center w-6 h-6 rounded-full border border-emerald-400/60">
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>

              <button
                onClick={() => setActiveSection?.('contact')}
                className="px-5 sm:px-6 py-3 rounded-full bg-emerald-400 text-black hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 transition-all"
                type="button"
              >
                {t("home.hire_me")}
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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 justify-items-center sm:justify-items-start">
            {[
              { n: "2", label: t("home.stats.years") },
              { n: "26", label: t("home.stats.projects") },
              { n: "8", label: t("home.stats.tech") },
              { n: "498", label: t("home.stats.commits") },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100">
                  <CountUp end={Number(s.n)} duration={2000} />
                </div>
                <div className="text-slate-400 leading-tight text-xs sm:text-sm">
                  {s.label}
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
