import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="contact-bg-kanji">桜</div>

      <div className="section-label">連絡 ・ CONTACT</div>
      <h2 className="contact-title">
        Let's Build
        <br />
        Something Beautiful
      </h2>
      <div className="contact-line"></div>

      <p className="contact-description">
        Open to opportunities, collaborations, internships, and innovative
        software engineering projects involving Artificial Intelligence, Full
        Stack Development, Cloud Technologies, and immersive digital
        experiences.
      </p>

      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a href="mailto:saibalajigandham877@gmail.com" className="contact-mail">
          saibalajigandham877@gmail.com
        </a>

        <p className="contact-info">+91 9059335585 / Vijayawada, India</p>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/gandham-sai-balaji"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Balu1805"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/resume.pdf" download>
            Resume
          </a>
        </div>
      </motion.div>

      <div className="contact-footer">
        桜 ・ Gandham Sai Balaji ・ 2026 ・ 花よりも美しい未来へ
      </div>
    </motion.section>
  );
}

export default Contact;
