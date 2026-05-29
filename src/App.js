import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Petals from "./components/Petals";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import SpiritBot from "./components/SpiritBot";
import SplashScreen from "./components/SplashScreen";

import "./styles/main.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  return (
    <>
      <SplashScreen />
      <Petals />

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle color theme"
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </motion.div>

      <SpiritBot />
    </>
  );
}

export default App;
