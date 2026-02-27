import { useState } from "react";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

function ProductsPage({ setPage, setSelectedProduct }) {
  const { products } = useApp();
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const cats = ["All", ...new Set(products.map(p => p.category))];

  const filtered = products.filter(p =>
    (cat === "All" || p.category === cat) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (p) => { setSelectedProduct(p); setPage("ProductDetail"); };

  return (
    <>
      <div className="page-header">
        <h1>Our Products</h1>
        <p>Pharmaceutical-grade formulations for every health need</p>
      </div>
      <section className="section">
        {/* Filters */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                style={{ padding: "7px 18px", border: "1.5px solid", borderColor: cat === c ? "var(--g600)" : "var(--border)", background: cat === c ? "var(--g600)" : "white", color: cat === c ? "white" : "var(--text-mid)", borderRadius: 100, cursor: "pointer", fontSize: "0.85rem", fontFamily: "DM Sans, sans-serif", fontWeight: 500, transition: "all 0.2s" }}>
                {c}
              </button>
            ))}
          </div>
          <input placeholder="🔍  Search products…" value={search} onChange={e => setSearch(e.target.value)}
            style={{ padding: "10px 18px", border: "1.5px solid var(--border)", borderRadius: 10, fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", outline: "none", width: 230, background: "white" }} />
        </div>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-light)" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🔍</div>
            <p>No products found matching your search.</p>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map(p => <ProductCard key={p.id} product={p} onClick={handleView} />)}
          </div>
        )}
      </section>
    </>
  );
}

export default ProductsPage;
