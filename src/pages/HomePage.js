import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

function HomePage({ setPage, setSelectedProduct }) {
  const { products } = useApp();
  const featured = products.slice(0, 3);

  const handleView = (p) => { setSelectedProduct(p); setPage("ProductDetail"); };

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">⚗️ Trusted Since 2008</div>
          <h1>Science That <span>Heals,</span> Innovation That <span>Protects</span></h1>
          <p>Virida Pharmaceuticals develops evidence-based, clinically validated health solutions — formulated for efficacy, crafted for life.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => setPage("Products")}>Explore Products</button>
            <button className="btn-outline" onClick={() => setPage("About")}>Our Story</button>
          </div>
        </div>
        <div className="hero-visual">
          {[...Array(4)].map((_,i) => <div key={i} className="hero-cell" />)}
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        {[["200+","Products Developed"],["50+","Countries Served"],["15M+","Patients Helped"],["99.2%","Quality Pass Rate"]].map(([n,l]) => (
          <div key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
        ))}
      </div>

      {/* Featured Products */}
      <section className="section" style={{ background: "var(--slate)" }}>
        <div className="section-header">
          <div className="section-tag">🌿 Featured</div>
          <h2>Our Leading Formulations</h2>
          <p>Scientifically validated products trusted by healthcare professionals worldwide.</p>
        </div>
        <div className="products-grid">
          {featured.map(p => <ProductCard key={p.id} product={p} onClick={handleView} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-primary" style={{ background: "var(--g600)", color: "white" }} onClick={() => setPage("Products")}>
            View All Products →
          </button>
        </div>
      </section>

      {/* Why Us */}
      <section className="section" style={{ background: "white" }}>
        <div className="section-header">
          <div className="section-tag">Why Virida</div>
          <h2>The Virida Difference</h2>
          <p>We hold ourselves to pharmaceutical standards even for wellness products.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {[
            ["🔬","GMP Certified","All products manufactured in WHO-GMP certified facilities."],
            ["🧬","Clinically Validated","Each formulation backed by peer-reviewed research."],
            ["🌿","Natural + Science","Bridging botanical wisdom with modern pharmacology."],
            ["🛡️","Quality Guaranteed","100% purity testing before every batch release."],
          ].map(([icon,title,desc]) => (
            <div key={title} style={{ padding: "28px 24px", background: "var(--g50)", borderRadius: "var(--radius)", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{icon}</div>
              <div style={{ fontFamily: "Playfair Display, serif", fontSize: "1.1rem", color: "var(--g900)", marginBottom: 8 }}>{title}</div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-light)", lineHeight: 1.65 }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
