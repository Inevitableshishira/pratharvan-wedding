import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import templeImg from "@/assets/temple-gopuram.png";

interface SectionTransitionProps {
  flip?: boolean;
}

const SectionTransition = ({ flip = false }: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? [300, -300] : [-300, 300]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], flip ? [5, -5] : [-5, 5]);

  return (
    <div
      ref={ref}
      className="relative h-32 md:h-48 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(160 30% 10% / 0.8), hsl(215 50% 12% / 0.8))",
      }}
    >
      <motion.img
        src={templeImg}
        alt=""
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-40 md:w-64 opacity-30"
        style={{
          x,
          scale,
          opacity,
          rotate,
          filter: "drop-shadow(0 0 30px hsl(45 70% 55% / 0.3))",
        }}
      />
      {/* Gold divider line */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-1/3 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(45 70% 55% / 0.5), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export default SectionTransition;
