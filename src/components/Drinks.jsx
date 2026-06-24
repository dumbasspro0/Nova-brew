import "./Drinks.css";

function Drinks() {
  return (
    <section
      id="menu"
      className="drinks"
      data-aos="fade-up"
    >

      <p className="small-heading">
        SIGNATURE DRINKS
      </p>

      <h2>
        Crafted For Every Mood
      </h2>

      <div className="drink-cards">

        <div className="drink-card">

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Coffee"
          />

          <h3>Specialty Coffee</h3>

          <p>
            Rich espresso, handcrafted lattes,
            cappuccinos and signature brews.
          </p>

        </div>

        <div className="drink-card">

          <img
            src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7"
            alt="Matcha"
          />

          <h3>Matcha Collection</h3>

          <p>
            Smooth ceremonial-grade matcha
            served hot or iced.
          </p>

        </div>

        <div className="drink-card">

          <img
            src="https://images.unsplash.com/photo-1558857563-b371033873b8"
            alt="Boba Tea"
          />

          <h3>Boba Tea</h3>

          <p>
            Refreshing teas with chewy pearls
            and creative flavors.
          </p>

        </div>

        <div className="drink-card">

          <img
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
            alt="Tea"
          />

          <h3>Artisan Teas</h3>

          <p>
            Herbal, floral and classic tea
            blends to soothe every mood.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Drinks;