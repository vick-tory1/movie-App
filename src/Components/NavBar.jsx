import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`navbar${menuOpen ? " menu-open" : ""}`}
      style={{
        backgroundImage: 'url("/main_header.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="nav-brand">
        <a
          className="portfolio-link"
          href="https://portfolio-coral-seven-21.vercel.app"
          target="_self"
        >
          ← Back to Portfolio
        </a>

        <span className="brand-link">
          🦁 Tory Adams Movie App
        </span>
      </div>

      <button
        className="nav-menu-toggle"
        type="button"
        aria-controls="movie-navigation-links"
        aria-expanded={menuOpen}
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="navbar-links" id="movie-navigation-links">
        <a
          className="nav-link portfolio-menu-link"
          href="https://portfolio-coral-seven-21.vercel.app"
        >
          ← Back to Portfolio
        </a>

        <Link
          to="/"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/favorites"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;