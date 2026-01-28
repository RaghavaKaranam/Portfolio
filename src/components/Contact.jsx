import "../css/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        {/* Left side: Contact details */}
        <div className="contact-info">
          <p>
            I’m open to internship and full-time opportunities. Feel free to
            reach out if you’d like to collaborate or discuss opportunities.
          </p>

          <ul>
            <li>
              📧 Email:
              <a href="mailto:raghavakaranam35@gmail.com">
                raghavakaranam35@gmail.com
              </a>
            </li>
            <li>📞 Phone: +91 9494707850</li>
            <li>
              💻 GitHub:
              <a
                href="https://github.com/RaghavaKaranam"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/RaghavaKaranam
              </a>
            </li>
            <li>
              🔗 LinkedIn:
              <a
                href="https://www.linkedin.com/in/raghava-karanam-a58562328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/raghava-karanam-a58562328/
              </a>
            </li>
          </ul>

          <a
            href="https://drive.google.com/file/d/15K7xuL_pUvXCTLASLM76H8n0hd5NTZ6y/view?usp=drive_link"
            download
            className="resume-btn"
          >
            <p> show Resume</p>
          </a>
        </div>

        {/* Right side: Contact form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
