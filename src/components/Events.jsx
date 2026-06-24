import "./Events.css";

function Events() {
  return (
    <section id="events" className="events">

      <p className="small-heading">
        COMMUNITY & EXPERIENCES
      </p>

      <h2>
        Events At Nova Brew
      </h2>

      <div className="event-cards">

        <div className="event-card">
          <h3>📚 Book Club Nights</h3>
          <p>
            Join fellow readers for engaging discussions
            over coffee and pastries.
          </p>
        </div>

        <div className="event-card">
          <h3>🐶 Pet Meetups</h3>
          <p>
            Meet other pet lovers and let your furry
            friends make new companions.
          </p>
        </div>

        <div className="event-card">
          <h3>🎵 Acoustic Evenings</h3>
          <p>
            Relax with live music performances in our
            cozy café atmosphere.
          </p>
        </div>

        <div className="event-card">
          <h3>🍪 Baking Workshops</h3>
          <p>
            Learn baking secrets and create delicious
            treats with our chefs.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Events;