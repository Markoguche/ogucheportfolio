// src/layout/Navbar.tsx
import { Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 30);
      if (latest > lastScrollY.current && latest > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = latest;
    });
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: "-110%", opacity: 0 } }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 border-b"
        animate={{
          backgroundColor: scrolled ? "rgba(6, 10, 14, 0.85)" : "transparent",
          borderColor: scrolled ? "rgba(30, 44, 58, 0.5)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
      />

      <nav className="relative z-10 max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="font-display font-bold text-lg tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
    
            <img src="/icon.svg" alt="Mark Oguche" className="h-8 w-auto" />
           </motion.a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-1 p-1 rounded-full glass">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <a key={link.href} href={link.href} className="relative px-4 py-2 text-sm rounded-full transition-colors duration-200">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className={`relative z-10 font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:oguchemark9@gmail.com"
            className="btn-primary text-sm py-2.5 px-5 rounded-lg"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden relative z-50 p-2 rounded-lg glass"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMobileMenuOpen ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed inset-0 bg-background/96 backdrop-blur-2xl pt-20 z-40"
          >
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center justify-between py-4 border-b border-border text-2xl font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                  <span className="text-primary text-base font-mono-dm">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                href="mailto:oguchemark9@gmail.com"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 btn-primary justify-center rounded-lg"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
