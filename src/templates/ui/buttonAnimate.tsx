import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonAnimateProps {
  button: any;
  windowWidth: number;
  img?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export default function ButtonAnimate({
  button,
  img,
  onClick,
  children,
  className = "",
}: ButtonAnimateProps) {
  return (
    <motion.button
      ref={button.ref}
      animate={button.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
      transition={{ duration: 0.7 }}
      onClick={onClick}
      className={`
        btn-floating group relative overflow-hidden
        flex items-center justify-center gap-3
        min-w-[250px] max-w-[350px] w-full
        text-sm font-semibold
        ${className}
      `}
    >
      {/* Icon */}
      {img && (
        <div className="relative w-5 h-5 flex-shrink-0">
          <img 
            src={img} 
            alt="" 
            className="w-5 h-5 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
      )}
      
      {/* Text */}
      <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
        {children}
      </span>

      {/* Elegant hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-gold-400/20 to-gold-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gold-400/10 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
    </motion.button>
  );
}