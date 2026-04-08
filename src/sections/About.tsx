// src/sections/About.tsx
import { motion } from "framer-motion";
import { TextReveal, ScrollReveal } from "../components/Motion";
import { Code2, Zap, Users, Compass, MapPin, GraduationCap, Rocket, Target, Globe } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Engineering-first",
    body: "Clean, maintainable code that's a pleasure to work in. I believe great DX leads to great UX.",
  },
  {
    icon: Zap,
    title: "Performance obsessed",
    body: "Every millisecond matters. I obsess over Core Web Vitals, bundle sizes, and render cycles.",
  },
  {
    icon: Users,
    title: "Design-aware",
    body: "I speak both design and code — bridging Figma to production with pixel-perfect fidelity.",
  },
  {
    icon: Compass,
    title: "Constantly evolving",
    body: "The web moves fast. I stay ahead by building, experimenting, and sharing what I learn.",
  },
];

// Removed 'level' property as all bars will be full
const skills = [
  { name: "React / Next.js" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Framer Motion / GSAP" },
  { name: "API Integration" },
  { name: "Performance Optimization" },
];

// Updated SkillBar: removed percentage display, set width to 100%
const SkillBar = ({ name, delay }: { name: string; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        {/* Percentage text removed */}
      </div>
      <div className="h-1.5 bg-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #00c4b8, #7c3aed)" }}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }} // Always fills to 100%
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  </ScrollReveal>
);

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <ScrollReveal className="mb-20">
          <span className="section-label mb-6 block w-fit">About Me</span>
          <h2 id="about-heading" className="font-display font-bold text-5xl md:text-6xl leading-tight max-w-3xl">
            <TextReveal>I turn complex problems into elegant interfaces.</TextReveal>
          </h2>
        </ScrollReveal>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Story + quote */}
          <div className="space-y-8">
            <ScrollReveal>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Frontend Engineer with <span className="text-foreground font-medium">3+ years</span> of experience
                building everything from community portals to global mentorship platforms. My approach is equal parts
                engineering rigour and design sensibility.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">
                I currently lead frontend at <span className="text-foreground font-medium">ServeLead Global</span>,
                where I architect scalable React apps, integrate payment systems, and build the kind of web experiences
                that make users stop and say <em className="text-primary not-italic">"this actually feels good."</em>
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <figure className="relative pl-6 border-l-2 border-primary">
                <blockquote className="text-lg font-medium italic text-foreground/90 leading-relaxed">
                  "The best frontend work is invisible — users just feel like everything works exactly as it should."
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground font-mono-dm">— Mark Oguche</figcaption>
              </figure>
            </ScrollReveal>

            {/* Skill bars */}
            <div className="space-y-4 pt-4">
              {skills.map((s, i) => (
                <SkillBar key={s.name} name={s.name} delay={i * 0.08} />
              ))}
            </div>
          </div>

          {/* Right: Value cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <motion.div
                  className="glass-card rounded-2xl p-6 h-full group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4
                    group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>
              </ScrollReveal>
            ))}

            {/* Fun facts card */}
            <ScrollReveal delay={0.4} className="sm:col-span-2">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-widest mb-4 font-mono-dm">
                  Quick facts
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    { icon: MapPin, text: "Abuja, Nigeria" },
                    { icon: GraduationCap, text: "Self-taught Engineer" },
                    { icon: Rocket, text: "Ships in React + Next.js" },
                    { icon: Target, text: "Open to remote roles" },
                    { icon: Zap, text: "Speed & polish fanatic" },
                    { icon: Globe, text: "Working globally" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-muted-foreground">
                      <Icon className="w-4 h-4 text-primary" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};