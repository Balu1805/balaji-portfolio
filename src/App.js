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



function App() {

  return (
    <>

      <SplashScreen />

      <Petals />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Certifications />

      <Contact />

      <SpiritBot />


    </>
  );
}

export default App;