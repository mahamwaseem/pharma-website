function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand-name">Virida Pharmaceuticals</div>
          <p className="footer-tagline">Advancing human health through innovation, integrity, and science-backed formulations since 2008.</p>
          <div style={{ display: "flex", gap: 10 }}>
            {["🔬","🧬","💊"].map(e => (
              <div key={e} style={{ width: 38, height: 38, background: "rgba(255,255,255,0.08)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>{e}</div>
            ))}
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {["Home","Products","About","Contact"].map(l => (
            <span key={l} className="footer-link" onClick={() => setPage(l)}>{l}</span>
          ))}
        </div>
        <div>
          <h4>Products</h4>
          {["Cardiovascular","Immunology","Neurology","Orthopedics","Dermatology"].map(c => (
            <span key={c} className="footer-link">{c}</span>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <span className="footer-link">📍 14 Science Park Ave, Lahore</span>
          <span className="footer-link">📞 +92 42 3580 0000</span>
          <span className="footer-link">✉️ hello@viridapharma.com</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2025 Virida Pharmaceuticals. All rights reserved.</span>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
