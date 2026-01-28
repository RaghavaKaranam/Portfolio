import "../css/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <p>
          I’m a <strong>B.Tech student</strong> and an aspiring{" "}
          <strong>Full Stack Developer</strong> with a strong interest in
          building responsive, user-friendly web applications.
        </p>

        <p>
          I have hands-on experience with the <strong>MERN stack</strong> and
          completed an internship at <strong>SmartBridge</strong>, where I built
          a full-stack project called <strong>ShopSmart</strong>, a digital
          grocery web application.
        </p>

        <p>
          I am also certified as a <strong>ServiceNow CSA</strong> and{" "}
          <strong>CAD</strong>, which strengthened my understanding of
          enterprise platforms, workflows, and application development.
        </p>

        <p>
          I enjoy learning new technologies, solving real-world problems, and
          continuously improving my development and UI skills. I’m looking for
          opportunities where I can grow as a developer and contribute to
          meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
