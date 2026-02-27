function AboutPage() {
  return (
    <>
      <div className="page-header">
        <h1>About Virida</h1>
        <p>Our story, our mission, our commitment to health</p>
      </div>
      <section className="section" style={{ background: "white" }}>
        <div className="about-grid">
          <div>
            <div className="section-tag">Our Story</div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "2rem", color: "var(--g900)", margin: "16px 0" }}>
              Over 15 Years of Healing Innovation
            </h2>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginBottom: 16 }}>
              Founded in 2008 by Dr. Amara Hassan and a team of pharmaceutical scientists, Virida began with a singular mission: create health products that combine the rigor of pharmaceutical science with the accessibility of everyday wellness.
            </p>
            <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginBottom: 24 }}>
              From a small research lab in Lahore, we've grown to serve over 15 million patients across 50+ countries, all while maintaining WHO-GMP certification and our founding commitment to evidence-based formulation.
            </p>
            <ul className="values-list">
              {["Transparent ingredient sourcing from ethical suppliers","All formulas third-party tested for purity and potency","Committed to zero harmful additives or proprietary blends","Active investment in clinical research partnerships"].map(v => (
                <li key={v}><span className="check">✓</span> {v}</li>
              ))}
            </ul>
          </div>
          <div className="about-visual">🔬</div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div className="section-tag">Our Purpose</div>
          <h2>Mission & Vision</h2>
        </div>
        <div className="mv-grid">
          {[
            ["🎯","Our Mission","To democratize access to pharmaceutical-grade health solutions that empower individuals to live healthier, longer, more vibrant lives — regardless of geography or economic background."],
            ["🔭","Our Vision","A world where preventive healthcare is the norm, chronic disease is the exception, and every person has access to science-backed tools for optimal wellbeing."],
            ["💡","Our Values","Integrity in every formulation. Transparency in every label. Innovation guided by evidence. And compassion in every patient interaction."],
            ["🌱","Sustainability","We are committed to responsible sourcing, carbon-neutral manufacturing, and packaging that minimizes our environmental footprint — because the planet's health matters too."],
          ].map(([icon, title, text]) => (
            <div className="mv-card" key={title}>
              <div className="mv-icon">{icon}</div>
              <div className="mv-title">{title}</div>
              <p className="mv-text">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
