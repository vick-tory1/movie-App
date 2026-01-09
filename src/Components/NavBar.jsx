import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">

        {/* ✅ External portfolio link */}
        <a
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

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
