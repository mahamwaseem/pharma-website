function Navbar({ page, setPage }) {
  const links = ["Home", "Products", "About", "Contact", "Admin"];
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setPage("Home")}>
        <div className="brand-icon">V</div>
        <div>
          <div className="brand-name">Virida</div>
          <span className="brand-sub">Pharmaceuticals</span>
        </div>
      </div>
      <div className="nav-links">
        {links.map(l => (
          <button
            key={l}
            className={`nav-link ${l === "Admin" ? "admin-link" : ""} ${page === l ? "active" : ""}`}
            onClick={() => setPage(l)}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
