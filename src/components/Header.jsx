import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close mobile menu
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? "bg-[#0f172a]/80 py-2 shadow-lg" : "bg-[#0f172a]/60 py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-2 md:px-6">
        {/* Brand */}
        <h1
          className="cursor-pointer text-2xl font-bold tracking-wider bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
          onClick={() => scrollToSection("hero")}
        >
          CoreCrew Services
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["hero", "about", "services", "pricing", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="relative font-semibold tracking-wider uppercase text-gray-300 transition-all duration-300 hover:text-yellow-400 hover:scale-105"
            >
              {item === "hero"
                ? "Home"
                : item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-300 focus:outline-none pr-10" // 🔥 extra padding-right
          >
            <FaBars size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[#0f172a] w-full h-screen flex flex-col">
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-10 text-gray-300 hover:text-yellow-400 transition-colors" // 🔥 extra padding-right
          >
            <FaTimes size={34} />
          </button>

          {/* Menu items */}
          <div className="flex flex-col items-center justify-center flex-1 space-y-10">
            {["hero", "about", "services", "pricing", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-2xl font-semibold tracking-wider uppercase text-gray-300 hover:text-yellow-400 hover:scale-105 transition-transform duration-300"
              >
                {item === "hero"
                  ? "Home"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
