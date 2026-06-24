import "./PetZone.css";

function PetZone() {
  return (
    <section id="petzone" className="pet-zone">

      <div className="pet-image">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
          alt="Pet Friendly Cafe"
        />
      </div>

      <div className="pet-content">

        <p>PET FRIENDLY CORNER</p>

        <h2>
          Because Coffee Is Better With Companions
        </h2>

        <p>
          Bring your furry friends and enjoy a cozy café
          experience together. Nova Brew offers dedicated
          pet hours, water stations, treats, and fun pet
          community events.
        </p>

        <ul>
          <li>🐶 Dedicated Dog Area</li>
          <li>🐱 Cat Friendly Space</li>
          <li>💧 Water Stations</li>
          <li>🦴 Complimentary Pet Treats</li>
          <li>🎉 Monthly Pet Meetups</li>
        </ul>

        <button className="pet-btn">
          Explore Pet Events
        </button>

      </div>

    </section>
  );
}

export default PetZone;