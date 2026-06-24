import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h2>Nova Brew</h2>

        <p>
          Coffee, books, pets and cozy moments
          all under one roof.
        </p>
      </div>

      <div className="footer-links">

        <div>
          <h3>Explore</h3>

          <p>Menu</p>
          <p>Bakery</p>
          <p>Events</p>
          <p>Gallery</p>
        </div>

        <div>
          <h3>Visit</h3>

          <p>Visakhapatnam</p>
          <p>8 AM - 10 PM</p>
          <p>Pet Friendly</p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>Pinterest</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nova Brew. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;