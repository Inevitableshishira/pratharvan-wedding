import { motion } from "framer-motion";
import ornamentMain from "@/assets/ornament-main.png";

const OrnamentDivider = () => {
  return (
    <div className="relative w-full py-16 flex justify-center items-center overflow-visible mt-[-8rem] md:mt-[-12rem] z-20">
      {/* Background radial glow */}
      <div 
        className="absolute w-[800px] h-[800px] bg-[#c5a059]/20 rounded-full blur-[120px] pointer-events-none"
      />
      
      <div className="flex items-center gap-6 md:gap-24 w-full max-w-7xl px-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-[#c5a059]/60" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 2, 
            type: "spring",
            stiffness: 30,
            damping: 12
          }}
          className="relative"
        >
          <img 
            src={ornamentMain} 
            alt="Ornament" 
            className="w-64 h-64 md:w-[500px] md:h-[500px] object-contain drop-shadow-[0_0_40px_rgba(197,160,89,0.6)]" 
          />
          
          {/* Subtle spinning aura */}
          <motion.div 
            className="absolute -inset-8 rounded-full border border-[#c5a059]/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
        
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#c5a059]/40 to-[#c5a059]/60" />
      </div>
    </div>
  );
};

export default OrnamentDivider;
