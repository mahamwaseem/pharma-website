import { useState } from "react";
import { useApp } from "../context/AppContext";
import { EMOJI_OPTIONS, COLOR_OPTIONS } from "../data/products";

function AdminPage() {
  const { products, addProduct, deleteProduct } = useApp();
  const [form, setForm] = useState({
    name: "", category: "", shortDesc: "", fullDesc: "",
    usage: "", ingredients: "", storage: "", form_type: "",
    emoji: "💊", color: "#e8f5e9"
  });
  const [msg, setMsg] = useState("");

  const handleAdd = () => {
    if (!form.name || !form.category || !form.shortDesc) {
      setMsg("error:Please fill in Name, Category, and Short Description.");
      return;
    }
    addProduct({
      id: Date.now(),
      name: form.name, category: form.category,
      shortDesc: form.shortDesc, fullDesc: form.fullDesc,
      usage: form.usage, ingredients: form.ingredients,
      storage: form.storage, form: form.form_type,
      emoji: form.emoji, color: form.color,
      manufacturer: "ViridaPharm Labs"
    });
    setForm({ name: "", category: "", shortDesc: "", fullDesc: "", usage: "", ingredients: "", storage: "", form_type: "", emoji: "💊", color: "#e8f5e9" });
    setMsg("success:Product added successfully! It now appears on the Products page.");
    setTimeout(() => setMsg(""), 4000);
  };

  const isError = msg.startsWith("error:");
  const msgText = msg.replace(/^(error|success):/, "");

  return (
    <>
      <div className="page-header">
        <h1>Admin Panel</h1>
        <p>Manage your product catalogue</p>
      </div>
      <section className="section">
        <div className="admin-wrap">
          <div className="admin-card">
            <div className="admin-title">➕ Add New Product</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[["name","Product Name","CardioGuard Max"],["category","Category","Cardiovascular"],["form_type","Dosage Form","Film-coated Tablet"],["usage","Usage Instructions","1 tablet twice daily"],["ingredients","Key Ingredients","CoQ10, Vitamin K2"],["storage","Storage Conditions","Below 25°C"]].map(([key, label, ph]) => (
                <div className="form-group" key={key}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-mid)", marginBottom: 6 }}>{label}</label>
                  <input placeholder={ph} value={form[key]} onChange={e => setForm({...form, [key]: e.target.value})}
                    style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)", borderRadius: 8, fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", outline: "none", background: "var(--slate)" }} />
                </div>
              ))}
            </div>
            {[["shortDesc","Short Description (shown on card)","A brief, compelling overview…"],["fullDesc","Full Description (shown on detail page)","Comprehensive description of the product, its benefits, and clinical backing…"]].map(([key, label, ph]) => (
              <div className="form-group" key={key} style={{ marginTop: 12 }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-mid)", marginBottom: 6 }}>{label}</label>
                <textarea placeholder={ph} value={form[key]} onChange={e => setForm({...form, [key]: e.target.value})}
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid var(--border)", borderRadius: 8, fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", outline: "none", background: "var(--slate)", resize: "vertical", minHeight: 90 }} />
              </div>
            ))}

            <div style={{ marginTop: 12 }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-mid)", marginBottom: 8 }}>Product Icon</label>
              <div className="emoji-picker">
                {EMOJI_OPTIONS.map(e => (
                  <button key={e} className={`emoji-opt ${form.emoji === e ? "selected" : ""}`} onClick={() => setForm({...form, emoji: e})}>{e}</button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 16 }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-mid)", marginBottom: 8 }}>Card Background Color</label>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {COLOR_OPTIONS.map(c => (
                  <button key={c.val} onClick={() => setForm({...form, color: c.val})}
                    style={{ width: 44, height: 44, background: c.val, border: form.color === c.val ? "2.5px solid var(--g600)" : "1.5px solid var(--border)", borderRadius: 8, cursor: "pointer", transition: "all 0.2s", boxShadow: form.color === c.val ? "0 0 0 3px var(--g100)" : "none" }}
                    title={c.label} />
                ))}
              </div>
            </div>

            {msg && (
              <div style={{ marginTop: 16, padding: "12px 18px", background: isError ? "#fee2e2" : "var(--g50)", border: `1.5px solid ${isError ? "#fca5a5" : "var(--g300)"}`, borderRadius: 8, color: isError ? "#b91c1c" : "var(--g700)", fontSize: "0.9rem", fontWeight: 500 }}>
                {isError ? "⚠️" : "✅"} {msgText}
              </div>
            )}

            <button className="submit-btn" style={{ marginTop: 24 }} onClick={handleAdd}>Add Product to Catalogue</button>
          </div>

          <div className="admin-card">
            <div className="admin-title">📦 Current Products ({products.length})</div>
            <div className="admin-products-grid">
              {products.map(p => (
                <div className="admin-product-item" key={p.id}>
                  <span className="admin-emoji">{p.emoji}</span>
                  <div>
                    <div className="admin-item-name">{p.name}</div>
                    <div className="admin-item-cat">{p.category}</div>
                  </div>
                  <button className="admin-del-btn" onClick={() => deleteProduct(p.id)} title="Delete">✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminPage;
