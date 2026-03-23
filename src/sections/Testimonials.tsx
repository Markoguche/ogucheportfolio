// src/sections/Testimonials.tsx
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Magnetic, ScrollReveal } from "../components/Motion";

const testimonials = [
  {
    quote: "Mark is one of the most talented frontend engineers I've worked with. His ability to translate complex UI designs into functional code is unmatched. He brought our vision to life with speed and precision.",
    author: "Chinedu Okafor",
    role: "Product Manager, Paystack",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    company: "Paystack",
  },
  {
    quote: "Working with Mark was a game-changer for our agency. He took our Figma designs and brought them to life in a way that exceeded every expectation — pixel-perfect, smooth, and ahead of schedule. Rare talent.",
    author: "Amaka Obi",
    role: "Creative Director, Noir Studios Lagos",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop",
    company: "Noir Studios",
  },
  {
    quote: "Mark has a unique ability to bridge the gap between design vision and engineering reality. He built our entire mentorship platform in React — clean code, great UX, zero rework. Would hire again without hesitation.",
    author: "Adaeze Nwosu",
    role: "Founder, GlobalMentorship",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    company: "GlobalMentorship",
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [autoplay]);

  const navigate = (dir: "next" | "prev") => {
    setAutoplay(false);
    setActive((p) =>
      dir === "next" ? (p + 1) % testimonials.length : (p - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(0,196,184,0.04) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="section-label mb-6 inline-block">Kind Words</span>
          <h2 id="testimonials-heading" className="font-display font-bold text-5xl md:text-6xl">
            What people say.
          </h2>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative glass-card rounded-3xl p-10 md:p-14"
            >
              {/* Large quote mark */}
              <div className="absolute top-8 right-10 opacity-8" aria-hidden="true">
                <Quote className="w-20 h-20 text-primary/10" strokeWidth={1} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-10">
                "{testimonials[active].quote}"
              </blockquote>

              <figcaption className="flex items-center gap-4">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <cite className="not-italic font-display font-semibold text-foreground block">
                    {testimonials[active].author}
                  </cite>
                  <span className="text-sm text-muted-foreground">{testimonials[active].role}</span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => { setAutoplay(false); setActive(i); }}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === active ? "w-8 bg-primary" : "w-1.5 bg-border-bright hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <Magnetic>
                <button
                  onClick={() => navigate("prev")}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-xl glass hover:border-primary/30 hover:text-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={() => navigate("next")}
                  aria-label="Next testimonial"
                  className="p-3 rounded-xl glass hover:border-primary/30 hover:text-primary transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};