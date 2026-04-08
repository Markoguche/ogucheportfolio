// src/sections/Projects.tsx
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, TextReveal } from "../components/Motion";

const projects = [
  
  {
    number: "01",
    title: "ServeLead Global Website",
    category: "Corporate · Marketing",
    description:
      "Rebuilt the company website from the ground up with cinematic scroll animations, GSAP-powered transitions, and fully responsive layouts. Achieved top Core Web Vitals scores post-launch.",
    image: "/projects/project3.png",
    tags: ["Next js", "GSAP", "Tailwind CSS"],
    link: "https://serveleadglobal.net",
    github: "https://github.com/Markoguche/SLG",
    accent: "#f59e0b",
  },

  {
    number: "02",
    title: "Global Mentorship Program",
    category: "SaaS · Marketplace",
    description:
      "Matchmaking web app enabling startup founders to connect with industry mentors. Integrated Paystack for paid sessions, built with TypeScript and React for full type safety and scalable architecture.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Paystack API"],
    link: "https://mentorship.serveleadglobal.net/",
    github: "https://github.com/Markoguche/GlobalMentorship",
    accent: "#7c3aed",
  },

  {
    number: "03",
    title: "NINTV Community Portal",
    category: "Community · Web App",
    description:
      "Full digital presence for the Igbo community in Tees Valley, UK. Built with Next.js featuring event management, animated pages, and seamless mobile experience that brought a physical community online.",
    image: "/projects/project1.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://www.ndiigbonateesvalley.com/",
    github: "https://github.com/Markoguche/IgboUnion",
    accent: "#00c4b8",
  },

  {
    number: "04",
    title: "Respectech Website",
    category: "Corporate · Branding",
    description:
      "Complete redesign for a tech company — new visual identity, smooth page transitions, and performance-optimized builds. Brought Figma designs to life with precision and polished micro-interactions.",
    image: "/projects/project4.png",
    tags: ["React", "GSAP", "CSS Animations"],
    link: "https://respectech.vercel.app/",
    github: "https://github.com/Markoguche/RespecTech",
    accent: "#ef4444",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className="group relative glass-card rounded-2xl overflow-hidden"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live site: ${project.title}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code: ${project.title}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass border border-border-bright text-sm font-medium hover:border-primary/30 transition-colors"
            >
              <Github className="w-4 h-4" /> Source
            </a>
          </div>

          {/* Number badge */}
          <div className="absolute top-4 left-4 font-mono-dm font-bold text-xs text-muted-foreground/50">
            {project.number}
          </div>

          {/* Accent corner */}
          <div
            className="absolute top-0 right-0 w-20 h-20 opacity-30 blur-xl"
            style={{ background: project.accent }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono-dm text-xs text-muted-foreground/60 mb-1">{project.category}</p>
              <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                shrink-0 
                flex items-center gap-2
                px-3 py-2
                md:w-9 md:h-9 md:p-0 md:justify-center
                rounded-lg glass border border-border-bright
                text-muted-foreground hover:text-primary hover:border-primary/30
                transition-all
              "
              whileHover={{ rotate: 15, scale: 1.1 }}
              aria-label={`Visit ${project.title}`}
            >
              <ArrowUpRight className="w-4 h-4" />
              <span className="text-sm md:hidden">Live Site</span>
            </motion.a>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden" aria-labelledby="projects-heading">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,196,184,0.05) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal>
            <span className="section-label mb-6 block w-fit">Featured Work</span>
            <h2 id="projects-heading" className="font-display font-bold text-5xl md:text-6xl leading-tight">
              <TextReveal>Projects that</TextReveal>
              <br />
              <TextReveal>move the needle.</TextReveal>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="shrink-0">
            <a
              href="https://github.com/Markoguche"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm"
            >
              <Github className="w-4 h-4" /> All projects
            </a>
          </ScrollReveal>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
