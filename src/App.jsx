// src/App.jsx
import React from "react";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Team />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
      <ThankYou />
      <Footer />
    </>
  );
}

export default App;
