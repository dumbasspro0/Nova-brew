import "./Bakery.css";

function Bakery() {
  return (
    <section
      className="bakery"
      data-aos="fade-up"
    >

      <p className="small-heading">
        FRESH FROM THE OVEN
      </p>

      <h2>
        Baked Daily With Love
      </h2>

      <div className="bakery-cards">

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a"
            alt="Croissant"
          />

          <h3>Butter Croissants</h3>

          <p>
            Flaky, buttery and baked fresh every morning.
          </p>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
            alt="Bread"
          />

          <h3>Artisan Breads</h3>

          <p>
            Freshly baked breads crafted with premium ingredients.
          </p>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
            alt="Muffins"
          />

          <h3>Muffins</h3>

          <p>
            Soft, moist and available in seasonal flavors.
          </p>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1586985289906-406988974504"
            alt="Cheesecake"
          />

          <h3>Cheesecakes</h3>

          <p>
            Rich, creamy and perfect alongside your coffee.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Bakery;