// src/components/Motion.tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export const Magnetic = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ children, className = "" }: { children: string; className?: string }) => {
  const words = children.split(" ");
  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.28em] ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
    >
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  );
};

export const ScrollReveal = ({
  children, className = "", delay = 0, direction = "up"
}: {
  children: ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" | "none";
}) => {
  const dirMap = { up: { y: 40 }, left: { x: -40 }, right: { x: 40 }, none: {} };
  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction], filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const CountUp = ({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  return (
    <motion.span ref={nodeRef}
      onViewportEnter={() => {
        motionVal.set(0);
        const animation = { type: "tween" as const, duration, ease: "easeOut" };
        motionVal.set(end);
        // Simple re-animate on enter
      }}
      className="tabular-nums"
    >
      <motion.span>{rounded}</motion.span>{suffix}
    </motion.span>
  );
};
