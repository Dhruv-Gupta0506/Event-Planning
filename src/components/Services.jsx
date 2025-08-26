import React from "react";
import {
  FaUserShield, FaUsers, FaGift, FaConciergeBell, FaMicrophone,
  FaTasks, FaHandsHelping, FaCamera, FaLaptop
} from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { icon: <FaConciergeBell />, title: "Shadows & Event Runners", desc: "Smooth coordination & timely execution" },
    { icon: <FaUsers />, title: "Food & Beverage Staff", desc: "Professional dining experience" },
    { icon: <FaHandsHelping />, title: "Logistics & Help Desk", desc: "Seamless guest assistance" },
    { icon: <FaMicrophone />, title: "Production & Stage Support", desc: "Flawless presentation & setup" },
    { icon: <FaUsers />, title: "VIP Hospitality & Guest Assistance", desc: "Personalized care for VIPs" },
    { icon: <FaGift />, title: "Hamper & Gift Handling", desc: "Organized distribution & management" },
    { icon: <FaUserShield />, title: "Security Personnel", desc: "Ensuring guest safety" },
    { icon: <FaCamera />, title: "Photographer/Media Assistants", desc: "Capture every special moment" },
    { icon: <FaUsers />, title: "Registration & Check-in Staff", desc: "Professional welcome experience" },
    { icon: <FaLaptop />, title: "On-site Technical Support", desc: "Smooth AV & technical execution" },
    { icon: <FaTasks />, title: "RSVP Management", desc: "Streamlined guest confirmations & attendance tracking" }
  ];

  return (
    <section id="services" className="about-section py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg animate-pulse break-words"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ✨ Our Premium Services ✨
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-300 max-w-xl sm:max-w-2xl mx-auto mb-14 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tailored manpower solutions designed to match the elegance of your event.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-[2px] group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              // disable hover effects on mobile
              whileHover={{ scale: 1.05, y: -8 }}
            >
              {/* Shimmer Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-[shimmer_3s_linear_infinite] bg-[length:200%_200%]"></div>

              {/* Inner Card */}
              <div
                className={`
                  relative rounded-2xl p-6 sm:p-8 text-center 
                  bg-white/5 sm:bg-white/10 
                  border border-gray-700 
                  shadow-none sm:shadow-lg 
                  backdrop-blur-0 sm:backdrop-blur-xl
                `}
              >
                <motion.div
                  className="text-white text-3xl sm:text-5xl mb-4 flex justify-center drop-shadow-lg"
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {s.icon}
                </motion.div>
                <h3 className="text-base sm:text-xl font-semibold mb-2 text-white">{s.title}</h3>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">{s.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* Custom Request Card */}
          <motion.div
            className="relative rounded-2xl p-[2px] group overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: services.length * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-[shimmer_3s_linear_infinite] bg-[length:200%_200%]"></div>
            <div className="relative rounded-2xl p-6 sm:p-8 text-center bg-gradient-to-br from-yellow-500/90 to-yellow-600/90 shadow-lg">
              <h3 className="text-lg sm:text-2xl font-bold mb-3 text-black">
                <span className="text-white">✨</span> Your Custom Need
              </h3>
              <p className="text-black text-xs sm:text-sm font-medium">
                Tell us your special requirement & we’ll make it happen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shimmer Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Services;
