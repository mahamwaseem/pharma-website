function ProductDetailPage({ product, setPage }) {
  if (!product) { setPage("Products"); return null; }
  return (
    <>
      <div className="page-header">
        <h1>{product.name}</h1>
        <p>{product.category} · Virida Pharmaceuticals</p>
      </div>
      <section className="section">
        <button className="back-btn" onClick={() => setPage("Products")}>← Back to Products</button>
        <div className="detail-grid">
          <div>
            <div className="detail-image-box" style={{ background: product.color || "#e8f5e9" }}>
              <span style={{ fontSize: "8rem" }}>{product.emoji}</span>
            </div>
          </div>
          <div>
            <div className="detail-badge">{product.category}</div>
            <h2 className="detail-name">{product.name}</h2>
            <p className="detail-desc">{product.fullDesc || product.shortDesc}</p>
            <div className="detail-info-grid">
              {[
                ["💊 Form", product.form],
                ["⚗️ Usage", product.usage],
                ["🌿 Ingredients", product.ingredients],
                ["📦 Storage", product.storage],
                ["🏭 Manufacturer", product.manufacturer],
              ].filter(([,v]) => v).map(([label, val]) => (
                <div className="info-chip" key={label}>
                  <div className="info-chip-label">{label}</div>
                  <div className="info-chip-val">{val}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--g50)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "16px 20px" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--g600)", marginBottom: 6 }}>⚠️ IMPORTANT NOTICE</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-light)", lineHeight: 1.65 }}>This product is intended for use under the guidance of a qualified healthcare professional. Consult your physician before starting any new supplement regimen.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailPage;
