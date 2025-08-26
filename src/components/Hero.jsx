import { motion } from "framer-motion";

export default function Hero() {
  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero" // ✅ For header 'Home' button
      className="hero relative flex items-center justify-center text-center text-white overflow-hidden h-screen px-4 sm:px-6"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.55))",
        }}
      />

      {/* Floating Golden Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, -50, 0] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: i * 0.5 }}
          className="absolute rounded-full bg-yellow-400"
          style={{
            bottom: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "6px",
            height: "6px",
            background: "rgba(255, 215, 0, 0.6)",
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-full sm:max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="font-playfair font-extrabold leading-snug text-[2.4rem] sm:text-[3rem] md:text-[4rem]"
        >
          Premium Manpower for <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              background: "linear-gradient(90deg, #FFD700, #FFA500, #FFEFBA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shine 6s infinite linear",
              backgroundSize: "200% auto",
            }}
          >
            High-Profile Weddings & Events
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-gray-200 text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] font-lato"
        >
          Crafting unforgettable experiences with seamless execution and
          world-class professionalism.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 sm:mt-10"
        >
          <motion.button
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 px-6 sm:px-10 py-3 sm:py-4 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={handleScroll}
          >
            Plan Your Event with Us – Contact Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-6 flex flex-col items-center gap-1 text-yellow-400 text-sm"
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-3 h-3 border-b-2 border-r-2 border-yellow-400 rotate-45"
          />
        </motion.div>
      </motion.div>

      {/* Keyframes for Shine Effect */}
      <style>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}
