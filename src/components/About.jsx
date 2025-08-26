import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="about-section px-4 sm:px-6 md:px-0 py-12 md:py-24" id="about">
      {/* Heading */}
      <div className="relative inline-block mb-8 text-center">
        <motion.h2
          className="about-title text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>

        {/* Animated motion underline */}
        <motion.div
          className="absolute left-1/2 -bottom-2 h-[3px] bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full shadow-md"
          initial={{ width: 0, x: "-50%" }}
          whileInView={{ width: "100%", x: "-50%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Intro */}
      <motion.p
        className="about-intro text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
      >
        At{" "}
        <span className="highlight text-amber-400 font-semibold">
          CoreCrew Services
        </span>
        , we specialize in providing{" "}
        <span className="font-bold text-white">premium manpower</span> for{" "}
        <span className="text-amber-300 font-medium">luxury weddings</span> and{" "}
        <span className="text-amber-300 font-medium">high-profile events</span>.
        Our dedicated professionals ensure every occasion flows seamlessly,
        letting you enjoy <em className="italic">unforgettable moments</em>.
      </motion.p>

      {/* Cards */}
      <div className="about-cards grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 sm:mb-12">
        <motion.div
          className="about-card bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl backdrop-blur-lg 
            hover:scale-[1.05] hover:shadow-2xl hover:border-amber-400/40 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 flex items-center gap-2">
            ✨ Our Mission
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To deliver <span className="text-white font-medium">excellence</span> through
            seamless execution and world-class hospitality, ensuring your event
            is remembered for a lifetime.
          </p>
        </motion.div>

        <motion.div
          className="about-card bg-white/5 border border-white/10 p-5 sm:p-6 rounded-2xl shadow-xl backdrop-blur-lg 
            hover:scale-[1.05] hover:shadow-2xl hover:border-amber-400/40 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-amber-400 mb-3 flex items-center gap-2">
            🌟 Our Vision
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            To become the most <span className="text-white font-medium">trusted</span> event
            manpower provider, setting new standards of{" "}
            <span className="text-amber-300 font-medium">professionalism</span>,{" "}
            <span className="text-amber-300 font-medium">luxury</span>, and{" "}
            <span className="text-amber-300 font-medium">guest satisfaction</span>.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        className="about-footer text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        viewport={{ once: true }}
      >
        From <span className="highlight text-amber-400 font-semibold">weddings</span> to{" "}
        <span className="highlight text-amber-400 font-semibold">
          corporate gatherings
        </span>
        , CoreCrew ensures a <span className="text-white font-bold">flawless</span> and{" "}
        <span className="text-amber-300 font-medium">premium experience</span>, every single time.
      </motion.p>
    </section>
  );
}
