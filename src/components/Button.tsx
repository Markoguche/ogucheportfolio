// src/components/Button.tsx
import { motion } from "framer-motion";

export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground shadow-lg shadow-primary/25";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};