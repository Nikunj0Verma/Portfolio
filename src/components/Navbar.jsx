import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { label: "About", id: "#about" },
  { label: "Skills", id: "#skills" },
  { label: "Projects", id: "#work" },
  { label: "Education", id: "#education" },
  { label: "Contact", id: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (id) => {
    setActiveSection(id);
    setOpen(false);

    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      let current = "#about";
      navItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            current = item.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [!open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      } ${open ? "backdrop-blur-xl" : "bg-transparent"}`}
    >
      
      <div className="mx-auto flex max-w-[67rem] items-center justify-between gap-4 px-5 py-4">
        <a href="#about" className="flex items-center gap-3 group">
          <div
            className="w-12 h-12 rounded-xl bg-zinc-900
                    border border-zinc-700
                    flex items-center justify-center
                    transition-all duration-300
                    hover:border-violet-500
                        hover:shadow-[0_0_20px_rgba(168,85,247,.35)]"
          >
            <span className="text-2xl font-black tracking-tight">
              <span className="text-white">N</span>
              <span className="text-violet-400">V</span>
            </span>
          </div>
        </a>

        <nav className={`hidden md:flex space-x-8 text-gray-300`}>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                  className={`text-sm transition cursor-pointer ${
                    activeSection === item.id
                      ? "text-purple-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`${open ? "hidden" : "hidden md:flex"} items-center gap-3`}>
          <a
            href="https://github.com/Nikunj0Verma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-violet-800/40"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nikunjverma000/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-violet-800/40"
          >
            <FaLinkedin />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-slate-800/80 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-transparent border-white/10 backdrop-blur-xl px-5 pb-5 pt-4 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                  activeSection === item.id
                    ? "bg-violet-500/40 text-purple-400"
                    : "bg-white/5 text-white hover:bg-violet-500/20"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-white/10 mt-2">
              <a
                href="https://github.com/Nikunj0Verma"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-violet-800/40"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/nikunjverma000/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-violet-800/40"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;