import "./Features.css";

import { FaPaw } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";

function Features() {
  return (
    <section className="features">

      <div className="feature-card">
        <h3>
          <FaPaw className="feature-icon" />
          Pet Friendly
        </h3>
        <p>
          Bring your furry friends along.
        </p>
      </div>

      <div className="feature-card">
        <h3>
          <FaWifi className="feature-icon" />
          Free WiFi
        </h3>
        <p>
          Perfect for work and study.
        </p>
      </div>

      <div className="feature-card">
        <h3>
          <IoBookOutline className="feature-icon" />
          Reading Space
        </h3>
        <p>
          Relax with books and coffee.
        </p>
      </div>

      <div className="feature-card">
        <h3>
          <MdOutlinePhotoCamera className="feature-icon" />
          Photo Booth
        </h3>
        <p>
          Capture your cozy moments.
        </p>
      </div>

    </section>
  );
}

export default Features;