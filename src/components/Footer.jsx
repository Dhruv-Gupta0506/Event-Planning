import React from "react";
import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-center text-gray-300 py-12 font-lato relative overflow-visible">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400/20 via-yellow-300/20 to-yellow-400/20 z-0"></div>

      {/* Floating spark particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <span className="absolute w-1 h-1 bg-yellow-400 rounded-full top-1/4 left-1/3 opacity-20 animate-pulse"></span>
        <span className="absolute w-1 h-1 bg-yellow-300 rounded-full top-3/4 left-2/3 opacity-15 animate-pulse"></span>
      </div>

      {/* Footer text */}
      <p className="relative z-10 text-sm md:text-base mb-4">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 animate-text-shimmer cursor-pointer">
          CoreCrew Services
        </span>
        . All rights reserved.
      </p>

      {/* Social icons with shimmer */}
      <div className="flex justify-center items-center gap-6 relative z-10 mb-2">
        <a
          href="https://www.instagram.com/corecrewservices"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/corecrewservices"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="mailto:itshubhamm@gmail.com"
          className="social-icon"
        >
          <FaEnvelope size={20} />
        </a>
      </div>

      {/* Soft golden bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-400/10 via-yellow-400/5 to-transparent pointer-events-none z-0"></div>

      <style jsx>{`
        @keyframes textShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-text-shimmer {
          animation: textShimmer 5s linear infinite;
          background-size: 400% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes iconShimmer {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.15); filter: brightness(1.5); }
          100% { transform: scale(1); filter: brightness(1); }
        }
        .social-icon {
          color: #FFD700;
          transition: color 0.3s;
          animation: iconShimmer 3s ease-in-out infinite;
        }
        .social-icon:hover {
          color: #FFB700;
        }

        /* Mobile tweaks */
        @media (max-width: 640px) {
          footer {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
