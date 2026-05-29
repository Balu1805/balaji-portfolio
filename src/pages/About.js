import { motion } from "framer-motion";

function About() {
  const journey = [
    {
      label: "FOUNDATION",
      title: "Ravindra Bharathi Public School",
      text: "Completed 10th standard while building discipline, curiosity, and strong academic foundations."
    },
    {
      label: "INTERMEDIATE",
      title: "Sri Sarada Junior College",
      text: "Strengthened analytical thinking and developed a deeper passion for engineering and technology."
    },
    {
      label: "BACHELOR'S DEGREE",
      title: "K L University",
      text: "Pursuing Computer Science Engineering with focus on Artificial Intelligence, Cloud Computing, and Full Stack Development."
    }
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="section-label">私について ・ ABOUT</div>
      <h2 className="section-title">Beyond The Screen</h2>
      <div className="section-line"></div>

      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
        >
          <p>
            I am an aspiring Software Engineer and AI/ML Developer from
            Vijayawada with a strong interest in creating intelligent systems,
            immersive interfaces, and meaningful digital experiences.
          </p>

          <p>
            My development journey focuses on blending Artificial Intelligence,
            Full Stack Engineering, Cloud Technologies, and elegant UI/UX design
            into systems that feel both functional and cinematic.
          </p>

          <p>
            I like building products where the model, backend, interface, and
            deployment story work together: clean data flow, reliable APIs,
            thoughtful interaction, and a user experience that feels finished.
          </p>

          <p>
            Beyond coding, discipline from gym training, strategic thinking from
            chess, and competitive focus from badminton shape the mindset I
            bring into engineering and leadership.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">3</div>
            <div className="stat-label">Team Lead Roles</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">AWS</div>
            <div className="stat-label">Cloud Certified</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">AI</div>
            <div className="stat-label">Core Focus</div>
          </div>
        </motion.div>
      </div>

      <div className="journey-section">
        {journey.map((item, index) => (
          <div className="journey-row" key={item.title}>
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-content">
                <span className="journey-year">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
            {index < journey.length - 1 && <div className="journey-line"></div>}
          </div>
        ))}
      </div>

      <div className="focus-strip">
        <div>
          <span>Current Focus</span>
          <strong>AI-first full stack systems</strong>
        </div>
        <div>
          <span>Working Style</span>
          <strong>Product thinking + clean engineering</strong>
        </div>
        <div>
          <span>Strength</span>
          <strong>Learning fast and shipping calmly</strong>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
