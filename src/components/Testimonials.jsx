import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      text: "CoreCrew made our wedding flawless, every detail executed perfectly.",
      client: "Luxury Wedding Client",
    },
    {
      text: "Professional, punctual, and reliable team – they exceeded expectations.",
      client: "High-Profile Event Client",
    },
    {
      text: "Handled everything seamlessly from start to finish; true luxury experience.",
      client: "Corporate Event Client",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-[#0f172a] py-20 px-4 sm:px-6 text-center"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg inline-block animate-shimmer break-words"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h2>

        {/* Motion Underline */}
        <motion.div
          className="mx-auto mt-4 h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.7)] animate-pulse"
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }} // small fixed width for mobile
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-yellow-500/30 rounded-3xl p-6 sm:p-8 w-full sm:w-80 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_40px_rgba(255,215,0,0.35)] transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Glow border ring */}
            <div className="absolute inset-0 rounded-3xl border border-yellow-400/10 pointer-events-none" />

            {/* Golden Quote Mark */}
            <div className="text-5xl sm:text-6xl font-serif text-yellow-400/70 mb-4 sm:mb-6 leading-none">“</div>

            {/* Testimonial Text */}
            <p className="text-gray-200 italic text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-serif tracking-wide">
              {t.text}
            </p>

            {/* Divider Line */}
            <div className="mx-auto w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-4 sm:mb-6"></div>

            {/* Client */}
            <span className="block font-bold text-lg sm:text-xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] tracking-wider">
              {t.client}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
