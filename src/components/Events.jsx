import "./Events.css";

import { IoBookOutline } from "react-icons/io5";
import { FaPaw } from "react-icons/fa";
import { MdMusicNote } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";

function Events() {
  return (
    <section
      id="events"
      className="events"
      data-aos="fade-up"
    >

      <p className="small-heading">
        COMMUNITY & EXPERIENCES
      </p>

      <h2>
        Gather, Connect & Create Memories
      </h2>

      <div className="event-cards">

        <div className="event-card">

          <div className="event-icon">
            <IoBookOutline />
          </div>

          <h3>Book Club Nights</h3>

          <p>
            Join fellow readers for meaningful
            conversations over coffee and pastries.
          </p>

        </div>

        <div className="event-card">

          <div className="event-icon">
            <FaPaw />
          </div>

          <h3>Pet Community Meetups</h3>

          <p>
            Meet fellow pet lovers and enjoy
            memorable moments together.
          </p>

        </div>

        <div className="event-card">

          <div className="event-icon">
            <MdMusicNote />
          </div>

          <h3>Acoustic Evenings</h3>

          <p>
            Relax with intimate live music
            performances in a cozy atmosphere.
          </p>

        </div>

        <div className="event-card">

          <div className="event-icon">
            <GiCupcake />
          </div>

          <h3>Baking Workshops</h3>

          <p>
            Discover the art of baking and
            create delicious treats with experts.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Events;