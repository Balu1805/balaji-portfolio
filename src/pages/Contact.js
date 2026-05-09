import { motion } from "framer-motion";

function Contact() {

  return (

    <motion.section

      id="contact"

      className="contact-section"

      initial={{
        opacity:0,
        y:80
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1.2
      }}

      viewport={{
        once:true
      }}
    >

      {/* JAPANESE BACKGROUND */}

      <div className="contact-bg-kanji">
        桜
      </div>

      {/* HEADER */}

      <div className="section-tag">
        連絡 ・ CONTACT
      </div>

      <h2 className="contact-title">
        Let’s Build
        <br />
        Something Beautiful
      </h2>

      <div className="contact-line"></div>

      {/* DESCRIPTION */}

      <p className="contact-description">

        Open to opportunities, collaborations,
        and innovative software engineering projects
        involving Artificial Intelligence,
        Full Stack Development,
        Cloud Technologies,
        and immersive digital experiences.

      </p>

      {/* CONTACT BOX */}

      <motion.div

        className="contact-box"

        initial={{
          opacity:0,
          scale:0.95
        }}

        whileInView={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

        viewport={{
          once:true
        }}
      >

        {/* EMAIL */}

        <a
          href="mailto:saibalajigandham877@gmail.com"
          className="contact-mail"
        >
          saibalajigandham877@gmail.com
        </a>

        {/* INFO */}

        <p className="contact-info">
          +91 9059335585 · Vijayawada, India
        </p>

        {/* LINKS */}

        <div className="contact-links">

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/Balu1805"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a
            href="/resume.pdf"
            download
          >
            RESUME
          </a>

        </div>

      </motion.div>

      {/* FOOTER */}

      <div className="contact-footer">
        桜 ・ Gandham Sai Balaji ・ 2025 ・ 花よりも美しい未来へ
      </div>

    </motion.section>

  );
}

export default Contact;