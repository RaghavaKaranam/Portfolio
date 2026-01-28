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

            <li>
              📞 Phone:
              <a href="tel:+919494707850"> +91 9494707850</a>
            </li>

            <li>
              💻 GitHub:
              <a
                href="https://github.com/RaghavaKaranam"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/RaghavaKaranam
              </a>
            </li>

            <li>
              🔗 LinkedIn:
              <a
                href="https://www.linkedin.com/in/raghava-karanam-a58562328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/raghava-karanam
              </a>
            </li>
          </ul>

          {/* Resume link (Drive – open in new tab) */}
          <a
            href="https://drive.google.com/file/d/15K7xuL_pUvXCTLASLM76H8n0hd5NTZ6y/view"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        </div>

        {/* Right side: Contact form (Formspree) */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xdagrapr" // 🔁 replace with YOUR form ID
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
