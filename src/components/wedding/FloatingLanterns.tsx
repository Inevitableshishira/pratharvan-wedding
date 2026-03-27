import { motion, useScroll, useTransform } from "framer-motion";
import lanternImg from "@/assets/lantern.png";

interface LanternConfig {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
}

const lanterns: LanternConfig[] = [
  { left: "5%",  top: "8%",  size: 60, delay: 0,   duration: 6,   rotate: -8  },
  { left: "15%", top: "25%", size: 45, delay: 1.2,  duration: 7,   rotate: 5   },
  { left: "80%", top: "5%",  size: 55, delay: 0.5,  duration: 5.5, rotate: -5  },
  { left: "90%", top: "30%", size: 50, delay: 2,    duration: 6.5, rotate: 10  },
  { left: "70%", top: "15%", size: 65, delay: 0.8,  duration: 7.5, rotate: -12 },
  { left: "25%", top: "5%",  size: 40, delay: 1.5,  duration: 6,   rotate: 7   },
];

const FloatingLanterns = () => {
  // Fade lanterns out between 80vh and 180vh of scroll
  // (they disappear by the time the user reaches the 2nd section bottom)
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, window.innerHeight * 0.8, window.innerHeight * 1.8], [1, 0.6, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 pointer-events-none overflow-hidden z-10"
      style={{ height: "100vh", opacity }}
    >
      {lanterns.map((l, i) => (
        <motion.img
          key={i}
          src={lanternImg}
          alt=""
          className="absolute"
          style={{
            left: l.left,
            top: l.top,
            width: l.size,
            height: "auto",
            filter: l.size > 50 ? "drop-shadow(0 0 15px hsl(330 60% 70% / 0.35))" : "none",
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{
            opacity: [0, 0.85, 0.7, 0.85],
            y: [40, -15, -25, -15],
            rotate: [0, l.rotate, -l.rotate / 2, l.rotate],
          }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default FloatingLanterns;
