import "./PetZone.css";

function PetZone() {
  return (
    <section
  id="petzone"
  className="pet-zone"
  data-aos="fade-right"
      >

      <div className="pet-image">

        <img
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
          alt="Pet Friendly Cafe"
        />

      </div>

      <div className="pet-content">

        <p>PET FRIENDLY EXPERIENCE</p>

        <h2>
          Every Coffee Tastes Better With A Companion
        </h2>

        <p>
          Nova Brew welcomes pets with dedicated
          seating zones, water stations, treats,
          and community meetups.
        </p>

        <ul>
          <li>Reserved Pet-Friendly Hours</li>
       <li>Comfortable Indoor Seating</li>
       <li>Cozy Companion Corner</li>
       <li>Fresh Water & Treat Stations</li>
       <li>Community Pet Gatherings</li>
        </ul>

      </div>

    </section>
  );
}

export default PetZone;