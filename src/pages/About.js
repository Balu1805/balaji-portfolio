import { motion } from "framer-motion";

function About() {

  return (

    <motion.section

      id="about"

      initial={{
        opacity:0,
        y:80
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1.2,
        ease:"easeOut"
      }}

      viewport={{
        once:true
      }}
    >

      {/* SECTION LABEL */}

      <div className="section-label">
        私について ・ ABOUT
      </div>

      {/* TITLE */}

      <h2 className="section-title">
        Beyond The Screen
      </h2>

      <div className="section-line"></div>

      {/* ABOUT GRID */}

      <div className="about-grid">

        {/* LEFT SIDE */}

        <motion.div

          className="about-text"

          initial={{
            opacity:0,
            x:-60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1.1
          }}

          viewport={{
            once:true
          }}
        >

          <p>
            I am an aspiring Software Engineer and AI/ML Developer
            from Vijayawada with a strong interest in creating
            intelligent systems, immersive interfaces,
            and meaningful digital experiences.
          </p>

          <p>
            My development journey focuses on blending
            Artificial Intelligence,
            Full Stack Engineering,
            Cloud Technologies,
            and elegant UI/UX design into systems
            that feel both functional and cinematic.
          </p>

          <p>
            Beyond coding,
            discipline from gym training,
            strategic thinking from chess,
            and competitive focus from badminton
            shape the mindset I bring into engineering and leadership.
          </p>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div

          className="stats-grid"

          initial={{
            opacity:0,
            x:60
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:1.2
          }}

          viewport={{
            once:true
          }}
        >

          {/* CARD 1 */}

          <div className="stat-card">

            <div className="stat-number">
              6
            </div>

            <div className="stat-label">
              PROJECTS BUILT
            </div>

          </div>

          {/* CARD 2 */}

          <div className="stat-card">

            <div className="stat-number">
              3
            </div>

            <div className="stat-label">
              TEAM LEAD ROLES
            </div>

          </div>

          {/* CARD 3 */}

          <div className="stat-card">

            <div className="stat-number">
              AWS
            </div>

            <div className="stat-label">
              CLOUD CERTIFIED
            </div>

          </div>

          {/* CARD 4 */}

          <div className="stat-card">

            <div className="stat-number">
              HAR
            </div>

            <div className="stat-label">
              SOLO AI PROJECT
            </div>

          </div>

        </motion.div>

      </div>

      {/* =========================
          JOURNEY SECTION
      ========================= */}

      <div className="journey-section">

        {/* ITEM 1 */}

        <div className="journey-item">

          <div className="journey-dot"></div>

          <div className="journey-content">

            <span className="journey-year">

              FOUNDATION

            </span>

            <h3>

              Ravindra Bharathi Public School

            </h3>

            <p>

              Completed 10th standard while building
              discipline, curiosity and strong academic
              foundations.

            </p>

          </div>

        </div>

        <div className="journey-line"></div>

        {/* ITEM 2 */}

        <div className="journey-item">

          <div className="journey-dot"></div>

          <div className="journey-content">

            <span className="journey-year">

              INTERMEDIATE

            </span>

            <h3>

              Sri Sarada Junior College

            </h3>

            <p>

              Strengthened analytical thinking and
              developed a deeper passion towards
              engineering and technology.

            </p>

          </div>

        </div>

        <div className="journey-line"></div>

        {/* ITEM 3 */}

        <div className="journey-item">

          <div className="journey-dot"></div>

          <div className="journey-content">

            <span className="journey-year">

              BACHELOR'S DEGREE

            </span>

            <h3>

              K L University

            </h3>

            <p>

              Pursuing Computer Science Engineering
              with focus on Artificial Intelligence,
              Cloud Computing and Full Stack Development.

            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default About;