import "../css/hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I’m <span>Karanam Venkata Raghava</span> 👋
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="tagline">
          I design and build clean, user-friendly web experiences.
        </p>

        <p className="intro">
          I’m a passionate developer who enjoys turning complex problems into
          simple, beautiful, and intuitive interfaces. I love working with
          modern web technologies and continuously improving my skills.
        </p>

        <div className="quick-facts">
          <div className="fact">🌐 Languages: Java, JavaScript</div>
          <div className="fact">💼 Role: B.Tech Student / Fresher</div>
          <div className="fact">🎯 Interests: UI Design, Web Apps</div>
        </div>
      </div>

      <div className="hero-image">
        <img src="23AT5A0505.jpeg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
