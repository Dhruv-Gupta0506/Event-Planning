import React from "react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <section
      id="thankyou"
      className="relative overflow-visible py-20 sm:py-32 px-4 sm:px-6 text-center bg-[#1e293b]"
    >
      {/* Glow behind content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent"></div>
        {/* Spark particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${i % 2 === 0 ? "1" : "1.5"} h-${
              i % 2 === 0 ? "1" : "1.5"
            } bg-yellow-${i % 2 === 0 ? "400" : "300"} rounded-full opacity-${
              10 + i * 3
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -5 - (i % 5) * 2, 0],
              x: [0, 5 + (i % 3) * 2, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ repeat: Infinity, duration: 4 + (i % 5), ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Thank You
        </motion.h2>

        <motion.div
          className="h-1 w-20 sm:w-36 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-[0_0_20px_rgba(255,215,0,0.5)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 tracking-wide font-light"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Thank you for considering{" "}
          <span className="font-semibold text-yellow-400">CoreCrew Services</span>.
          Let’s create unforgettable experiences together.
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
          background-size: 200% 200%;
        }

        @media (max-width: 640px) {
          section#thankyou {
            padding-top: 12rem;
            padding-bottom: 12rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ThankYou;
