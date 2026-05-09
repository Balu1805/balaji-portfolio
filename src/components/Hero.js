import profile from "../assets/images/profile.jpg";
import fuji from "../assets/images/fuzi2.webp";

function Hero() {
  return (
    <section id="hero">

      <img
  src={fuji}
  alt="Mount Fuji"
  className="fuji-bg"
/>

      <div className="hero-bg-text">
        桜
      </div>

      <div className="hero-left reveal">

        <div className="hero-tag">
          Portfolio · 2025
        </div>

        <h1 className="hero-name">
          Gandham
          <br />
          Sai Balaji
        </h1>

        <div className="hero-name-jp">
          ガンダム・サイ・バラジ
        </div>

        <p className="hero-bio">
          Aspiring Software Engineer and AI/ML Developer at KL University.
          Building production-grade systems that blend machine learning,
          full-stack development, and cloud architecture.
        </p>

        <div className="hero-btns">

          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>

        </div>

      </div>

      <div className="hero-right reveal">

        <div className="profile-frame">

          <div className="profile-deco">
            桜
          </div>

          <img
            className="profile-img"
            src={profile}
            alt="profile"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;