import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section
      id="team"
      className="about-section py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] relative"
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg mb-6 animate-shimmer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Professional Team
      </motion.h2>

      {/* Motion Divider Line */}
      <motion.div
        className="h-1 w-24 sm:w-32 mx-auto mb-12 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.7)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      />

      {/* Intro Paragraph */}
      <motion.p
        className="team-intro text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16 text-center italic tracking-wide px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        At the heart of every flawless event is a team of{" "}
        <span className="text-amber-400 font-semibold">seasoned experts</span>, 
        trained to <span className="text-white font-medium">perfection</span> and experienced 
        in <span className="text-amber-300 font-medium">luxury event management</span>. 
        They orchestrate every detail—from logistics to VIP services—with{" "}
        <span className="font-semibold text-white">precision</span>, ensuring guests experience 
        <em className="italic text-amber-400 font-semibold"> seamless elegance</em> behind the scenes.
      </motion.p>

      {/* Team Cards */}
      <div className="team-cards grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Owner */}
        <motion.div
          className="team-card bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-lg 
          hover:scale-[1.05] hover:shadow-2xl hover:border-amber-400/40 transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="team-img-wrapper">
            <img
              src="/owner.jpeg"
              alt="Shubham Sharma"
              className="team-img rounded-xl shadow-lg w-full sm:w-auto max-w-[220px] mx-auto"
            />
          </div>
          <h3 className="team-name text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] mt-4 sm:mt-6">
            Shubham Sharma
          </h3>
          <p className="team-role text-gray-300 mt-2 sm:mt-3 text-base sm:text-lg italic leading-relaxed">
            Visionary <span className="text-white font-semibold">Founder & CEO</span>, 
            crafting <span className="text-amber-300 font-semibold">Unforgettable Experiences</span>
          </p>
        </motion.div>

        {/* Team */}
        <motion.div
          className="team-card bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-lg 
          hover:scale-[1.05] hover:shadow-2xl hover:border-amber-400/40 transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="team-img-wrapper">
            <img
              src="/team.jpeg"
              alt="Our Dedicated Team"
              className="team-img rounded-xl shadow-lg w-full sm:w-auto max-w-[220px] mx-auto"
            />
          </div>
          <h3 className="team-name text-2xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] mt-4 sm:mt-6">
            Our Dedicated Team
          </h3>
          <p className="team-role text-gray-300 mt-2 sm:mt-3 text-base sm:text-lg italic leading-relaxed">
            <span className="font-semibold text-white">Expertly Trained</span> •{" "}
            <span className="text-amber-300 font-semibold">Seasoned Professionals</span> •{" "}
            ensuring <span className="font-semibold text-white">Perfection</span>
          </p>
        </motion.div>
      </div>

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 5s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
};

export default Team;
