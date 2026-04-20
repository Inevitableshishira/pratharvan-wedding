import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mandalaImg from "@/assets/mandala-gold.png";
import idolImg from "@/assets/idol.png";

const WEDDING_DATE = new Date("2026-05-08T09:30:00+05:30").getTime();

// Pulsing diya flame SVG
const DivaFlame = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    animate={{ scaleY: [1, 1.3, 0.9, 1.2, 1], scaleX: [1, 0.85, 1.1, 0.9, 1] }}
    transition={{ duration: 1.8, delay, repeat: Infinity, ease: "easeInOut" }}
    style={{ transformOrigin: "bottom" }}
  >
    <svg width="14" height="20" viewBox="0 0 14 20" aria-hidden>
      <ellipse cx="7" cy="15" rx="5" ry="4" fill="hsl(345 55% 25% / 0.5)" />
      <ellipse cx="7" cy="10" rx="4" ry="8" fill="hsl(345, 60%, 35%)" />
      <ellipse cx="7" cy="7" rx="2.5" ry="5" fill="hsl(25, 55%, 50%)" />
      <ellipse cx="7" cy="5" rx="1.5" ry="3" fill="rgba(255,240,220,0.95)" />
    </svg>
  </motion.div>
);

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");
  const units = [
    { label: "Days",    value: timeLeft.days },
    { label: "Hours",   value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      className="relative py-24 md:py-32 px-5 md:px-4 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Mandala watermarks */}
      <img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-16 -left-16 w-64 opacity-[0.04] pointer-events-none animate-spin-slow" />
      <img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-16 -right-16 w-56 opacity-[0.04] pointer-events-none animate-spin-slow" />

      {/* Om symbol center background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="400" height="400" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="70" fontSize="70" textAnchor="middle"
            fill="#c5a059" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Idol Focus */}
        <div className="flex justify-center mb-10 md:mb-12">
          <motion.img 
            src={idolImg} 
            alt="Sacred Idol" 
            className="max-w-[120px] md:max-w-[180px] h-auto drop-shadow-2xl mb-2 filter brightness-110 saturate-125"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Title Group */}
        <motion.div
           className="flex flex-col items-center mb-16 md:mb-20"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <p className="text-label-caps mb-4" style={{ color: "hsl(345, 60%, 28%)" }}>
            ✦ &nbsp; The Auspicious Hour &nbsp; ✦
          </p>
          <h2 className="font-heading text-display-h2 mb-4 text-wine-gradient">
            Counting Down
          </h2>
          <p className="font-feminine text-xl md:text-3xl italic" style={{ color: "hsl(15, 35%, 30%)" }}>
            to Muhurtham · 9:30 AM
          </p>
        </motion.div>

        {/* Countdown Grid - Elite Glass Layout */}
        <div className="flex justify-center flex-wrap gap-6 md:gap-12">
          {units.map((u, i) => (
            <motion.div key={u.label} className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              {/* Diya on top */}
              <div className="mb-4">
                <DivaFlame delay={i * 0.3} />
              </div>

              {/* Tile — alternating warm tints */}
              <div
                className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center relative rounded-[2rem] glass-blush overflow-hidden shadow-2xl"
                style={{
                  boxShadow: i % 2 === 0 
                    ? "0 0 20px rgba(100,40,70,0.08), inset 0 0 20px rgba(100,40,70,0.04)" 
                    : "0 0 20px rgba(140,60,90,0.06), inset 0 0 20px rgba(140,60,90,0.03)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                {/* Warm inner accent glow line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[1px]" 
                  style={{ 
                    background: i % 2 === 0 
                      ? "linear-gradient(90deg, transparent, rgba(100,40,70,0.25), transparent)" 
                      : "linear-gradient(90deg, transparent, rgba(140,60,90,0.2), transparent)" 
                  }} 
                />
                
                <motion.span
                  key={u.value}
                  className="font-display text-3xl md:text-5xl text-wine-gradient tracking-tighter-framer font-black"
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                >
                  {pad(u.value)}
                </motion.span>
              </div>

              <span className="text-label-caps text-[9px] mt-6 tracking-widest-luxury" style={{ color: "hsl(320, 30%, 35%)", opacity: 0.7 }}>
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative marigold row */}
        <motion.div className="flex justify-center items-center gap-6 mt-16 md:mt-24 opacity-30 brightness-75 drop-shadow-lg"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.5 }}>
          {["🌼","✦","🌺","✦","🌸","✦","🌺","✦","🌼"].map((e, i) => (
            <motion.span key={i}
              animate={{ y: [0, i % 2 === 0 ? -5 : 5, 0] }}
              transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontSize: e === "✦" ? "10px" : "24px",
                color: e === "✦" ? "hsl(345, 55%, 30%)" : undefined, /* Wine-colored stars */
              }}>
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
