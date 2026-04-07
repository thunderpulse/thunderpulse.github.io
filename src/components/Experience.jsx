export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 bg-section-base relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-blue-600 top-0 left-0 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">My Professional Journey</p>
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Where I have worked and what I have achieved.
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Experience Item */}
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            {/* Decorative accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 group-hover:w-1.5 transition-all duration-300" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  PwC Launchpad 2026 – Data Engineering Track
                </h3>
                <p className="text-blue-400 font-semibold text-sm">
                  PwC Acceleration Center India
                </p>
              </div>
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium whitespace-nowrap">
                Feb 2026 – Present
              </div>
            </div>

            <ul className="space-y-3 mt-6">
              {[
                "Built and optimized Python-based data pipelines to process and transform large-scale datasets into actionable insights",
                "Applied scalable data engineering practices and workflow automation to improve processing efficiency",
                "Gained hands-on exposure to enterprise data governance, security standards, and production-level system design",
                "Collaborated in a structured, high-performance environment simulating real-world engineering workflows"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/70 text-sm">
                  <svg className="w-5 h-5 flex-shrink-0 text-blue-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
