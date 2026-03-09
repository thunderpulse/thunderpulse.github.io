export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Radial spotlight — gives a "stage light" effect over the animation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(109,40,217,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Dark overlay behind text area for improved readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, rgba(4,4,16,0.55) 0%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-36 flex flex-col items-center gap-5 sm:gap-7">

        {/* Status pill */}
        <div className="animate-fade-in inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-violet-500/25 text-xs sm:text-sm text-white/75 font-medium"
          style={{ background: "rgba(109,40,217,0.12)", backdropFilter: "blur(12px)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Open to opportunities · B.Tech CSE @ SOA University
        </div>

        {/* Name */}
        <h1
          className="animate-fade-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none text-white text-glow-white"
          style={{ letterSpacing: "-0.03em" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text text-glow-violet">Pinaki Rath</span>
        </h1>

        {/* Role */}
        <p className="animate-fade-up delay-100 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/65 tracking-wide">
          Full Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Java&nbsp;•&nbsp;React&nbsp;•&nbsp;Node.js
        </p>

        {/* Tagline */}
        <p className="animate-fade-up delay-200 text-sm sm:text-base md:text-lg text-white/50 max-w-2xl leading-relaxed px-2 sm:px-0">
          3rd year (6th Semester) CSE student at ITER, SOA — building MERN apps,
          exploring DSA, and crafting clean developer tools.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-1 w-full sm:w-auto items-center">
          <button
            id="hero-projects-btn"
            onClick={() => scrollTo("projects")}
            className="btn-glow w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <a
            id="hero-linkedin-btn"
            href="https://www.linkedin.com/in/pinakirath/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            id="hero-github-btn"
            href="https://github.com/PinakiRath"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full sm:w-auto justify-center text-sm sm:text-base"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-up delay-400 absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 animate-bounce hidden sm:flex">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}