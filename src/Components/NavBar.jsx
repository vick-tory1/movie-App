import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar${menuOpen ? " menu-open" : ""}`}>
      <div className="nav-brand">

        {/* ✅ External portfolio link */}
        <a
          className="portfolio-link"
          href="https://portfolio-coral-seven-21.vercel.app"
          target="_self"
          style={{
            position: "absolute",
            top: 145,
            left: 16,
            background: "#222",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: 6,
            textDecoration: "none",
            zIndex: 9999,
            fontFamily: "sans-serif",
            marginLeft: 14,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          ← Back to Portfolio
        </a>

        {/* ✅ App title (not a router link) */}
        <span
          className="brand-link"
          style={{
            position: "absolute",
            top: 37,
            left: 30,
            fontWeight: "bold",
          }}
        >
          🦁 Tory Adams Movie App
        </span>
      </div>

      <button
        className="nav-menu-toggle"
        type="button"
        aria-controls="movie-navigation-links"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="navbar-links" id="movie-navigation-links">
        <a className="nav-link portfolio-menu-link" href="https://portfolio-coral-seven-21.vercel.app">
          ← Back to Portfolio
        </a>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
