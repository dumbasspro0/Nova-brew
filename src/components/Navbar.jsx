import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h1 className="logo">
        Nova Brew
      </h1>

      <ul className="nav-links">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#menu">Menu</a>
        </li>

        <li>
          <a href="#bakery">Bakery</a>
        </li>

        <li>
          <a href="#petzone">Pet Zone</a>
        </li>

        <li>
          <a href="#events">Events</a>
        </li>

      </ul>

      <a href="#reservation">
  <button className="reserve-btn">
    Reserve Table
  </button>
</a>

    </nav>
  );
}

export default Navbar;