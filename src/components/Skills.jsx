const categories = [
  {
    title: "Programming",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "C++", "Python"],
    accent: "#7c3aed",
  },
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Tailwind CSS", "Vite", "Context API"],
    accent: "#0ea5e9",
  },
  {
    title: "Backend & APIs",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
    accent: "#10b981",
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "MySQL", "Redis"],
    accent: "#f59e0b",
  },
  {
    title: "Platforms & Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Linux", "Postman", "Vercel", "Render"],
    accent: "#f43f5e",
  },
  {
    title: "Core Concepts",
    icon: "📚",
    skills: ["Data Structures", "Algorithms", "System Design", "OOP"],
    accent: "#8b5cf6",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 bg-section-base">
      <div className="orb w-[500px] h-[500px] bg-indigo-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container relative z-10">
        <p className="section-label text-center">What I Know</p>
        <h2 className="section-title text-center">Skills & Tools</h2>
        <p className="section-subtitle text-center mx-auto mb-8 sm:mb-14">
          Technologies and concepts I work with daily.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-card p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{
                    background: `${cat.accent}22`,
                    border: `1px solid ${cat.accent}40`,
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-sm">{cat.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full font-semibold cursor-default transition-all duration-200 hover:scale-105"
                    style={{
                      background: `${cat.accent}18`,
                      color: cat.accent,
                      border: `1px solid ${cat.accent}30`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
