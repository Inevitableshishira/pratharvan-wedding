import { motion } from "framer-motion";
import { useId } from "react";

interface ModernAnimatedTextProps {
  text: string;
  delay?: number;
  fontSize: string;
  className?: string;
  animateOnLoad?: boolean;
}

/**
 * ModernAnimatedText - SVG-Overlay version.
 * - Uses a hidden DOM span to ensure perfect word-wrapping and spacing.
 * - Overlays an SVG to render the text with zero-seam gradients.
 * - Animates characters individually using SVG tspan + Framer Motion.
 */
export const ModernAnimatedText = ({ 
  text, 
  delay = 0, 
  fontSize, 
  className = "",
  animateOnLoad = false 
}: ModernAnimatedTextProps) => {
  const words = text.split(" ");
  const gradId = useId().replace(/:/g, "-");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: "0.2em", // Move up/down slightly
      filter: "blur(10px)", 
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: "0em", 
      filter: "blur(0px)", 
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 120 
      }
    }
  };

  return (
    <div className={`flex flex-wrap justify-center items-center gap-x-[0.25em] overflow-visible ${className}`} style={{ fontSize }}>
      {words.map((word, wordIdx) => (
        <motion.div
          key={wordIdx}
          variants={container}
          initial="hidden"
          animate={animateOnLoad ? "visible" : undefined}
          whileInView={!animateOnLoad ? "visible" : undefined}
          viewport={{ once: true }}
          className="relative inline-block overflow-visible"
        >
          {/* 
            Invisible shadow word:
            This sets the container's width/height perfectly based on the actual font measurement 
            by the browser, ensuring the SVG correctly overlays and handles wrapping.
          */}
          <span className="invisible select-none font-feminine leading-[1.4] whitespace-nowrap">
            {word}
          </span>

          <svg 
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            style={{ 
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" 
            }}
          >
            <defs>
              <linearGradient id={`${gradId}-${wordIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#FFD24D" />
                <stop offset="30%"  stopColor="#FFEAA7" />
                <stop offset="50%"  stopColor="#F39C12" />
                <stop offset="70%"  stopColor="#FFEAA7" />
                <stop offset="100%" stopColor="#FFD24D" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="central"
              textAnchor="middle"
              className="font-feminine fill-transparent"
              style={{ fontSize: "1em", fill: `url(#${gradId}-${wordIdx})` }}
            >
              {Array.from(word).map((char, charIdx) => (
                <motion.tspan
                  key={charIdx}
                  variants={child}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.tspan>
              ))}
            </text>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
