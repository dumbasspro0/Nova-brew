import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-left">

        <p className="welcome">
          WELCOME TO NOVA BREW
        </p>

        <h1>
          A Cozy Haven
          <br />
          For Every Mood
        </h1>

        <p className="description">
          Sip handcrafted coffee, enjoy fresh bakery
          treats, relax with books, and spend quality
          time with your furry friends.
        </p>

        <div className="hero-buttons">

          <button className="menu-btn">
            Explore Menu
          </button>

          <button className="story-btn">
            Reserve Table
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
          alt="dog"
        />

      </div>

    </section>
  );
}

export default Hero;