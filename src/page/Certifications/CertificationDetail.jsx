import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { certifications } from "../../util/Certs";

const CertificationDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const cert = certifications.find(c => c.id === id);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-30 bg-[#0c0e12]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div
            className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-[460px] object-contain bg-black"
            />
          </div>

          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100">{cert.title}</h1>
            <p className="text-emerald-400 font-medium">{cert.issuer} • {cert.date}</p>
            <p className="text-slate-300 leading-relaxed">{cert.longDesc || cert.desc}</p>

            {cert.skills?.length > 0 && (
              <div>
                <h3 className="text-slate-200 font-semibold mb-2">{t('certificationDetail.skills')}</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((s) => (
                    <span key={s} className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                {t('certificationDetail.viewCredential')}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationDetail;


