import { motion } from "framer-motion";

import profile from "../assets/images/profile.jpg";
import fuji from "../assets/images/fuzi2.webp";

function Hero() {
  return (
    <section id="hero">
      <img src={fuji} alt="Mount Fuji" className="fuji-bg" />

      <div className="hero-bg-text">桜</div>

      <motion.div
        className="hero-left reveal"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      >
        <div className="hero-tag">作品集 ・ AI ・ FULL STACK ・ CLOUD</div>

        <h1 className="hero-name">
          Gandham
          <br />
          Sai Balaji
        </h1>

        <div className="hero-name-jp">
          ガンダム・サイ・バラジ
        </div>

        <p className="hero-bio">
          Aspiring Software Engineer and AI/ML Developer focused on building
          intelligent systems, immersive digital experiences, and scalable full
          stack applications blending Artificial Intelligence, Cloud
          Technologies, and elegant UI engineering.
        </p>

        <div className="hero-highlights" aria-label="Core skills">
          <span>AI/ML</span>
          <span>React</span>
          <span>Spring Boot</span>
          <span>AWS</span>
        </div>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
          <a href="/resume.pdf" download className="btn-outline">Download Resume</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right reveal"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="profile-frame">
          <div className="profile-deco">桜</div>
          <img className="profile-img" src={profile} alt="Gandham Sai Balaji" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
