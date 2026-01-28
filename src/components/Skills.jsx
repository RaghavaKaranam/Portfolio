import "../css/skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive UI Design</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend / Full Stack</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>JWT Authentication</li>
            <li>bcrypt</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>DBMS (Normalization, BCNF)</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Netlify</li>
            <li>Android Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
