import "./PhotoBooth.css";

function PhotoBooth() {
  return (
    <section className="photo-booth">

      <div className="photo-content">

        <p>SNAP • SHARE • SMILE</p>

        <h2>
          Capture Your Nova Brew Moments
        </h2>

        <p>
          From cozy coffee dates to pet selfies and
          book club memories, our aesthetic photo booth
          is designed to help you create unforgettable moments.
        </p>

        <ul>
          <li>📸 Aesthetic Backdrops</li>
          <li>🐶 Pet-Friendly Photo Corner</li>
          <li>🌸 Seasonal Decorations</li>
          <li>✨ Instagram-Worthy Setup</li>
        </ul>

        <button className="photo-btn">
          Explore Gallery
        </button>

      </div>

      <div className="photo-image">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt="Photo Booth"
        />

      </div>

    </section>
  );
}

export default PhotoBooth;