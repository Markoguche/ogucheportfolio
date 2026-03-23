// src/layout/Footer.tsx
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Github, href: "https://github.com/Markoguche", label: "GitHub" },
  { icon: Linkedin, href: "http://linkedin.com/in/mark-oguche9", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_otmark", label: "Twitter" },
];

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border py-12">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00c4b8, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="font-display font-bold text-xl">
              <img src="/icon.svg" alt="Logo" />
            </a>
            <p className="text-xs text-muted-foreground mt-2 font-mono-dm">
              © {year} Mark Oguche — Built with React & Framer Motion
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-6">
            {links.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {label}
              </a>
            ))}
          </nav>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2 rounded-lg glass hover:border-primary/30 hover:text-primary transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
            <motion.a
              href="#hero"
              className="ml-2 p-2 rounded-lg glass hover:border-primary/30 hover:text-primary transition-all"
              aria-label="Back to top"
              whileHover={{ y: -2 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};
