import { motion } from "framer-motion";

interface ModernAnimatedTextProps {
  text: string;
  delay?: number;
  fontSize: string;
  className?: string;
}

export const ModernAnimatedText = ({ text, delay = 0, fontSize, className = "" }: ModernAnimatedTextProps) => {
  const words = text.split(" ");
  
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
      y: 40, 
      filter: "blur(10px)", 
      skewY: 5,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      skewY: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  const textStyle: React.CSSProperties = {
    fontSize: fontSize,
    background: "linear-gradient(135deg, hsl(45 95% 75%), hsl(40 80% 95%), hsl(45 80% 60%))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    fontWeight: 400,
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
    padding: "0.15em 0.05em", // CRITICAL: Prevents ornate script clipping
    margin: "-0.15em -0.05em", // Counteract padding to keep character spacing natural
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center overflow-visible ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap overflow-visible">
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={child}
              className="inline-block font-feminine leading-[1.4] overflow-visible"
              style={textStyle}
            >
              {char}
            </motion.span>
          ))}
          {wordIdx < words.length - 1 && (
            <span className="inline-block w-[0.25em]" aria-hidden="true" />
          )}
        </span>
      ))}
    </motion.div>
  );
};
