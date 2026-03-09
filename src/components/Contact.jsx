const contactItems = [
  {
    id: "contact-email",
    label: "Email",
    value: "pinakirath99@gmail.com",
    href: "mailto:pinakirath99@gmail.com",
    note: "Best for work enquiries",
    accent: "#7c3aed",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    id: "contact-phone",
    label: "Phone",
    value: "+91 7978976481",
    href: "tel:+917978976481",
    note: "Mon–Sat, 9 AM – 7 PM IST",
    accent: "#10b981",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    id: "contact-linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/pinakirath",
    href: "https://www.linkedin.com/in/pinakirath/",
    note: "Professional networking",
    accent: "#0ea5e9",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "contact-github",
    label: "GitHub",
    value: "github.com/PinakiRath",
    href: "https://github.com/PinakiRath",
    note: "Browse my open-source work",
    accent: "#94a3b8",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-section-base">
      <div className="orb w-[500px] h-[500px] bg-violet-600 bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-14">
          <p className="section-label">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Actively looking for internship and full-time opportunities. Reach
            out anytime — I respond within 24 hours.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contactItems.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-start gap-4 no-underline group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${item.accent}18`, color: item.accent, border: `1px solid ${item.accent}30` }}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-sm">{item.label}</p>
                <p className="font-semibold text-sm truncate mt-0.5" style={{ color: item.accent }}>
                  {item.value}
                </p>
                <p className="text-white/30 text-xs mt-1">{item.note}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-white/15 text-sm mt-20">
          © {new Date().getFullYear()} Pinaki Rath · Built with React, Vite & UnicornStudio ✨
        </p>
      </div>
    </section>
  );
}
