const certs = [
  { id: 1, title: "Problem Solving", issuer: "HackerRank", emoji: "🏆", accent: "#f59e0b" },
  { id: 2, title: "Full Stack Developer Bootcamp", issuer: "GeeksforGeeks", emoji: "🌐", accent: "#10b981" },
  { id: 3, title: "AWS Fundamentals", issuer: "Intellipaat", emoji: "☁️", accent: "#ec4899" },
  { id: 4, title: "Introduction to Data Science", issuer: "Cisco Networking", emoji: "📊", accent: "#0ea5e9" },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-20 md:py-28 bg-section-base">
      <div className="orb w-96 h-96 bg-violet-500 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">Credentials</p>
        <h2 className="section-title text-center">Certifications</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Industry-recognised certificates earned through self-learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <div
              key={c.id}
              className="glass-card p-5 flex items-center gap-4"
            >
              {/* Emoji icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 hover:scale-110"
                style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30` }}
              >
                {c.emoji}
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-snug">{c.title}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"
                    style={{ color: c.accent }}>
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold" style={{ color: c.accent }}>{c.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
