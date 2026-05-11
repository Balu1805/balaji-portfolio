import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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

    if(darkMode){

      document.body.classList.add("dark-theme");

    }else{

      document.body.classList.remove("dark-theme");

    }

  }, [darkMode]);

  return (

    <>

      <SplashScreen />

      {/* THEME TOGGLE */}

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >

        {darkMode ? "🌸 Light" : "🌙 Dark"}

      </button>

      {/* MAIN WEBSITE */}

      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          duration:1.2
        }}
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