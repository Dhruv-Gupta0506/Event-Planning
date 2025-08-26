import React, { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const openLink = (appUrl, webUrl) => {
    const timeout = setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 500);

    window.location = appUrl;
    window.addEventListener("blur", () => clearTimeout(timeout));
  };

  return (
    <section id="contact" className="bg-[#1e293b] py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent animate-shimmer"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      {/* Motion Divider Line */}
      <motion.div
        className="h-1 w-16 sm:w-24 md:w-32 mx-auto mb-12 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.7)]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Contact Info */}
        <motion.div
          className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl text-gray-300">
            📞 Phone:{" "}
            <span
              onClick={() => (window.location = "tel:7011914400")}
              className="cursor-pointer font-semibold text-yellow-400 hover:underline"
            >
              7011914400
            </span>
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            ✉️ Email:{" "}
            <span
              onClick={() =>
                openLink(
                  "googlegmail:///co?to=itshubhamm@gmail.com",
                  "mailto:itshubhamm@gmail.com"
                )
              }
              className="cursor-pointer font-semibold text-yellow-400 hover:underline"
            >
              itshubhamm@gmail.com
            </span>
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            📱 Instagram:{" "}
            <span
              onClick={() =>
                openLink(
                  "instagram://user?username=corecrewservices",
                  "https://www.instagram.com/corecrewservices"
                )
              }
              className="cursor-pointer font-semibold text-yellow-400 hover:underline"
            >
              @corecrewservices
            </span>
          </p>
          <p className="text-lg sm:text-xl text-gray-300">
            📱 Facebook:{" "}
            <span
              onClick={() =>
                openLink(
                  "fb://profile/corecrewservices",
                  "https://www.facebook.com/corecrewservices"
                )
              }
              className="cursor-pointer font-semibold text-yellow-400 hover:underline"
            >
              @corecrewservices
            </span>
          </p>
        </motion.div>

        {/* WhatsApp Scanner */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/917011914400"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 sm:p-6 rounded-xl border-2 border-yellow-400 shadow-2xl transition-transform duration-200 hover:scale-105"
          >
            <img
              src="/scanner.jpeg"
              alt="WhatsApp Scanner"
              className="w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 object-cover rounded-lg"
            />
            <p className="text-gray-300 mt-4 text-base sm:text-lg text-center">
              Chat with us on WhatsApp
            </p>
          </a>
        </motion.div>
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
      `}</style>
    </section>
  );
};

export default Contact;
