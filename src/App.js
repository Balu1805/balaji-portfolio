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
import Petals from "./components/Petals";

import "./styles/main.css";

function App() {

  return (

    <>

      {/* SPLASH SCREEN */}

      <SplashScreen />

      {/* PETALS BACKGROUND */}

      <Petals />

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

      {/* SPIRIT COMPANION */}

      <SpiritBot />

    </>

  );
}

export default App;