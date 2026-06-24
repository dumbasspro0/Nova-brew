import "./Drinks.css";

function Drinks() {
  return (
    <section id="menu" className="drinks">

      <p className="small-heading">
        SIP SOMETHING SPECIAL
      </p>

      <h2>
        Drinks For Every Mood
      </h2>

      <div className="drink-cards">

        <div className="drink-card">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="coffee"
          />
          <h3>Coffee</h3>
          <p>Classic brews and specialty coffees.</p>
        </div>

        <div className="drink-card">
          <img
            src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7"
            alt="matcha"
          />
          <h3>Matcha</h3>
          <p>Creamy, earthy and made with love.</p>
        </div>

        <div className="drink-card">
          <img
            src="https://images.unsplash.com/photo-1558857563-b371033873b8"
            alt="boba"
          />
          <h3>Boba Tea</h3>
          <p>Fun flavors and chewy goodness.</p>
        </div>

        <div className="drink-card">
          <img
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3"
            alt="tea"
          />
          <h3>Tea</h3>
          <p>Warm, soothing and refreshing.</p>
        </div>

      </div>

    </section>
  );
}

export default Drinks;