import React from "react";
import { motion } from "framer-motion";

const steps = [
  { title: "Consultation", text: "We understand your vision and requirements." },
  { title: "Tailored Plan", text: "Custom manpower and roles curated for your event." },
  { title: "Execution", text: "Our professional team manages every detail flawlessly." },
  { title: "Celebration", text: "You enjoy a seamless, unforgettable experience." }
];

const Process = () => {
  return (
    <section
      id="process"
      className="about-section py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative"
    >
      {/* Heading */}
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg inline-block animate-shimmer"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h2>

        <motion.div
          className="mx-auto mt-4 h-1 w-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.7)]"
          initial={{ width: 0 }}
          whileInView={{ width: '150px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Process Grid */}
      <div className="relative max-w-6xl mx-auto mt-20 px-6">
        {/* Glowing connector line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-300/40 via-yellow-400/40 to-amber-500/40 rounded-full blur-md"></div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-amber-200/20 transition-transform duration-500 hover:scale-[1.08] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Number Circle */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black font-bold text-2xl shadow-[0_0_25px_rgba(251,191,36,0.8)] mb-6 transition-transform group-hover:scale-110">
                {index + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,215,0,0.7)] mb-4 tracking-wide group-hover:animate-shimmer">
                {step.title}
              </h3>

              {/* Step Text */}
              <p className="text-gray-300/90 italic leading-relaxed tracking-wide text-lg font-light bg-gradient-to-r from-gray-200/90 via-gray-300/80 to-gray-200/90 bg-clip-text text-transparent">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* shimmer animation */}
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

export default Process;
