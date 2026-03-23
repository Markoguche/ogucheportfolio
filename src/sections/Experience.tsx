// src/sections/Experience.tsx
import { motion } from "framer-motion";
import { ScrollReveal, TextReveal } from "../components/Motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    period: "Aug 2025 — Present",
    isoDate: "2025-08",
    role: "Lead Frontend Developer",
    company: "ServeLead Global",
    companyUrl: "https://serveleadglobal.vercel.app/",
    description:
      "Leading frontend architecture across multiple digital initiatives. Built the Mentorship Platform with React & TypeScript, integrated Paystack payment flows, and implemented QR-based secure access control systems for RescueTap.",
    highlights: [
      "Architected scalable component library used across 3 products",
      "Integrated Paystack API for subscription & one-time payments",
      "Reduced bundle size by 40% through code-splitting",
    ],
    technologies: ["React", "TypeScript", "GSAP", "Paystack API", "Tailwind"],
    current: true,
  },
  {
    period: "Feb 2025 — Present",
    isoDate: "2025-02",
    role: "Web Developer",
    company: "NINTV",
    companyUrl: "https://www.ndiigbonateesvalley.com/",
    description:
      "Spearheading full digital presence for the Igbo community in Tees Valley. Designed animated event pages, integrated Google Sheets for community workflows, and managed DNS infrastructure end-to-end.",
    highlights: [
      "Built responsive event management interface",
      "Integrated Google Sheets API for live data workflows",
      "Managed domain, DNS & Vercel deployment pipeline",
    ],
    technologies: ["Next.js", "Framer Motion", "Google Sheets API"],
    current: true,
  },
  {
    period: "Jan 2024 — Mar 2025",
    isoDate: "2024-01",
    role: "Front-End Developer",
    company: "Saw-T Concept",
    description:
      "Designed modular UI components and interactive dashboards. Collaborated with backend engineers to integrate third-party APIs and built data visualization features that improved client reporting.",
    highlights: [
      "Built reusable component library reducing dev time by 30%",
      "Integrated REST APIs for real-time data dashboards",
      "Collaborated directly with Figma design team",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    current: false,
  },
  {
    period: "Sept 2023 — Oct 2024",
    isoDate: "2023-09",
    role: "WordPress Developer",
    company: "Boro Digital Dynamics",
    description:
      "Translated Figma wireframes into pixel-perfect responsive web components. Optimised sites through lazy loading and image compression, significantly improving Core Web Vitals scores.",
    highlights: [
      "Achieved 90+ Lighthouse scores on all projects",
      "Converted 6 Figma designs to production sites",
      "Implemented lazy loading for 60% faster page loads",
    ],
    technologies: ["React", "WordPress", "Tailwind CSS", "Figma"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden" aria-labelledby="experience-heading">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,196,184,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <span className="section-label mb-6 block w-fit">Career Journey</span>
          <h2 id="experience-heading" className="font-display font-bold text-5xl md:text-6xl leading-tight">
            <TextReveal>Experience that</TextReveal>
            <br />
            <TextReveal>speaks volumes.</TextReveal>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] md:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #00c4b8, rgba(0,196,184,0.15), transparent)" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-10 pl-14 md:pl-24">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.12}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[56px] md:-left-[73px] top-7 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center"
                      style={{ boxShadow: "0 0 12px rgba(0,196,184,0.4)" }}>
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    {exp.current && (
                      <div className="absolute w-5 h-5 rounded-full bg-primary opacity-30 animate-ping" />
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    className="glass-card rounded-2xl p-7"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <time dateTime={exp.isoDate} className="font-mono-dm text-xs text-primary">
                            {exp.period}
                          </time>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono-dm">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-xl">{exp.role}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Briefcase className="w-3.5 h-3.5 text-muted-foreground" />
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                              className="text-muted-foreground text-sm hover:text-primary transition-colors">
                              {exp.company}
                            </a>
                          ) : (
                            <span className="text-muted-foreground text-sm">{exp.company}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1 shrink-0">›</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
