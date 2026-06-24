import "./Workspace.css";

function Workspace() {
  return (
    <section
      className="workspace"
      data-aos="fade-right"
    >

      <div className="workspace-image">

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Workspace"
        />

      </div>

      <div className="workspace-content">

        <p>WORK • STUDY • CREATE</p>

        <h2>
          Designed For Focus & Creativity
        </h2>

        <p>
          Whether you're a student, freelancer, or remote
          professional, Nova Brew provides thoughtfully
          designed spaces that inspire productivity while
          keeping the cozy café atmosphere you love.
        </p>

        <ul>
          <li> Dedicated Productivity Spaces</li>
          <li> Unlimited Coffee Break Moments</li>
          <li> Convenient Charging Access</li>
          <li> Calm & Inspiring Environment</li>
        </ul>

        <button className="workspace-btn">
          Reserve A Workspace
        </button>

      </div>

    </section>
  );
}

export default Workspace;