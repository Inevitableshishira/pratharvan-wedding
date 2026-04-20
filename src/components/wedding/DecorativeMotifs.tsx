import { motion } from "framer-motion";

// ── Muted Hand-Drawn Eagle ──────────────────────────────────────────────
export const DoubleEagle = ({
  className = "",
  size = 180,
  opacity = 0.5,
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
      <linearGradient id="ghibliTan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E3D5C1" />
        <stop offset="100%" stopColor="#C8B39B" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="145" rx="52" ry="68" fill="url(#ghibliTan)" />
    <path d="M100 145 Q40 100 20 60 Q50 90 80 130Z" fill="url(#ghibliTan)" />
    <path d="M100 145 Q160 100 180 60 Q150 90 120 130Z" fill="url(#ghibliTan)" />
    <path d="M100 100 Q72 75 65 45 Q80 70 100 95Z" fill="url(#ghibliTan)" />
    <path d="M100 100 Q128 75 135 45 Q120 70 100 95Z" fill="url(#ghibliTan)" />
    <ellipse cx="62" cy="38" rx="18" ry="15" fill="url(#ghibliTan)" />
    <path d="M44 38 L33 30 L44 36Z" fill="url(#ghibliTan)" />
    <circle cx="65" cy="35" r="3" fill="#F5F5F0" />
    <circle cx="65" cy="35" r="1.5" fill="#4A443A" />
    <ellipse cx="138" cy="38" rx="18" ry="15" fill="url(#ghibliTan)" />
    <path d="M156 38 L167 30 L156 36Z" fill="url(#ghibliTan)" />
    <circle cx="135" cy="35" r="3" fill="#F5F5F0" />
    <circle cx="135" cy="35" r="1.5" fill="#4A443A" />
    <path d="M90 18 L100 5 L110 18 L105 12 L100 22 L95 12Z" fill="url(#ghibliTan)" />
    <path d="M75 210 Q100 185 125 210 Q110 200 100 215 Q90 200 75 210Z" fill="url(#ghibliTan)" />
  </motion.svg>
);

// ── Muted Hand-Drawn Peacock ──────────────────────────────────────────────
export const GoldPeacock = ({
  className = "",
  size = 120,
  opacity = 0.5,
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
      <linearGradient id="ghibliOlive" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D2B48C" />
        <stop offset="100%" stopColor="#A8967A" />
      </linearGradient>
    </defs>
    <ellipse cx="75" cy="90" rx="58" ry="72" fill="url(#ghibliOlive)" />
    <ellipse cx="75" cy="90" rx="38" ry="52" fill="#8B7D6B" />
    <ellipse cx="130" cy="110" rx="25" ry="35" fill="url(#ghibliOlive)" />
    <path d="M118 85 Q130 65 142 80 Q135 70 130 82Z" fill="url(#ghibliOlive)" />
    <circle cx="140" cy="65" r="14" fill="url(#ghibliOlive)" />
    <path d="M152 62 L162 58 L152 66Z" fill="url(#ghibliOlive)" />
    <circle cx="143" cy="62" r="4" fill="#F5F5F0" />
    <circle cx="143" cy="62" r="2" fill="#4A443A" />
  </svg>
);

// ── Muted Hand-Drawn Lion ──────────────────────────────────────────────
export const GoldLion = ({
  className = "",
  size = 100,
  opacity = 0.4,
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
      <linearGradient id="ghibliSienna" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C8B39B" />
        <stop offset="100%" stopColor="#A68C6A" />
      </linearGradient>
    </defs>
    <ellipse cx="110" cy="110" rx="70" ry="45" fill="url(#ghibliSienna)" />
    <circle cx="42" cy="70" r="28" fill="url(#ghibliSienna)" />
    <circle cx="42" cy="70" r="20" fill="url(#ghibliSienna)" />
    <circle cx="36" cy="65" r="5" fill="#F5F5F0" />
    <circle cx="36" cy="65" r="2.5" fill="#4A443A" />
  </svg>
);

export const HeroMotifs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
    {/* Very subtle side motifs with no "shine" */}
    <motion.div
      className="absolute left-[2%] bottom-[10%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.12 }}
      transition={{ duration: 3, delay: 1 }}
    >
      <GoldPeacock size={180} flip />
    </motion.div>

    <motion.div
      className="absolute right-[2%] bottom-[10%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.12 }}
      transition={{ duration: 3, delay: 1.2 }}
    >
      <GoldPeacock size={180} />
    </motion.div>
  </div>
);

export const SectionMotifRow = ({ lions = false }: { lions?: boolean }) => (
  <div className="flex items-center justify-center gap-10 pointer-events-none py-8 opacity-40" aria-hidden>
    <GoldPeacock size={60} flip />
    <DoubleEagle size={64} />
    <GoldPeacock size={60} />
  </div>
);

export default HeroMotifs;
