import { motion } from "framer-motion";
import EventCard from "./EventCard";
import mandalaImg from "@/assets/mandala-gold.png";

const events = [
  { 
    title: "Maduve Samarambha", 
    time: "09:30 AM — 10:00 AM", 
    date: "Friday, May 8, 2026", 
    venue: "Khandya Planters' Club" 
  },
  { 
    title: "Arathakshete", 
    time: "11:30 AM onwards", 
    date: "Friday, May 8, 2026", 
    venue: "Khandya Planters' Club" 
  },
];

const EventsSection = () => {
  return (
    <section 
      id="events"
      className="relative py-24 md:py-48 px-5 md:px-4 overflow-hidden flex flex-col items-center" 
      style={{ zIndex: 0 }}
    >
      {/* Spinning mandala watermarks */}
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -top-16 -right-16 w-64 opacity-[0.04] pointer-events-none grayscale"
        style={{ willChange: "transform" }}
        animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} />
      <motion.img src={mandalaImg} alt="" aria-hidden
        className="absolute -bottom-16 -left-16 w-52 opacity-[0.03] pointer-events-none grayscale"
        style={{ willChange: "transform" }}
        animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} />
      
      {/* Om watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg width="400" height="400" viewBox="0 0 100 100" aria-hidden>
          <text x="50" y="72" fontSize="72" textAnchor="middle" fill="#c5a059" fontFamily="serif" fontWeight="bold">ಓಂ</text>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.p 
          className="text-label-caps mb-8"
          style={{ color: "hsl(345, 60%, 28%)" }}
          initial={{ opacity: 0, letterSpacing: "0.2em" }} 
          whileInView={{ opacity: 1, letterSpacing: "0.5em" }} 
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          ✦ &nbsp; THE SACRED EVENTS &nbsp; ✦
        </motion.p>
        
        <motion.h2
          className="font-feminine text-display-h2 text-center mb-28 leading-none text-wine-gradient"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Wedding Celebrations
        </motion.h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-40 justify-items-center mb-32">
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} index={i} />
          ))}
        </div>

        {/* Bottom decorative flower row with staggered float */}
        <motion.div 
          className="flex justify-center items-center gap-12 opacity-40 brightness-90"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }} 
          transition={{ delay: 0.8, duration: 1 }}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.span 
              key={i} 
              className="text-3xl drop-shadow-lg"
              animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              🌸
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
