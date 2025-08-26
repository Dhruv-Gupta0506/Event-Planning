import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-center overflow-hidden px-4 sm:px-6"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg animate-shimmer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pricing & Packages
      </motion.h2>

      {/* Responsive Motion Divider Line */}
      <motion.div
        className="h-1 w-16 sm:w-24 md:w-32 mx-auto mt-4 mb-10 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.7)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Subtitle */}
      <motion.p
        className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-lato italic tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Every event is unique – so are our staffing solutions. Whether you need a
        few key professionals or a full-scale team, we create packages that
        perfectly fit your event and vision.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="#contact"
          className="px-6 sm:px-8 py-3 rounded-2xl font-bold text-black bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 shadow-lg hover:shadow-amber-400/50 transition-transform hover:scale-105 inline-block"
        >
          Get your personalized quote today
        </a>
      </motion.div>

      {/* Shimmer animation + smooth scroll */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
          background-size: 200% 200%;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
