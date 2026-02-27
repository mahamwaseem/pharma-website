export default function Navbar({ page, setPage }) {
  
  const links = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="navbar">
      {/* ── Logo / Brand ── */}
      <div className="navbar-brand" onClick={() => setPage("Home")}>
        <div className="brand-icon">V</div>
        <div>
          <div className="brand-name">Virida</div>
          <span className="brand-sub">Pharmaceuticals</span>
        </div>
      </div>

      {/* ── Nav Links (Admin hidden) ── */}
      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link}
            className={`nav-link ${page === link ? "active" : ""}`}
            onClick={() => setPage(link)}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
