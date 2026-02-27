// ─────────────────────────────────────────────
//  src/pages/AdminPage.jsx
//  Product add / delete karne ka panel
// ─────────────────────────────────────────────

import { useState } from "react";
import { useApp } from "../context/AppContext";

// Available icons for products
const EMOJI_OPTIONS = ["💊", "🧬", "🔬", "🛡️", "🧠", "🦴", "✨", "🌿", "💉", "🩺", "⚗️", "🩻"];

// Available card background colors
const COLOR_OPTIONS = [
  { label: "Mint",     val: "#e8f5e9" },
  { label: "Sky",      val: "#e3f2fd" },
  { label: "Lavender", val: "#f3e5f5" },
  { label: "Amber",    val: "#fff8e1" },
  { label: "Rose",     val: "#fce4ec" },
  { label: "Teal",     val: "#e0f7fa" },
];

// ══════════════════════════════════════════
//  🔐 ADMIN PASSWORD — set admin password here
const ADMIN_PASSWORD = "virida123";
// ══════════════════════════════════════════

// ── Password Lock Screen ──
function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogin = () => {
    if (input === ADMIN_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 600);
    }
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--slate)" }}>
      <div
        style={{
          background: "white", border: "1px solid var(--border)",
          borderRadius: "var(--radius)", padding: "48px 40px",
          boxShadow: "var(--shadow-md)", width: "100%", maxWidth: 420,
          textAlign: "center",
          animation: shake ? "shake 0.5s ease" : "none",
        }}
      >
        <div style={{ width: 64, height: 64, background: "var(--g100)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 20px" }}>
          🔐
        </div>
        <h2 style={{ fontFamily: "Playfair Display, serif", color: "var(--g900)", marginBottom: 8 }}>Admin Access</h2>
        <p style={{ color: "var(--text-light)", fontSize: "0.9rem", marginBottom: 28 }}>
          Yeh page sirf authorized users ke liye hai.<br />Password enter karein.
        </p>

        <input
          type="password"
          placeholder="Password dalein…"
          value={input}
          onChange={(e) => { setInput(e.target.value); setError(false); }}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          style={{
            width: "100%", padding: "13px 16px", marginBottom: 12,
            border: `1.5px solid ${error ? "#f87171" : "var(--border)"}`,
            borderRadius: 10, fontFamily: "DM Sans, sans-serif",
            fontSize: "1rem", outline: "none",
            background: error ? "#fff5f5" : "var(--slate)",
            textAlign: "center", letterSpacing: "0.15em",
          }}
        />

        {error && (
          <div style={{ color: "#dc2626", fontSize: "0.85rem", marginBottom: 12, fontWeight: 500 }}>
            ❌ Galat password — dobara try karein
          </div>
        )}

        <button
          onClick={handleLogin}
          onMouseOver={(e) => (e.currentTarget.style.background = "var(--g700)")}
          onMouseOut={(e)  => (e.currentTarget.style.background = "var(--g600)")}
          style={{
            width: "100%", padding: "13px", background: "var(--g600)",
            color: "white", border: "none", borderRadius: 10,
            fontFamily: "DM Sans, sans-serif", fontSize: "1rem",
            fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
          }}
        >
          Login →
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%  { transform: translateX(-10px); }
          40%  { transform: translateX(10px); }
          60%  { transform: translateX(-8px); }
          80%  { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}

// ── Main Admin Panel ──
export default function AdminPage() {
  const { products, addProduct, deleteProduct } = useApp();

  // 🔐 Sare hooks pehle — React ka rule hai (hooks conditional ke pehle)
  const [unlocked, setUnlocked] = useState(false);
  const [form, setForm] = useState({
    name: "", category: "", shortDesc: "", fullDesc: "",
    usage: "", ingredients: "", storage: "", form_type: "",
    emoji: "💊", color: "#e8f5e9",
  });
  const [msg, setMsg] = useState("");

  // Password screen — agar lock hai toh yahan rok lo
  if (!unlocked) return <PasswordGate onUnlock={() => setUnlocked(true)} />;

  const handleAdd = () => {
    // Validation
    if (!form.name || !form.category || !form.shortDesc) {
      setMsg("error:Please fill in Name, Category, and Short Description.");
      return;
    }

    // New product banao
    addProduct({
      id:           Date.now(),
      name:         form.name,
      category:     form.category,
      shortDesc:    form.shortDesc,
      fullDesc:     form.fullDesc,
      usage:        form.usage,
      ingredients:  form.ingredients,
      storage:      form.storage,
      form:         form.form_type,
      emoji:        form.emoji,
      color:        form.color,
      manufacturer: "ViridaPharm Labs",
    });

    // Form reset
    setForm({
      name: "", category: "", shortDesc: "", fullDesc: "",
      usage: "", ingredients: "", storage: "", form_type: "",
      emoji: "💊", color: "#e8f5e9",
    });

    setMsg("success:Product added successfully! It now appears on the Products page.");
    setTimeout(() => setMsg(""), 4000);
  };

  const isError = msg.startsWith("error:");
  const msgText = msg.replace(/^(error|success):/, "");

  return (
    <>
      {/* ── Page Header ── */}
      <div className="page-header">
        <h1>Admin Panel</h1>
        <p>Manage your product catalogue</p>
      </div>

      <section className="section">
        <div className="admin-wrap">

          {/* ════════════════════════════════════
              ADD NEW PRODUCT FORM
              ════════════════════════════════════ */}
          <div className="admin-card">
            <div className="admin-title">➕ Add New Product</div>

            {/* ── Basic Info Grid ── */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                ["name",      "Product Name",           "e.g. CardioGuard Max"],
                ["category",  "Category",               "e.g. Cardiovascular"],
                ["form_type", "Dosage Form",             "e.g. Film-coated Tablet"],
                ["usage",     "Usage Instructions",      "e.g. 1 tablet twice daily"],
                ["ingredients","Key Ingredients",        "e.g. CoQ10, Vitamin K2"],
                ["storage",   "Storage Conditions",      "e.g. Below 25°C"],
              ].map(([key, label, placeholder]) => (
                <div className="form-group" key={key}>
                  <label
                    style={{
                      display: "block", fontSize: "0.85rem", fontWeight: 600,
                      color: "var(--text-mid)", marginBottom: 6,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{
                      width: "100%", padding: "11px 14px",
                      border: "1.5px solid var(--border)", borderRadius: 8,
                      fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem",
                      outline: "none", background: "var(--slate)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ── Description Textareas ── */}
            {[
              ["shortDesc", "Short Description (shown on card)",        "A brief, compelling overview…"],
              ["fullDesc",  "Full Description (shown on detail page)",  "Comprehensive description of the product…"],
            ].map(([key, label, placeholder]) => (
              <div className="form-group" key={key} style={{ marginTop: 12 }}>
                <label
                  style={{
                    display: "block", fontSize: "0.85rem", fontWeight: 600,
                    color: "var(--text-mid)", marginBottom: 6,
                  }}
                >
                  {label}
                </label>
                <textarea
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  style={{
                    width: "100%", padding: "11px 14px",
                    border: "1.5px solid var(--border)", borderRadius: 8,
                    fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem",
                    outline: "none", background: "var(--slate)",
                    resize: "vertical", minHeight: 90,
                  }}
                />
              </div>
            ))}

            {/* ── Emoji / Icon Picker ── */}
            <div style={{ marginTop: 12 }}>
              <label
                style={{
                  display: "block", fontSize: "0.85rem", fontWeight: 600,
                  color: "var(--text-mid)", marginBottom: 8,
                }}
              >
                Product Icon
              </label>
              <div className="emoji-picker">
                {EMOJI_OPTIONS.map((e) => (
                  <button
                    key={e}
                    className={`emoji-opt ${form.emoji === e ? "selected" : ""}`}
                    onClick={() => setForm({ ...form, emoji: e })}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Color Picker ── */}
            <div style={{ marginTop: 16 }}>
              <label
                style={{
                  display: "block", fontSize: "0.85rem", fontWeight: 600,
                  color: "var(--text-mid)", marginBottom: 8,
                }}
              >
                Card Background Color
              </label>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {COLOR_OPTIONS.map((c) => (
                  <button
                    key={c.val}
                    title={c.label}
                    onClick={() => setForm({ ...form, color: c.val })}
                    style={{
                      width: 44, height: 44, background: c.val, cursor: "pointer",
                      border: form.color === c.val ? "2.5px solid var(--g600)" : "1.5px solid var(--border)",
                      borderRadius: 8, transition: "all 0.2s",
                      boxShadow: form.color === c.val ? "0 0 0 3px var(--g100)" : "none",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* ── Message (success / error) ── */}
            {msg && (
              <div
                style={{
                  marginTop: 16, padding: "12px 18px",
                  background: isError ? "#fee2e2" : "var(--g50)",
                  border: `1.5px solid ${isError ? "#fca5a5" : "var(--g300)"}`,
                  borderRadius: 8,
                  color: isError ? "#b91c1c" : "var(--g700)",
                  fontSize: "0.9rem", fontWeight: 500,
                }}
              >
                {isError ? "⚠️" : "✅"} {msgText}
              </div>
            )}

            {/* ── Submit Button ── */}
            <button className="submit-btn" style={{ marginTop: 24 }} onClick={handleAdd}>
              Add Product to Catalogue
            </button>
          </div>

          {/* ════════════════════════════════════
              EXISTING PRODUCTS LIST
              ════════════════════════════════════ */}
          <div className="admin-card">
            <div className="admin-title">📦 Current Products ({products.length})</div>

            <div className="admin-products-grid">
              {products.map((p) => (
                <div className="admin-product-item" key={p.id}>
                  <span className="admin-emoji">{p.emoji}</span>
                  <div>
                    <div className="admin-item-name">{p.name}</div>
                    <div className="admin-item-cat">{p.category}</div>
                  </div>
                  <button
                    className="admin-del-btn"
                    title="Delete product"
                    onClick={() => deleteProduct(p.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
