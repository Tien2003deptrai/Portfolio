import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", key: "home", label: t("nav.home") },
    { to: "/about", key: "about", label: t("nav.about") },
    { to: "/certifications", key: "certifications", label: t("nav.certifications") },
    { to: "/projects", key: "projects", label: t("nav.projects") },
    { to: "/contact", key: "contact", label: t("nav.contact") },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e12]/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between relative">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              {t("nav.person")}
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <NavLink
                    key={item.key}
                    to={item.to}
                    className={`relative px-4 py-2 transition-all duration-300 ${isActive
                      ? "text-emerald-400"
                      : "text-slate-400 hover:text-slate-100"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                    )}
                  </NavLink>
                );
              })}

              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Globe size={18} />
                  <span className="uppercase">{i18n.language}</span>
                  <ChevronDown size={16} className={`${langOpen ? "rotate-180" : ""} transition-transform`} />
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-[#1a1d23] border border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`w-full px-4 py-2 text-left hover:bg-emerald-500/20 ${i18n.language === "en" ? "text-emerald-400" : "text-slate-300"
                        }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => changeLanguage("vi")}
                      className={`w-full px-4 py-2 text-left hover:bg-emerald-500/20 ${i18n.language === "vi" ? "text-emerald-400" : "text-slate-300"
                        }`}
                    >
                      Tiếng Việt
                    </button>
                  </div>
                )}
              </div>
            </div>

            <button
              className="md:hidden text-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0e12]/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-2xl transition-colors ${isActive
                  ? "text-emerald-400"
                  : "text-slate-400 hover:text-slate-100"
                  }`}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 rounded-lg border ${i18n.language === "en"
                  ? "border-emerald-500 text-emerald-400"
                  : "border-slate-500 text-slate-300"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("vi")}
                className={`px-4 py-2 rounded-lg border ${i18n.language === "vi"
                  ? "border-emerald-500 text-emerald-400"
                  : "border-slate-500 text-slate-300"
                  }`}
              >
                VI
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
