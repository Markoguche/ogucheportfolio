// src/sections/Contact.tsx
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ScrollReveal, TextReveal } from "../components/Motion";

const contactInfo = [
  { icon: Mail, label: "Email", value: "oguchemark9@gmail.com", href: "mailto:oguchemark9@gmail.com" },
  { icon: Phone, label: "Phone", value: "+234 813 479 5983", href: "tel:+2348134795983" },
  { icon: MapPin, label: "Location", value: "Abuja, Nigeria (Open to remote)", href: "#" },
];

const socials = [
  { icon: Github, href: "https://github.com/Markoguche", label: "GitHub" },
  { icon: Linkedin, href: "http://linkedin.com/in/mark-oguche9", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_otmark", label: "Twitter" },
];

type Status = { type: "success" | "error" | null; message: string };

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const env = (import.meta as any).env;
      await emailjs.send(
        env.VITE_EMAILJS_SERVICE_ID,
        env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form },
        env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: "success", message: "Message sent! I'll be in touch within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus({ type: "error", message: "Something went wrong. Please email me directly." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-surface/80 rounded-xl border border-border-bright text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all duration-200";

  return (
    <section id="contact" className="py-32 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{ background: "radial-gradient(ellipse at bottom, rgba(0,196,184,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-6 inline-block">Get In Touch</span>
          <h2 id="contact-heading" className="font-display font-bold text-5xl md:text-6xl mb-4">
            <TextReveal className="justify-center">Let's build something</TextReveal>
            <br />
            <TextReveal className="justify-center gradient-text">extraordinary.</TextReveal>
          </h2>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? I'm currently open to new opportunities —
            whether it's freelance, contract, or a full-time role.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-widest font-mono-dm">Name</label>
                    <input id="name" type="text" required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-widest font-mono-dm">Email</label>
                    <input id="email" type="email" required placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-widest font-mono-dm">Subject</label>
                  <input id="subject" type="text" placeholder="Project inquiry / Hire me / Collab" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-2 uppercase tracking-widest font-mono-dm">Message</label>
                  <textarea id="message" rows={5} required value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, and budget..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 rounded-xl">
                  {loading ? (
                    <><span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>

                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                      status.type === "success"
                        ? "bg-green-500/8 border border-green-500/20 text-green-400"
                        : "bg-red-500/8 border border-red-500/20 text-red-400"
                    }`}
                    role="alert"
                  >
                    {status.type === "success" ? <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                    {status.message}
                  </motion.div>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Info sidebar */}
          <div className="space-y-4">
            <ScrollReveal delay={0.1}>
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <h3 className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground font-mono-dm">Contact Info</h3>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-3 group py-2 rounded-lg hover:pl-2 transition-all duration-200">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-mono-dm">{label}</div>
                      <div className="text-sm font-medium text-foreground/90">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Availability card */}
            <ScrollReveal delay={0.2}>
              <div className="glass-card rounded-2xl p-6 border border-green-500/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="font-medium text-sm text-green-400">Currently Available</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open to freelance, contract & full-time frontend roles. Response time: typically within 24 hours.
                </p>
              </div>
            </ScrollReveal>

            {/* Socials */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-mono-dm text-xs text-muted-foreground uppercase tracking-widest mb-4">Elsewhere</h3>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl glass border border-border-bright hover:border-primary/30 hover:text-primary text-sm font-medium transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </a>
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
