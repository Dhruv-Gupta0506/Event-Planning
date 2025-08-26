import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const works = [
    { img: "/team.jpeg", title: "Team in Action", cat: "Professional Execution" },
    { img: "/team2.jpeg", title: "Hospitality Team", cat: "Guest Assistance" },
    { img: "/team3.jpeg", title: "On-Ground Support", cat: "Event Coordination" },
    { img: "/team4.jpeg", title: "Logistics Crew", cat: "Smooth Operations", fix: true },
    { img: "/event.jpg", title: "Luxury Wedding", cat: "Flawless Management" },
    { img: "/event1.jpg", title: "Corporate Celebration", cat: "Premium Experience" }
  ];

  const directions = [
    { x: -50, y: 0 },
    { x: 50, y: 0 },
    { x: 0, y: 50 },
    { x: 0, y: -50 },
    { x: -50, y: 0 },
    { x: 50, y: 0 }
  ];

  return (
    <section
      id="portfolio"
      className="py-20 relative bg-gradient-to-b from-[#0f172a] to-[#0f172a]"
    >
      {/* Heading */}
      <div className="text-center mb-8 px-4 sm:px-6">
        <motion.h2
          className="relative text-2xl sm:text-3xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 
          bg-[length:200%_200%] bg-clip-text text-transparent 
          inline-block animate-shimmer break-words
          drop-shadow-none sm:drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>

        <motion.div
          className="mx-auto mt-3 h-1 w-0 
          bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 
          rounded-full shadow-none sm:shadow-[0_0_15px_rgba(251,191,36,0.7)] animate-pulse"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Intro */}
      <motion.p
        className="text-center text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-14 
        leading-relaxed tracking-wide text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Explore how our dedicated manpower and event expertise bring{" "}
        <span className="text-amber-400 font-semibold">elegance</span>,{" "}
        <span className="text-amber-400 font-semibold">precision</span>, and{" "}
        <span className="text-amber-400 font-semibold">unforgettable moments</span>{" "}
        to every occasion.
      </motion.p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-20">
        {works.map((w, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl 
            bg-white/5 sm:bg-white/5 
            border border-white/10 
            shadow-none sm:shadow-xl 
            backdrop-blur-0 sm:backdrop-blur-lg 
            group"
            initial={{ opacity: 0, ...directions[i] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            viewport={{ once: true }}
            // disable hover scaling on mobile, keep on sm+
            whileHover={{ scale: 1.0, ...(window.innerWidth >= 640 && { scale: 1.03 }) }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={w.img}
                alt={w.title}
                className={`w-full h-full transition-transform duration-700 
                  group-hover:scale-100 sm:group-hover:scale-110
                  ${w.fix ? "object-cover object-top" : "object-cover object-center"}`}
              />
            </div>

            {/* Overlay */}
            <div
              className="absolute inset-0 
              bg-gradient-to-t from-black/60 sm:from-black/80 
              via-black/20 sm:via-black/40 to-transparent 
              flex flex-col items-center justify-end pb-6 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              transition-opacity duration-500"
            >
              <motion.h3
                className="text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 
                bg-clip-text text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide 
                text-center drop-shadow-none sm:drop-shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {w.title}
              </motion.h3>
              <motion.p
                className="text-gray-200 text-xs sm:text-sm md:text-base mt-2 italic tracking-wide text-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                {w.cat}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Shimmer Animation CSS */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
