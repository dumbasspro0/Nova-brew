import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <p className="small-heading">
        VISIT US
      </p>

      <h2>
        We'd Love To See You
      </h2>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>📍 Location</h3>
          <p>Nova Brew Café, Visakhapatnam</p>
        </div>

        <div className="contact-card">
          <h3>⏰ Opening Hours</h3>
          <p>8:00 AM - 10:00 PM</p>
        </div>

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div className="contact-card">
          <h3>✉️ Email</h3>
          <p>hello@novabrew.com</p>
        </div>

      </div>

    </section>
  );
}

export default Contact;