import "./Workspace.css";

function Workspace() {
  return (
    <section className="workspace">

      <div className="workspace-image">

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          alt="Workspace"
        />

      </div>

      <div className="workspace-content">

        <p>WORK • STUDY • CREATE</p>

        <h2>
          Your Second Workspace
        </h2>

        <p>
          Whether you're a student, freelancer,
          or remote worker, Nova Brew offers
          comfortable seating, reliable WiFi,
          and a peaceful atmosphere designed
          for productivity.
        </p>

        <ul>
          <li>📶 High-Speed WiFi</li>
          <li>🔌 Charging Stations</li>
          <li>💻 Work-Friendly Tables</li>
          <li>🤫 Quiet Study Corners</li>
        </ul>

        <button className="workspace-btn">
          Book A Work Spot
        </button>

      </div>

    </section>
  );
}

export default Workspace;