import { ArrowRight, Github, Linkedin, Twitter, Download, Sparkles } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { Magnetic, TextReveal, FadeIn } from "../components/Motion";
import { useRef } from "react";


const skills = [
  "React", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS",
  "GSAP", "Figma", "Node.js", "Vercel", "GitHub Actions", "Paystack",
];

const stats = [
  { value: "3+", label: "Years building" },
  { value: "12+", label: "Projects shipped" },
  { value: "100%", label: "Client satisfaction" },
];

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,196,184,0.07) 0%, transparent 70%)" }} />
        <div className="absolute top-[20%] right-[15%] w-100 h-100 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)" }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: i % 3 === 0 ? "#00c4b8" : i % 3 === 1 ? "#7c3aed" : "#f59e0b",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -(Math.random() * 80 + 40), 0],
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* ── Left column ── */}
          <div className="space-y-8">

            {/* Status badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-muted-foreground font-mono-dm text-xs tracking-widest uppercase">Available for work</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold leading-[1.05] tracking-tight text-5xl md:text-6xl lg:text-[72px]">
                <span className="block overflow-hidden">
                  <TextReveal>Frontend Engineer</TextReveal>
                </span>
                <span className="block overflow-hidden mt-1">
                  <TextReveal className="gradient-text">who ships</TextReveal>
                </span>
                <span className="block overflow-hidden mt-1">
                  <TextReveal>fast & beautifully.</TextReveal>
                </span>
              </h1>
            </div>

            {/* Sub */}
            <FadeIn delay={0.7}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                I'm <span className="text-foreground font-medium">Mark Oguche</span> — a Frontend Engineer based in Abuja, Nigeria.
                I build production-grade web experiences using React, Next.js & TypeScript that are fast,
                accessible, and polished down to the pixel.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.85}>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work <ArrowRight className="w-4 h-4" />
                </a>
                <Magnetic>
                  <a href="/OGUCHE MARK Resume.pdf" download>
                    <AnimatedBorderButton>
                      <Download className="w-4 h-4" /> Download CV
                    </AnimatedBorderButton>
                  </a>
                </Magnetic>
              </div>
            </FadeIn>

            {/* Social links */}
            <FadeIn delay={1}>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground font-mono-dm tracking-widest uppercase">Find me on</span>
                <div className="h-px w-8 bg-border-bright" />
                {[
                  { icon: Github, href: "https://github.com/Markoguche", label: "GitHub" },
                  { icon: Linkedin, href: "http://linkedin.com/in/mark-oguche9", label: "LinkedIn" },
                  { icon: Twitter, href: "https://x.com/_otmark", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <Magnetic key={label} strength={0.4}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="p-2.5 rounded-lg glass hover:border-primary/30 hover:text-primary transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right column: Profile card ── */}
          <FadeIn delay={0.4} className="relative">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-2xl opacity-30"
                style={{ background: "conic-gradient(from 0deg, transparent 0%, #00c4b8 25%, transparent 50%, #7c3aed 75%, transparent 100%)", filter: "blur(20px)" }} />

              {/* Profile card */}
              <div className="relative glass-card rounded-2xl overflow-hidden">
                <div className="aspect-3/4 relative bg-linear-to-br from-surface to-card">
                  <img
                    src="/profile-photo.png"
                    alt="Mark Oguche — Frontend Engineer"
                    className="w-full h-full object-cover"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-display font-bold text-2xl">Mark Oguche</p>
                    <p className="text-primary text-sm font-mono-dm mt-0.5">Frontend Engineer</p>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -left-8 top-12 glass rounded-xl p-3 border border-border-bright"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg text-primary leading-none">3+</div>
                    <div className="text-xs text-muted-foreground">Years exp.</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 bottom-24 glass rounded-xl p-3 border border-border-bright"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="text-xs text-muted-foreground mb-0.5 font-mono-dm">Projects shipped</div>
                <div className="font-display font-bold text-xl text-foreground">12+</div>
              </motion.div>
            </div>
          </FadeIn>
        </div>

        {/* ── Stats strip ── */}
        <FadeIn delay={1.1}>
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-3xl text-foreground">{value}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono-dm">{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </motion.div>

      {/* ── Skills marquee ── */}
      <div className="relative z-10 border-t border-b border-border py-5 overflow-hidden mt-auto">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="flex items-center gap-6 px-8">
              <span className="font-mono-dm text-sm text-muted-foreground/60 hover:text-primary transition-colors whitespace-nowrap">
                {skill}
              </span>
              <span className="text-border-bright">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
