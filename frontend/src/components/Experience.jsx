export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 bg-section-alt">
      <div className="orb w-[500px] h-[500px] bg-rose-600 top-1/2 left-1/4 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">My Professional Journey</p>
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Where I've worked and what I've learned along the way.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600" />
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  PwC Launchpad 2026 – Data Engineering Track
                </h3>
                <p className="text-rose-500 font-semibold mb-1">
                  PwC Acceleration Center India
                </p>
                <p className="text-white/40 text-sm">Feb 2026 – Present</p>
              </div>
              <div className="flex-shrink-0">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                  Current
                </span>
              </div>
            </div>

            <ul className="flex flex-col gap-3 mt-4">
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Built and optimized Python-based data pipelines to process and transform large-scale datasets into actionable insights
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Applied scalable data engineering practices and workflow automation to improve processing efficiency
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Gained hands-on exposure to enterprise data governance, security standards, and production-level system design
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Collaborated in a structured, high-performance environment simulating real-world engineering workflows
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
