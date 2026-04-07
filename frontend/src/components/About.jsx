const skills = [
  { name: "React", icon: "⚛️", color: "from-cyan-500/20 to-sky-500/10 border-cyan-500/30" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30" },
  { name: "C++", icon: "🔧", color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30" },
  { name: "SQL", icon: "🗄️", color: "from-green-500/20 to-emerald-500/10 border-green-500/30" },
  { name: "TypeScript", icon: "🔷", color: "from-blue-600/20 to-blue-400/10 border-blue-600/30" },
  { name: "Node.js", icon: "🟢", color: "from-green-600/20 to-green-400/10 border-green-600/30" },
  { name: "Git", icon: "🌿", color: "from-orange-500/20 to-red-500/10 border-orange-500/30" },
  { name: "REST APIs", icon: "🌐", color: "from-purple-500/20 to-violet-500/10 border-purple-500/30" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-dark-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left — Bio */}
          <div className="flex-1">
            <p className="text-primary-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="section-heading">
              Passionate about<br />
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                clean code & great UX.
              </span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-base mt-6">
              <p>
                I'm a full-stack developer with a love for building things that
                live on the internet. From sleek frontends to solid backend
                systems, I enjoy solving real problems with elegant code.
              </p>
              <p>
                My journey started with C++ and competitive programming, which
                gave me a strong algorithmic foundation. I then transitioned into
                web development, specialising in the React ecosystem.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source,
                reading about system design, or tinkering with side projects.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-8">
              {[
                { value: "15+", label: "Projects Built" },
                { value: "2+", label: "Years Experience" },
                { value: "100%", label: "Passion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-sm text-white/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Skills */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">
              Tech Stack
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br border ${skill.color} hover:scale-[1.03] transition-transform duration-200 cursor-default`}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold text-white text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
