import "./PhotoBooth.css";

function PhotoBooth() {
  return (
    <section
      className="photo-booth"
      data-aos="zoom-in"
    >

      <div className="photo-content">

        <p>SNAP • SHARE • CREATE MEMORIES</p>

        <h2>
          Every Visit Deserves A Memory
        </h2>

        <p>
          Capture beautiful moments with friends,
          family, pets, and your favorite coffee.
          Our thoughtfully designed photo spaces are
          made for creating memories you'll love sharing.
        </p>

        <ul>
          <li> Curated Photo Spaces</li>
          <li> Seasonal Decor Themes</li>
          <li> Cozy Café Aesthetics</li>
          <li> Instagram-Worthy Corners</li>
        </ul>

        <button className="photo-btn">
          Explore Gallery
        </button>

      </div>

      <div className="photo-image">

        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
          alt="Photo Booth"
        />

      </div>

    </section>
  );
}

export default PhotoBooth;