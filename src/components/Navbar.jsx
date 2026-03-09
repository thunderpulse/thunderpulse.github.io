import { useEffect, useState } from "react";

const links = [
  { label: "Home",       href: "#home" },
  { label: "Education",  href: "#education" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Certs",     href: "#certificates" },
  { label: "Profiles",  href: "#profiles" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.06]"
          : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(4, 4, 18, 0.82)"
          : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-16">
        {/* ── Logo ── */}
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-2.5 group select-none"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-base text-white transition-transform duration-300 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              boxShadow: "0 0 18px rgba(124,58,237,0.45)",
            }}
          >
            P
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Pinaki<span style={{ color: "#a78bfa" }}>.</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="px-3.5 py-2 text-sm font-medium text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="btn-glow ml-4 text-sm !px-5 !py-2"
          >
            Hire Me
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          id="nav-mobile-btn"
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-xl hover:bg-white/[0.07] transition-colors"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen" : "max-h-0"
        }`}
        style={{
          background: "rgba(4, 4, 18, 0.95)",
          backdropFilter: "blur(24px)",
          borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="px-4 py-3 text-sm font-medium text-white/65 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => go(e, "#contact")}
            className="btn-glow mt-2 justify-center text-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
