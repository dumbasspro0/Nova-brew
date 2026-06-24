import "./ReadingLounge.css";

function ReadingLounge() {
  return (
    <section className="reading">

      <div className="reading-content">

        <p>READ • RELAX • RECHARGE</p>

        <h2>
          Your Favorite Reading Corner
        </h2>

        <p>
          Escape into stories while enjoying handcrafted
          coffee and fresh bakery items. Whether you're
          studying, working, or simply relaxing, Nova Brew
          offers the perfect nook.
        </p>

        <ul>
          <li>📚 Curated Book Collection</li>
          <li>🪑 Cozy Reading Nooks</li>
          <li>☕ Coffee & Book Pairings</li>
          <li>🌿 Quiet Atmosphere</li>
        </ul>

        <button className="reading-btn">
          Explore The Library
        </button>

      </div>

      <div className="reading-image">

        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
          alt="Reading Lounge"
        />

      </div>

    </section>
  );
}

export default ReadingLounge;