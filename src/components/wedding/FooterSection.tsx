import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import mandalaImg from "@/assets/mandala-gold.png";
import flowersImg from "@/assets/flowers.png";
import lanternImg from "@/assets/lantern.png";
import { ModernAnimatedText } from "./AnimatedText";

// ─── Animated gold sparkle dot ────────────────────────────────────────────────
const GoldDot = ({ x, y, delay, color }: { x: number; y: number; delay: number; color?: string }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: 2, height: 2, background: color ?? `hsl(320 40% 35%)` }}
    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
    transition={{ duration: 3 + Math.random() * 2, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

// ─── Om symbol SVG ────────────────────────────────────────────────────────────
const OmSymbol = ({ opacity = 0.06, size = 120 }: { opacity?: number; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ opacity }} aria-hidden>
    <text x="50" y="72" fontSize="72" textAnchor="middle"
      fill="hsl(320 40% 30%)" fontFamily="serif" fontWeight="bold">
      ಓಂ
    </text>
  </svg>
);

// ─── Gold divider ornament ────────────────────────────────────────────────────
const GoldDivider = ({ label }: { label?: string }) => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="flex-1 h-px max-w-[100px]" style={{ background: "linear-gradient(90deg, transparent, hsl(345 55% 30% / 0.4), hsl(320 40% 35% / 0.2))" }} />
    <span className="font-sans text-[9px] tracking-[0.5em] uppercase" style={{ color: "hsl(345 55% 30% / 0.6)" }}>
      {label ?? "✦"}
    </span>
    <div className="flex-1 h-px max-w-[100px]" style={{ background: "linear-gradient(90deg, hsl(320 40% 35% / 0.2), hsl(345 55% 30% / 0.4), transparent)" }} />
  </div>
);

// ─── Gold card wrapper (Stitch "Royal Mandap" inspired) ───────────────────────
const GoldCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`relative ${className}`}
    style={{
      background: "linear-gradient(145deg, rgba(255,235,245,0.35), rgba(255,225,240,0.2))",
      border: "1px solid hsl(320 40% 35% / 0.18)",
      boxShadow: "0 0 40px hsl(320 40% 35% / 0.06), inset 0 0 30px hsl(320 40% 35% / 0.03)",
      backdropFilter: "blur(16px) saturate(130%)",
    }}
  >
    {/* Corner flowers */}
    <img src={flowersImg} alt="" aria-hidden className="absolute -top-2 -left-2 w-12 opacity-25 -rotate-12"
      style={{ filter: "drop-shadow(0 0 4px hsl(320 40% 35% / 0.3))" }} />
    <img src={flowersImg} alt="" aria-hidden className="absolute -bottom-2 -right-2 w-12 opacity-25 rotate-12 scale-x-[-1]"
      style={{ filter: "drop-shadow(0 0 4px hsl(320 40% 35% / 0.3))" }} />
    {children}
  </div>
);

// ── Sacred Blessing Card (replaces RSVP) ────────────────────────────────
const BlessingCard = () => (
  <GoldCard className="px-6 py-8 md:px-8">
    {/* Om watermark */}
    <div className="absolute top-4 right-4 opacity-[0.06]">
      <OmSymbol size={60} opacity={1} />
    </div>

    <p className="font-sans text-[12px] md:text-sm tracking-[0.5em] uppercase text-center mb-4 text-shadow-premium font-bold"
      style={{ color: "hsl(335, 45%, 20%)" }}>
      ✦ &nbsp; Sacred Blessings &nbsp; ✦
    </p>

    {/* Sanskrit shloka — warm burgundy tone */}
    <motion.p
      className="font-serif text-center text-lg md:text-xl italic mb-4 leading-relaxed"
      style={{ color: "hsl(345, 55%, 30%)" }}
      animate={{ opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 5, repeat: Infinity }}>
      "ಸರ್ವಮಂಗಲ ಮಾಂಗಲ್ಯೇ ಶಿವೇ ಸರ್ವಾರ್ಥ ಸಾಧಕೇ"
    </motion.p>
    <p className="font-sans text-[11px] md:text-[12px] tracking-widest text-center mb-6"
      style={{ color: "hsl(15, 30%, 35%)" }}>
      May all that is auspicious bless this union
    </p>

    {/* Lotus divider — warm rose */}
    <div className="flex justify-center gap-2 mb-5">
      {["🩷","✦","🩷","✦","🩷"].map((s, i) => (
        <span key={i} style={{
          fontSize: s === "✦" ? "8px" : "15px",
          color: i % 2 === 0 ? "hsl(340 50% 40% / 0.65)" : "hsl(320 40% 30% / 0.4)",
          opacity: 0.9,
        }}>{s}</span>
      ))}
    </div>

    {/* Heartfelt message */}
    <p className="font-serif text-sm md:text-base text-center leading-relaxed"
      style={{ color: "hsl(335, 35%, 25%)" }}>
      With hearts full of joy, we invite you to witness&#10;the sacred union of our beloved children&#10;and share in the blessings of this divine occasion.
    </p>

    {/* Family names */}
    <div className="mt-5 pt-4" style={{ borderTop: "1px solid hsl(320 40% 35% / 0.15)" }}>
      <p className="font-sans text-[12px] md:text-sm tracking-[0.4em] uppercase text-center mb-2 font-bold text-shadow-premium"
        style={{ color: "hsl(335, 45%, 20%)" }}>With blessings of</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {/* Bride family — rose-gold tint */}
        <div>
          <p className="font-serif text-[13px] md:text-[14px] text-center" style={{ color: "hsl(340, 45%, 30%)" }}>
            Smt. Ramamani &amp; Shri Rajegowda
          </p>
          <p className="font-sans text-[11px] text-center mt-1 uppercase tracking-widest font-bold text-shadow-premium"
             style={{ color: "hsl(335, 40%, 22%)", opacity: 0.9 }}>
            Chittemakki &amp; Karagunda Families
          </p>
        </div>
        {/* Groom family — saffron tint */}
        <div>
          <p className="font-serif text-[13px] md:text-[14px] text-center" style={{ color: "hsl(25, 50%, 32%)" }}>
            Smt. Lekha &amp; Shri Jagadeesh Hegde
          </p>
          <p className="font-sans text-[11px] text-center mt-1 uppercase tracking-widest font-bold text-shadow-premium"
             style={{ color: "hsl(335, 40%, 22%)", opacity: 0.9 }}>
            Kalkuli &amp; Nandipura Families
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 flex flex-col items-center" style={{ borderTop: "1px solid hsl(320 40% 35% / 0.1)" }}>
        <p className="font-sans text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-center mb-3 font-bold text-shadow-premium" style={{ color: "hsl(335, 40%, 22%)", opacity: 0.85 }}>With Best Compliments From</p>
        <p className="font-serif text-[12px] md:text-[13px] leading-relaxed text-center px-4 max-w-[320px] md:max-w-none text-shadow-premium" 
           style={{ fontStyle: "italic", color: "hsl(335, 35%, 28%)" }}>
          Prajwal, Venkatesh, Saraswathi, Anushruthi, Arjun, Ahana, Ananya, Rakshith, Prema Nagesh, and children.
        </p>
      </div>
    </div>
  </GoldCard>
);

// ─── Main FooterSection ───────────────────────────────────────────────────────
const FooterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mandalaRot1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mandalaRot2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const starsOp     = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Pre-generate star positions so they're stable
  const stars = Array.from({ length: 60 }, (_, i) => ({
    x: (i * 137.5 + 30) % 100,
    y: (i * 97.3 + 10) % 100,
    s: 0.5 + (i % 5) * 0.4,
    o: 0.15 + (i % 7) * 0.08,
  }));

  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    x: (i * 73 + 15) % 95, y: (i * 59 + 5) % 95, delay: i * 0.3,
  }));

  return (
    <footer ref={ref} className="relative overflow-hidden" style={{ zIndex: 0 }}>

      {/* ── Starfield ──────────────────────────────────────────────────────── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: starsOp }}>
        {stars.map((s, i) => (
          <div key={i} className="absolute rounded-full"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.s, height: s.s, background: `hsl(320 40% 40% / ${s.o})` }} />
        ))}
      </motion.div>

      {/* Animated sparkle dots — multi-colored */}
      {sparkles.map((sp, i) => {
        const colors = ["hsl(320 40% 35%)", "hsl(345 55% 30%)", "hsl(25 50% 35%)"];
        return <GoldDot key={i} x={sp.x} y={sp.y} delay={sp.delay} color={colors[i % 3]} />;
      })}

      {/* ── Large mandala watermarks ────────────────────────────────────────── */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-24 -right-24 w-72 md:w-[28rem] opacity-[0.035] pointer-events-none"
        style={{ rotate: mandalaRot1 }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-24 -left-24 w-56 md:w-80 opacity-[0.03] pointer-events-none"
        style={{ rotate: mandalaRot2 }} />

      {/* Center Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
        <OmSymbol size={360} opacity={1} />
      </div>

      <div className="relative z-10 px-4 py-16 md:py-24 max-w-lg mx-auto flex flex-col gap-8">



        {/* ── 6. BLESSING FOOTER ───────────────────────────────────────────── */}
        <motion.div className="text-center pt-2 pb-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 1.2 }}>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(320 40% 30% / 0.3))" }} />
            <motion.img src={mandalaImg} alt="" aria-hidden className="w-8 opacity-50"
              style={{ willChange: "transform" }}
              animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, hsl(320 40% 30% / 0.3), transparent)" }} />
          </div>

          <p className="font-sans text-fluid-label tracking-[0.4em] uppercase mb-4 text-shadow-adaptive font-bold"
            style={{ color: "hsl(335, 45%, 18%)" }}>
            Pratheeksha &amp; Atharvan 
          </p>
          <p className="font-sans text-sm tracking-[0.3em] uppercase opacity-90 font-bold" style={{ color: "hsl(335, 40%, 22%)" }}>
            Friday, May 8, 2026 · Chikkamagaluru
          </p>
          <p className="font-sans text-lg mt-4 font-bold tracking-[0.2em] text-wine-gradient" style={{ }}>
            #PRATHARVAN
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default FooterSection;
