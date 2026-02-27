import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you — patients, professionals, and partners alike</p>
      </div>
      <section className="section">
        <div className="contact-grid">
          <div className="contact-form">
            <div className="form-title">Send us a Message</div>
            <p className="form-sub">Our team typically responds within 24 business hours.</p>
            <div className="form-group">
              <label>Full Name</label>
              <input placeholder="Dr. Sarah Ahmed" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="sarah@clinic.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us how we can help…" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Send Message →</button>
            {sent && <div className="success-msg">✅ Message sent! We'll be in touch within 24 hours.</div>}
          </div>

          <div className="contact-info">
            {[
              ["📍","Our Address","14 Science Park Avenue, Lahore, Punjab, Pakistan"],
              ["📞","Phone","(+92) 42 3580 0000"],
              ["✉️","Email","hello@viridapharma.com"],
              ["🕐","Business Hours","Mon – Fri: 9:00 AM – 6:00 PM PKT"],
            ].map(([icon, label, val]) => (
              <div className="info-card" key={label}>
                <div className="info-icon">{icon}</div>
                <div>
                  <div className="info-label">{label}</div>
                  <div className="info-val">{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
