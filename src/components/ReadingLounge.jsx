import "./ReadingLounge.css";

function ReadingLounge() {
  return (
    <section
      className="reading"
      data-aos="fade-left"
    >

      <div className="reading-content">

        <p>READ • RELAX • RECHARGE</p>

        <h2>
          Your Favorite Reading Corner
        </h2>

        <p>
          Escape into stories while enjoying handcrafted
          coffee and freshly baked treats. Whether you're
          studying, working, or simply unwinding, Nova Brew
          offers the perfect sanctuary for book lovers.
        </p>

        <ul>
          <li> Carefully Curated Library</li>
          <li> Cozy Reading Corners</li>
          <li> Signature Coffee Pairings</li>
          <li> Calm & Quiet Ambience</li>
        </ul>

        <button className="reading-btn">
          Explore The Library
        </button>

      </div>

      <div className="reading-image">

        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
          alt="Reading Lounge"
        />

      </div>

    </section>
  );
}

export default ReadingLounge;