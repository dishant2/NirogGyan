import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="logo">🩺 NirogGyan</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/appointments">My Appointments</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
