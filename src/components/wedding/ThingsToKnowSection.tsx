import { motion } from "framer-motion";
import { useRef } from "react";
import mandalaImg from "@/assets/mandala-gold.png";
import hashtagBg from "@/assets/hashtag-ghibli-v2.png";
import weatherBg from "@/assets/weather-ghibli-v2.png";
import dressBg from "@/assets/dress-ghibli-v2.png";

const ThingCard = ({
  title,
  desc,
  delay,
}: {
  title: string;
  desc: string;
  delay: number;
}) => {
  const backgrounds: Record<string, string> = {
    "Hashtag": hashtagBg,
    "Weather": weatherBg,
    "Dress Code": dressBg,
  };

  return (
    <motion.div
      className="relative flex flex-col items-center text-center px-10 py-16 rounded-[2.5rem] h-full overflow-hidden shadow-sm group bg-[#FAFAF5]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 1 }}
    >
      {/* Ghibli Style Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgrounds[title]} 
          alt="" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content — Typographically Balanced */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <p className="font-sans text-[10px] tracking-[0.5em] uppercase font-black text-slate-400 mb-6 opacity-60">
          ✦ &nbsp; NOTE &nbsp; ✦
        </p>
        
        <h3 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-black text-slate-800 mb-6 tracking-tighter leading-none">
          {title}
        </h3>

        <div className="w-8 h-[1px] bg-slate-300 mb-8" />

        <p className="font-serif text-lg leading-relaxed text-slate-700 font-bold px-2 italic">
          {desc}
        </p>
      </div>

      {/* Subtle paper grain / watermark */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.03] grayscale brightness-50 pointer-events-none">
        <img src={mandalaImg} alt="" className="w-full h-full animate-spin-slow" />
      </div>
    </motion.div>
  );
};

const ThingsToKnowSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const ITEMS = [
    {
      title: "Hashtag",
      desc: "Share your special moments with us using our official wedding hashtag — #PRATHARVAN",
    },
    {
      title: "Weather",
      desc: "A beautiful day awaits with warm sunlight around 30°C and pleasant, breezy evenings.",
    },
    {
      title: "Dress Code",
      desc: "We look forward to seeing everyone in their finest Traditional Wedding Attire.",
    },
  ];

  return (
    <section
      ref={ref}
      id="things-to-know"
      className="relative py-24 md:py-40 px-5 overflow-hidden flex flex-col items-center"
      style={{ zIndex: 0 }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-sans text-[11px] tracking-[0.6em] uppercase font-bold mb-4 text-[hsl(var(--burgundy))]">
            ✦ &nbsp; GUEST INFORMATION &nbsp; ✦
          </p>
          <h2 className="font-feminine text-wine-gradient" style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
            Details to Note
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 w-full">
          {ITEMS.map((item, i) => (
            <ThingCard
              key={item.title}
              {...item}
              delay={i * 0.2}
            />
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex gap-4 mt-24 opacity-20 grayscale brightness-75">
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i} className="text-2xl">🌸</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnowSection;
