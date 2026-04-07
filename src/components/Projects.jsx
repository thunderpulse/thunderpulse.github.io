const projects = [
  {
    id: 1,
    title: "Full Stack Portfolio Platform",
    subtitle: "React, Node.js, Express, MongoDB",
    tags: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    accent: "#f43f5e",
    features: [
      "Separate frontend and backend architecture",
      "RESTful APIs using Node.js and Express (MVC)",
      "Secure contact system via Nodemailer",
      "Applied rate limiting, validation, CORS, Helmet",
    ],
    github: "https://github.com/PinakiRath",
  },
  {
    id: 2,
    title: "GitFinder Analytics Platform",
    subtitle: "GitHub Profile Analyzer",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    accent: "#10b981",
    features: [
      "Analyze GitHub profiles & visualize repos in real-time",
      "Scalable backend APIs with Redis caching",
      "Implemented rate limiting & optimized API handling",
      "Custom responsive dashboards via React & Tailwind",
    ],
    github: "https://github.com/PinakiRath/gitfinder",
  },
  {
    id: 3,
    title: "Resume ATS Analyzer",
    subtitle: "AI-Powered Resume Scanner",
    tags: ["React", "Node.js", "MongoDB", "Gemini API"],
    accent: "#7c3aed",
    features: [
      "Evaluates resume compatibility with ATS systems",
      "PDF parsing & keyword skill extraction",
      "Integrated Gemini API for intelligent feedback",
      "MongoDB schema to store user data & reports",
    ],
    github: "https://github.com/PinakiRath/Resume-Analyzer",
  },
  {
    id: 4,
    title: "AutoFix-Code",
    subtitle: "AI Code Repair Tool",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "DeepSeek API"],
    accent: "#0ea5e9",
    features: [
      "Analyzes error logs to generate automated fix suggestions",
      "React + TypeScript UI with dynamic code comparison",
      "Backend services integrating AI APIs for repair",
      "Structured data handling using MongoDB",
    ],
    github: "https://github.com/PinakiRath/autofix-code",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 bg-section-alt">
      <div className="orb w-[600px] h-[600px] bg-violet-700 bottom-0 right-0 translate-x-1/3 translate-y-1/3" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">What I've Built</p>
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Real-world apps built with modern web technologies.
        </p>

        {/* Featured cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {projects.map((p) => (
            <article
              key={p.id}
              className="glass-card p-6 flex flex-col gap-4"
              style={{ "--accent": p.accent }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: p.accent, opacity: 0.8 }}>
                    {p.subtitle}
                  </p>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`project-${p.id}-github`}
                  title="GitHub"
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>

              {/* Divider */}
              <div className="h-px" style={{ background: `linear-gradient(to right, ${p.accent}40, transparent)` }} />

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/50">
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      style={{ color: p.accent }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: `${p.accent}14`, color: p.accent, border: `1px solid ${p.accent}28` }}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
