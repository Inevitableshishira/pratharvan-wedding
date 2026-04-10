import { motion } from "framer-motion";
import weddingPostageImg from "@/assets/wedding-postage.png";
import flowersImg from "@/assets/flowers.png";
import templeImg from "@/assets/temple-gopuram.png";
import { HeroMotifs } from "./DecorativeMotifs";

const ModernAnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay }
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center overflow-visible"
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-start overflow-hidden px-4 pt-10 md:pt-16 pb-4"
      style={{ zIndex: 0, minHeight: "60vh" }}
    >
      {/* Animated decorative gold motifs */}
      <HeroMotifs />

      {/* ── HERO couple names with Temple background ────────────────── */}
      <div className="relative mt-2 md:mt-4 w-full max-w-2xl">

        {/* Names positioned over the temple peak */}
        <div className="text-center relative py-4 px-4" style={{ zIndex: 2 }}>

          {/* Hashtag with smooth fade in */}
          <motion.div
            className="font-sans text-[12px] md:text-base tracking-[0.5em] uppercase text-cream mb-6 opacity-95 font-bold text-shadow-premium"
            initial={{ opacity: 0, letterSpacing: "1.2em", filter: "blur(8px)" }}
            animate={{ opacity: 0.95, letterSpacing: "0.5em", filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "circOut" }}
          >
            #PRATHARVAN
          </motion.div>

          <div className="mb-2">
            <h1 className="font-feminine leading-[1.1] py-4"
              style={{
                fontSize: "clamp(3.5rem, 12vw, 9rem)", 
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}>
              <ModernAnimatedText text="Pratheeksha" delay={0.4} />
            </h1>
          </div>

          <motion.p 
            className="font-serif italic my-3"
            style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", color: "hsl(45 90% 70%)" }}
            initial={{ opacity: 0, scale: 0, rotate: -45, filter: "blur(5px)" }} 
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 1.2, type: "spring", bounce: 0.5 }}>
            &amp;
          </motion.p>

          <div className="mt-2">
            <h1 className="font-feminine leading-[1.1] py-4"
              style={{
                fontSize: "clamp(4rem, 14vw, 10rem)",
                background: "linear-gradient(135deg, hsl(45 80% 70%), hsl(40 60% 90%), hsl(45 70% 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 400,
              }}>
              <ModernAnimatedText text="Atharvan" delay={1.4} />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
