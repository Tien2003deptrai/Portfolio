import { Link } from "react-router-dom";
import { certifications } from "../../util/Certs";

const Certifications = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-30 bg-[#0c0e12]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <Link key={index} to={`/certifications/${cert.id}`} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg overflow-hidden cursor-pointer block transition-all duration-300 hover:scale-105">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-slate-100">
                  {cert.title}
                </h3>
                <p className="text-sm text-emerald-400 font-medium">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
