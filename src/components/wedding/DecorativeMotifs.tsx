import { motion } from "framer-motion";

// ── Gold Double-Headed Eagle (center hero motif) ──────────────────────────────
export const DoubleEagle = ({
  className = "",
  size = 180,
  opacity = 0.75,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) => (
  <motion.svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 200 260"
    fill="none"
    className={className}
    style={{ opacity }}
    aria-hidden
  >
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(45 80% 75%)" />
        <stop offset="50%" stopColor="hsl(43 70% 55%)" />
        <stop offset="100%" stopColor="hsl(40 65% 45%)" />
      </linearGradient>
    </defs>
    {/* Body oval */}
    <ellipse cx="100" cy="145" rx="52" ry="68" fill="url(#goldGrad)" />
    {/* Wing left */}
    <path d="M100 145 Q40 100 20 60 Q50 90 80 130Z" fill="url(#goldGrad)" />
    {/* Wing right */}
    <path d="M100 145 Q160 100 180 60 Q150 90 120 130Z" fill="url(#goldGrad)" />
    {/* Neck left */}
    <path d="M100 100 Q72 75 65 45 Q80 70 100 95Z" fill="url(#goldGrad)" />
    {/* Neck right */}
    <path d="M100 100 Q128 75 135 45 Q120 70 100 95Z" fill="url(#goldGrad)" />
    {/* Head left */}
    <ellipse cx="62" cy="38" rx="18" ry="15" fill="url(#goldGrad)" />
    {/* Beak left */}
    <path d="M44 38 L33 30 L44 36Z" fill="url(#goldGrad)" />
    {/* Eye left */}
    <circle cx="65" cy="35" r="3" fill="hsl(45 80% 90%)" />
    <circle cx="65" cy="35" r="1.5" fill="hsl(40 40% 20%)" />
    {/* Head right */}
    <ellipse cx="138" cy="38" rx="18" ry="15" fill="url(#goldGrad)" />
    {/* Beak right */}
    <path d="M156 38 L167 30 L156 36Z" fill="url(#goldGrad)" />
    {/* Eye right */}
    <circle cx="135" cy="35" r="3" fill="hsl(45 80% 90%)" />
    <circle cx="135" cy="35" r="1.5" fill="hsl(40 40% 20%)" />
    {/* Crown center */}
    <path d="M90 18 L100 5 L110 18 L105 12 L100 22 L95 12Z" fill="url(#goldGrad)" />
    {/* Tail feathers */}
    <path d="M75 210 Q100 185 125 210 Q110 200 100 215 Q90 200 75 210Z" fill="url(#goldGrad)" />
    {/* Diamond pattern chest */}
    <path d="M85 130 L100 118 L115 130 L100 142Z" fill="hsl(45 80% 85% / 0.4)" />
    <path d="M85 145 L100 133 L115 145 L100 157Z" fill="hsl(45 80% 85% / 0.4)" />
    <path d="M85 160 L100 148 L115 160 L100 172Z" fill="hsl(45 80% 85% / 0.4)" />
  </motion.svg>
);

// ── Gold Peacock ──────────────────────────────────────────────────────────────
export const GoldPeacock = ({
  className = "",
  size = 120,
  opacity = 0.7,
  flip = false,
}: {
  className?: string;
  size?: number;
  opacity?: number;
  flip?: boolean;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 180 180"
    fill="none"
    className={className}
    style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }}
    aria-hidden
  >
    <defs>
      <linearGradient id="peacockGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(45 80% 75%)" />
        <stop offset="60%" stopColor="hsl(43 70% 55%)" />
        <stop offset="100%" stopColor="hsl(40 60% 42%)" />
      </linearGradient>
    </defs>
    {/* Tail fan */}
    <ellipse cx="75" cy="90" rx="58" ry="72" fill="url(#peacockGold)" />
    {/* Tail inner spiral details */}
    <ellipse cx="75" cy="90" rx="38" ry="52" fill="hsl(40 65% 42%)" />
    <path d="M55 60 Q75 40 95 60 Q75 50 55 60Z" fill="hsl(45 80% 70%)" />
    <path d="M45 80 Q75 58 105 80 Q75 65 45 80Z" fill="hsl(45 80% 70%)" />
    <path d="M42 102 Q75 78 108 102 Q75 85 42 102Z" fill="hsl(45 80% 70%)" />
    <path d="M45 122 Q75 100 105 122 Q75 107 45 122Z" fill="hsl(45 80% 70%)" />
    {/* Eye spots on tail */}
    {[50, 66, 82, 98].map((y, i) => (
      <g key={i}>
        <circle cx={75 - 15 + i * 0} cy={y} r="4" fill="hsl(45 80% 80%)" />
        <circle cx={75 - 15 + i * 0} cy={y} r="2" fill="hsl(40 50% 30%)" />
        <circle cx={75 + 15} cy={y} r="4" fill="hsl(45 80% 80%)" />
        <circle cx={75 + 15} cy={y} r="2" fill="hsl(40 50% 30%)" />
      </g>
    ))}
    {/* Body */}
    <ellipse cx="130" cy="110" rx="25" ry="35" fill="url(#peacockGold)" />
    {/* Neck */}
    <path d="M118 85 Q130 65 142 80 Q135 70 130 82Z" fill="url(#peacockGold)" />
    {/* Head */}
    <circle cx="140" cy="65" r="14" fill="url(#peacockGold)" />
    {/* Crest */}
    <path d="M135 52 Q140 38 145 52" stroke="url(#peacockGold)" strokeWidth="2.5" fill="none" />
    <circle cx="140" cy="37" r="3" fill="url(#peacockGold)" />
    {/* Beak */}
    <path d="M152 62 L162 58 L152 66Z" fill="url(#peacockGold)" />
    {/* Eye */}
    <circle cx="143" cy="62" r="4" fill="hsl(45 80% 90%)" />
    <circle cx="143" cy="62" r="2" fill="hsl(40 30% 15%)" />
    {/* Legs */}
    <line x1="122" y1="142" x2="116" y2="162" stroke="url(#peacockGold)" strokeWidth="3" />
    <line x1="135" y1="144" x2="140" y2="164" stroke="url(#peacockGold)" strokeWidth="3" />
  </svg>
);

// ── Gold Lion Silhouette ──────────────────────────────────────────────────────
export const GoldLion = ({
  className = "",
  size = 100,
  opacity = 0.55,
  flip = false,
}: {
  className?: string;
  size?: number;
  opacity?: number;
  flip?: boolean;
}) => (
  <svg
    width={size}
    height={size * 0.85}
    viewBox="0 0 200 170"
    fill="none"
    className={className}
    style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }}
    aria-hidden
  >
    <defs>
      <linearGradient id="lionGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(45 70% 65%)" />
        <stop offset="100%" stopColor="hsl(40 60% 45%)" />
      </linearGradient>
    </defs>
    {/* Body */}
    <ellipse cx="110" cy="110" rx="70" ry="45" fill="url(#lionGold)" />
    {/* Head */}
    <circle cx="42" cy="70" r="28" fill="url(#lionGold)" />
    {/* Mane */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
      <ellipse
        key={i}
        cx={42 + Math.cos((deg * Math.PI) / 180) * 32}
        cy={70 + Math.sin((deg * Math.PI) / 180) * 32}
        rx="10"
        ry="14"
        transform={`rotate(${deg} ${42 + Math.cos((deg * Math.PI) / 180) * 32} ${70 + Math.sin((deg * Math.PI) / 180) * 32})`}
        fill="url(#lionGold)"
      />
    ))}
    {/* Face */}
    <circle cx="42" cy="70" r="20" fill="url(#lionGold)" />
    {/* Eye */}
    <circle cx="36" cy="65" r="5" fill="hsl(45 80% 85%)" />
    <circle cx="36" cy="65" r="2.5" fill="hsl(35 30% 15%)" />
    {/* Nose */}
    <path d="M40 75 L44 72 L48 75 L44 78Z" fill="hsl(40 50% 35%)" />
    {/* Legs */}
    <rect x="68" y="145" width="14" height="22" rx="4" fill="url(#lionGold)" />
    <rect x="90" y="148" width="14" height="19" rx="4" fill="url(#lionGold)" />
    <rect x="128" y="148" width="14" height="19" rx="4" fill="url(#lionGold)" />
    <rect x="150" y="145" width="14" height="22" rx="4" fill="url(#lionGold)" />
    {/* Tail */}
    <path d="M180 112 Q205 90 195 70 Q200 85 185 105Z" fill="url(#lionGold)" />
    <ellipse cx="194" cy="67" rx="10" ry="12" fill="url(#lionGold)" />
  </svg>
);

// ── Animated Motif Pair (used in HeroSection) ─────────────────────────────────
export const HeroMotifs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
    {/* Peacocks moved to sides */}
    {/* Peacock left side */}
    <motion.div
      className="absolute left-0 bottom-[15%]"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 0.18, x: 0 }}
      transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
    >
      <motion.div
        style={{ willChange: "transform" }}
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <GoldPeacock size={160} opacity={1} flip />
      </motion.div>
    </motion.div>

    {/* Peacock right side */}
    <motion.div
      className="absolute right-0 bottom-[15%]"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 0.18, x: 0 }}
      transition={{ duration: 2, delay: 1.4, ease: "easeOut" }}
    >
      <motion.div
        style={{ willChange: "transform" }}
        animate={{ rotate: [0, -2, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <GoldPeacock size={160} opacity={1} />
      </motion.div>
    </motion.div>
  </div>
);

// ── Section Motif Row (used between sections) ─────────────────────────────────
export const SectionMotifRow = ({ lions = false }: { lions?: boolean }) => (
  <div className="flex items-center justify-center gap-6 pointer-events-none py-4" aria-hidden>
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {lions ? <GoldLion size={72} opacity={0.45} flip /> : <GoldPeacock size={72} opacity={0.45} flip />}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      <motion.div style={{ willChange: "transform" }} animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
        <DoubleEagle size={80} opacity={0.5} />
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {lions ? <GoldLion size={72} opacity={0.45} /> : <GoldPeacock size={72} opacity={0.45} />}
    </motion.div>
  </div>
);

export default HeroMotifs;
