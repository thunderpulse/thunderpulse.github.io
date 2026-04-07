const subjects = ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-28 bg-section-alt">
      {/* Glow orbs */}
      <div className="orb w-96 h-96 bg-violet-600 top-0 right-0 translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">Academic Background</p>
        <h2 className="section-title text-center">Education</h2>

        <div className="mt-8 sm:mt-12 glass-card p-5 sm:p-8 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            {/* Icon + Text */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)", boxShadow: "0 0 24px rgba(124,58,237,0.35)" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-violet-400 font-semibold text-sm mt-1">
                    ITER, SOA University · Bhubaneswar, Odisha
                  </p>
                  <p className="text-white/35 text-sm mt-0.5">Aug 2023 – Jul 2027</p>
                </div>
              </div>

              {/* Core subjects */}
              <div className="flex flex-wrap gap-2 mt-4">
                {subjects.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-1 gap-3 md:w-36">
              {[
                { value: "8.78", label: "CGPA" },
                { value: "3rd", label: "Year" },
                { value: "6th", label: "Semester" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-4 py-3 rounded-xl border border-white/[0.08]"
                  style={{ background: "rgba(124,58,237,0.10)" }}
                >
                  <p className="text-2xl font-black gradient-text">{stat.value}</p>
                  <p className="text-white/35 text-xs font-semibold mt-0.5 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
