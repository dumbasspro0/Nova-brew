import "./Bakery.css";

function Bakery() {
  return (
    <section id="bakery" className="bakery">

      <p className="small-heading">
        FRESH FROM THE OVEN
      </p>

      <h2>
        Handmade Bakery Delights
      </h2>

      <div className="bakery-cards">

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab794f4afe5a"
            alt="Croissant"
          />
          <h3>Croissants</h3>
          <p>Flaky, buttery and freshly baked every morning.</p>
          <a href="#">View Menu →</a>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
            alt="Muffins"
          />
          <h3>Muffins</h3>
          <p>Soft, fluffy and packed with delicious flavors.</p>
          <a href="#">View Menu →</a>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
            alt="Brownies"
          />
          <h3>Brownies</h3>
          <p>Rich chocolate goodness for every sweet tooth.</p>
          <a href="#">View Menu →</a>
        </div>

        <div className="bakery-card">
          <img
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e"
            alt="Cheesecake"
          />
          <h3>Cheesecake</h3>
          <p>Creamy, smooth and perfectly indulgent.</p>
          <a href="#">View Menu →</a>
        </div>

      </div>

    </section>
  );
}

export default Bakery;