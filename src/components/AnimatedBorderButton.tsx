// src/components/AnimatedBorderButton.tsx
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AnimatedBorderButton = ({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative bg-transparent border border-[#1e2c3a]
        text-foreground transition-all duration-500 focus:outline-none group 
        px-7 py-3.5 text-sm font-medium rounded-lg overflow-visible 
        animated-border ${className}`}
    >
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 54"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 12,1 L 188,1 A 11,11 0 0 1 199,12 L 199,42 A 11,11 0 0 1 188,53 L 12,53 A 11,11 0 0 1 1,42 L 1,12 A 11,11 0 0 1 12,1 Z"
          fill="none"
          stroke="#00c4b8"
          strokeWidth="1.5"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          className="animated-border-path"
        />
      </svg>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
