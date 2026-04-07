const profiles = [
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "PinakiRath",
    url: "https://leetcode.com/u/PinakiRath/",
    desc: "Practising DSA — arrays, trees, dynamic programming.",
    accent: "#f59e0b",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.911l4.144 4.145a5.97 5.97 0 0 0 1.927 1.259c.7.295 1.467.44 2.241.44a6.054 6.054 0 0 0 1.61-.214 5.914 5.914 0 0 0 2.719-1.661l5.522-5.616a5.333 5.333 0 0 0 1.529-3.818 5.378 5.378 0 0 0-1.529-3.817l-1.527-1.545a1.374 1.374 0 0 0-1.943 0 1.373 1.373 0 0 0 0 1.943l1.527 1.546a2.624 2.624 0 0 1 .755 1.873 2.624 2.624 0 0 1-.755 1.874l-5.522 5.616a3.168 3.168 0 0 1-2.247.917 3.168 3.168 0 0 1-2.247-.917l-4.144-4.145a3.173 3.173 0 0 1-.657-1.002 3.177 3.177 0 0 1 0-2.433 3.168 3.168 0 0 1 .657-1.002l3.854-4.126L11.54 2.38a1.373 1.373 0 0 0 0-1.943A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 0 0-.961.438 1.373 1.373 0 0 0 0 1.943l3.305 3.305a1.374 1.374 0 0 0 1.943 0 1.373 1.373 0 0 0 0-1.943l-3.305-3.305a1.374 1.374 0 0 0-.982-.438z" />
      </svg>
    ),
  },
  {
    id: "geeksforgeeks",
    name: "GeeksforGeeks",
    handle: "pinakirak12",
    url: "https://www.geeksforgeeks.org/user/pinakirak12/",
    desc: "Algorithms, data structures & CS theory articles.",
    accent: "#10b981",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-1.106-.705 4.82 4.82 0 0 1-.79-1.065H9.231a4.82 4.82 0 0 1-.79 1.065 3.79 3.79 0 0 1-1.106.705 4.51 4.51 0 0 1-3.116.016 3.691 3.691 0 0 1-1.104-.695 3.495 3.495 0 0 1-.565-.745A2.948 2.948 0 0 1 2.24 13.2c0-.642.303-1.26.835-1.745.264-.241.57-.45.903-.612h16.044c.333.162.64.37.903.612.532.486.835 1.103.835 1.745a2.948 2.948 0 0 1-.31 1.115zM12 2.995l-4.8 7.65h9.6L12 2.996z" />
      </svg>
    ),
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    handle: "pinakirath99",
    url: "https://www.hackerrank.com/profile/pinakirath99",
    desc: "Certified in Problem Solving & React Basics.",
    accent: "#22c55e",
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.886-10.392-6c-.645-1.115-.645-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.254.097-.254.291v3.13H9.875V6.798c0-.194-.143-.292-.297-.292-.051 0-.103.016-.151.046L6.194 8.625a.55.55 0 0 0-.246.455v5.648c0 .462.406.842.746.842h.16c.192 0 .335-.194.335-.389v-3.328h4.166v3.328c0 .194.14.389.336.389h.16c.34 0 .746-.38.746-.842v-5.648a.55.55 0 0 0-.246-.455L12.447 6.845a.253.253 0 0 0-.152-.046z" />
      </svg>
    ),
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-16 sm:py-20 md:py-28 bg-section-alt">
      <div className="orb w-96 h-96 bg-emerald-600 top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">Competitive Coding</p>
        <h2 className="section-title text-center">Coding Profiles</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Where I practice and sharpen my problem-solving skills.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {profiles.map((p) => (
            <a
              key={p.id}
              id={`profile-${p.id}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col gap-5 group no-underline"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.accent}1a`, color: p.accent, border: `1px solid ${p.accent}30` }}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="font-bold text-white">{p.name}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: p.accent }}>
                    @{p.handle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-white/45 leading-relaxed flex-1">{p.desc}</p>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-white/30 group-hover:text-white/60 transition-colors">
                <span>Visit Profile</span>
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
