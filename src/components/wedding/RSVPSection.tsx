import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const RSVPSection = () => {
  return (
    <section className="py-20 md:py-28 px-4 text-center" style={{ background: "linear-gradient(180deg, hsl(270 20% 15%), hsl(160 25% 12%))" }}>
      <motion.h2
        className="font-serif text-3xl md:text-5xl gold-shimmer mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Please RSVP
      </motion.h2>
      <motion.p
        className="font-sans text-sm text-cream opacity-70 mb-10 max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        We would love to know if you can make it. Let us know via WhatsApp!
      </motion.p>
      <motion.a
        href="https://wa.me/919876543210?text=Hi!%20I%20would%20love%20to%20attend%20the%20wedding!"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-300 gold-glow gold-glow-hover"
        style={{
          background: "linear-gradient(135deg, hsl(40 65% 40%), hsl(45 70% 55%), hsl(45 60% 75%))",
          color: "hsl(150 30% 8%)",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <MessageCircle size={20} />
        RSVP on WhatsApp
      </motion.a>
    </section>
  );
};

export default RSVPSection;
