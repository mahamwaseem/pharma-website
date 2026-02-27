export const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --g900: #0a2e1f;
      --g800: #0f4a32;
      --g700: #166040;
      --g600: #1a7a50;
      --g500: #219660;
      --g400: #3bb57a;
      --g300: #6dcea0;
      --g200: #a8e4c6;
      --g100: #d6f5e8;
      --g50:  #edfbf4;
      --slate: #f8faf9;
      --white: #ffffff;
      --text-dark: #0d1f17;
      --text-mid: #2d4a3a;
      --text-light: #5a7a68;
      --border: #c8e8d8;
      --shadow-sm: 0 2px 8px rgba(10,46,31,0.08);
      --shadow-md: 0 8px 32px rgba(10,46,31,0.12);
      --shadow-lg: 0 20px 60px rgba(10,46,31,0.16);
      --radius: 16px;
      --radius-sm: 8px;
      font-family: 'DM Sans', sans-serif;
      color: var(--text-dark);
      background: var(--slate);
      scroll-behavior: smooth;
    }

    body { overflow-x: hidden; }

    h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }

    /* ── NAVBAR ── */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
      padding: 0 5%;
      display: flex; align-items: center; justify-content: space-between;
      height: 72px;
    }
    .navbar-brand {
      display: flex; align-items: center; gap: 10px; text-decoration: none;
      cursor: pointer;
    }
    .brand-icon {
      width: 40px; height: 40px; background: var(--g600);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      color: white; font-size: 18px; font-weight: 700;
    }
    .brand-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; color: var(--g800); font-weight: 700; }
    .brand-sub { font-size: 0.65rem; color: var(--g500); letter-spacing: 2px; text-transform: uppercase; display: block; margin-top: -2px; }
    .nav-links { display: flex; align-items: center; gap: 4px; }
    .nav-link {
      padding: 8px 16px; border-radius: 8px; border: none; background: none;
      cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
      font-weight: 500; color: var(--text-mid); transition: all 0.2s;
    }
    .nav-link:hover { background: var(--g50); color: var(--g700); }
    .nav-link.active { background: var(--g600); color: white; }
    .nav-link.admin-link { border: 1.5px solid var(--g400); color: var(--g600); }
    .nav-link.admin-link:hover { background: var(--g600); color: white; }

    /* ── HERO ── */
    .hero {
      min-height: 100vh; background: linear-gradient(135deg, var(--g900) 0%, var(--g700) 50%, var(--g500) 100%);
      position: relative; overflow: hidden; display: flex; align-items: center;
      padding: 0 5%;
    }
    .hero::before {
      content: ''; position: absolute; inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .hero-content { position: relative; z-index: 1; max-width: 600px; }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
      color: var(--g200); padding: 6px 16px; border-radius: 100px;
      font-size: 0.8rem; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;
      margin-bottom: 24px;
    }
    .hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); color: white; line-height: 1.15; margin-bottom: 20px; }
    .hero h1 span { color: var(--g300); }
    .hero p { font-size: 1.1rem; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 36px; }
    .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
    .btn-primary {
      padding: 14px 28px; background: white; color: var(--g800); border: none;
      border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
      font-weight: 600; cursor: pointer; transition: all 0.25s;
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,0.2); }
    .btn-outline {
      padding: 14px 28px; background: transparent; color: white;
      border: 1.5px solid rgba(255,255,255,0.4); border-radius: 10px;
      font-family: 'DM Sans', sans-serif; font-size: 0.95rem; font-weight: 500;
      cursor: pointer; transition: all 0.25s;
    }
    .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: white; }
    .hero-visual {
      position: absolute; right: 5%; top: 50%; transform: translateY(-50%);
      display: grid; grid-template-columns: 1fr 1fr; gap: 16px; opacity: 0.15;
    }
    .hero-cell {
      width: 120px; height: 120px; border: 1.5px solid white; border-radius: 16px;
    }

    /* ── STATS ── */
    .stats-bar {
      background: white; padding: 40px 5%; border-bottom: 1px solid var(--border);
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: center;
    }
    .stat-num { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: var(--g700); font-weight: 700; }
    .stat-label { font-size: 0.85rem; color: var(--text-light); margin-top: 4px; }

    /* ── SECTION ── */
    .section { padding: 80px 5%; }
    .section-header { text-align: center; margin-bottom: 56px; }
    .section-tag {
      display: inline-block; background: var(--g100); color: var(--g700);
      padding: 4px 14px; border-radius: 100px; font-size: 0.78rem;
      font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 16px;
    }
    .section-header h2 { font-size: clamp(1.8rem, 3vw, 2.6rem); color: var(--g900); margin-bottom: 16px; }
    .section-header p { font-size: 1.05rem; color: var(--text-light); max-width: 520px; margin: 0 auto; line-height: 1.7; }

    /* ── PRODUCT GRID ── */
    .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 28px; }

    /* ── PRODUCT CARD ── */
    .product-card {
      background: white; border-radius: var(--radius); border: 1px solid var(--border);
      overflow: hidden; transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer; box-shadow: var(--shadow-sm);
    }
    .product-card:hover { transform: translateY(-8px); box-shadow: var(--shadow-lg); border-color: var(--g300); }
    .card-image {
      height: 200px; display: flex; align-items: center; justify-content: center;
      font-size: 4rem; position: relative; overflow: hidden;
    }
    .card-image::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.04));
    }
    .card-body { padding: 20px 24px 24px; }
    .card-category {
      font-size: 0.72rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
      color: var(--g500); margin-bottom: 8px;
    }
    .card-name { font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--g900); margin-bottom: 10px; }
    .card-desc { font-size: 0.88rem; color: var(--text-light); line-height: 1.6; margin-bottom: 20px; }
    .card-footer { display: flex; align-items: center; justify-content: space-between; }
    .card-btn {
      padding: 9px 20px; background: var(--g600); color: white; border: none;
      border-radius: 8px; font-family: 'DM Sans', sans-serif; font-size: 0.85rem;
      font-weight: 600; cursor: pointer; transition: all 0.2s;
    }
    .card-btn:hover { background: var(--g700); transform: translateX(2px); }
    .card-arrow { color: var(--g400); font-size: 1.2rem; }

    /* ── PAGE HEADER ── */
    .page-header {
      background: linear-gradient(135deg, var(--g900), var(--g700));
      padding: 120px 5% 60px; color: white; text-align: center;
    }
    .page-header h1 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 12px; }
    .page-header p { color: rgba(255,255,255,0.7); font-size: 1.05rem; }

    /* ── PRODUCT DETAIL ── */
    .detail-grid {
      display: grid; grid-template-columns: 1fr 1.3fr; gap: 60px; align-items: start;
      max-width: 1100px; margin: 0 auto;
    }
    .detail-image-box {
      background: white; border-radius: var(--radius); border: 1px solid var(--border);
      height: 420px; display: flex; align-items: center; justify-content: center;
      font-size: 9rem; box-shadow: var(--shadow-md);
    }
    .detail-badge {
      display: inline-block; background: var(--g100); color: var(--g700);
      padding: 5px 14px; border-radius: 100px; font-size: 0.78rem; font-weight: 600;
      letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px;
    }
    .detail-name { font-size: clamp(1.8rem, 3vw, 2.4rem); color: var(--g900); margin-bottom: 16px; }
    .detail-desc { font-size: 1rem; color: var(--text-light); line-height: 1.8; margin-bottom: 32px; }
    .detail-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }
    .info-chip {
      background: var(--g50); border: 1px solid var(--border); border-radius: var(--radius-sm);
      padding: 14px 16px;
    }
    .info-chip-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 1px; color: var(--g500); text-transform: uppercase; margin-bottom: 4px; }
    .info-chip-val { font-size: 0.9rem; color: var(--text-dark); font-weight: 500; }
    .back-btn {
      display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px;
      background: transparent; border: 1.5px solid var(--border); border-radius: 10px;
      cursor: pointer; font-family: 'DM Sans', sans-serif; font-size: 0.9rem;
      color: var(--text-mid); transition: all 0.2s; margin-bottom: 40px;
    }
    .back-btn:hover { background: var(--g50); border-color: var(--g300); }

    /* ── ABOUT ── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
    .about-visual {
      background: linear-gradient(135deg, var(--g700), var(--g500));
      border-radius: var(--radius); height: 400px; display: flex; align-items: center;
      justify-content: center; font-size: 6rem; box-shadow: var(--shadow-md);
    }
    .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px; }
    .mv-card {
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 28px; box-shadow: var(--shadow-sm);
    }
    .mv-icon { font-size: 1.8rem; margin-bottom: 12px; }
    .mv-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: var(--g800); margin-bottom: 8px; }
    .mv-text { font-size: 0.88rem; color: var(--text-light); line-height: 1.65; }
    .values-list { list-style: none; margin-top: 20px; display: flex; flex-direction: column; gap: 12px; }
    .values-list li {
      display: flex; align-items: flex-start; gap: 10px;
      font-size: 0.95rem; color: var(--text-mid);
    }
    .check { color: var(--g500); font-size: 1.1rem; margin-top: 1px; }

    /* ── CONTACT ── */
    .contact-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 60px; }
    .contact-form {
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 40px; box-shadow: var(--shadow-sm);
    }
    .form-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--g900); margin-bottom: 6px; }
    .form-sub { color: var(--text-light); font-size: 0.9rem; margin-bottom: 28px; }
    .form-group { margin-bottom: 20px; }
    .form-group label { display: block; font-size: 0.85rem; font-weight: 600; color: var(--text-mid); margin-bottom: 6px; }
    .form-group input, .form-group textarea {
      width: 100%; padding: 12px 16px; border: 1.5px solid var(--border);
      border-radius: var(--radius-sm); font-family: 'DM Sans', sans-serif;
      font-size: 0.95rem; color: var(--text-dark); transition: border-color 0.2s;
      outline: none; background: var(--slate);
    }
    .form-group input:focus, .form-group textarea:focus { border-color: var(--g400); background: white; }
    .form-group textarea { resize: vertical; min-height: 130px; }
    .submit-btn {
      width: 100%; padding: 14px; background: var(--g600); color: white; border: none;
      border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 1rem;
      font-weight: 600; cursor: pointer; transition: all 0.25s;
    }
    .submit-btn:hover { background: var(--g700); box-shadow: 0 8px 24px rgba(21,100,64,0.3); }
    .contact-info { display: flex; flex-direction: column; gap: 24px; }
    .info-card {
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 24px; box-shadow: var(--shadow-sm); display: flex; align-items: flex-start; gap: 16px;
    }
    .info-icon {
      width: 44px; height: 44px; background: var(--g100); border-radius: 10px;
      display: flex; align-items: center; justify-content: center; font-size: 1.2rem;
      flex-shrink: 0;
    }
    .info-label { font-size: 0.78rem; font-weight: 600; color: var(--g500); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; }
    .info-val { font-size: 0.95rem; color: var(--text-dark); font-weight: 500; }
    .success-msg {
      background: var(--g50); border: 1.5px solid var(--g300); border-radius: 10px;
      padding: 16px 20px; color: var(--g700); font-weight: 500; font-size: 0.95rem;
      margin-top: 16px; text-align: center;
    }

    /* ── ADMIN ── */
    .admin-wrap { max-width: 900px; margin: 0 auto; }
    .admin-card {
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 40px; box-shadow: var(--shadow-sm); margin-bottom: 40px;
    }
    .admin-title { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--g900); margin-bottom: 24px; }
    .admin-products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px; margin-top: 24px; }
    .admin-product-item {
      border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 16px;
      display: flex; align-items: center; gap: 12px; background: var(--g50);
    }
    .admin-emoji { font-size: 2rem; }
    .admin-item-name { font-weight: 600; font-size: 0.9rem; color: var(--text-dark); }
    .admin-item-cat { font-size: 0.78rem; color: var(--text-light); }
    .admin-del-btn {
      margin-left: auto; background: #fee2e2; border: none; border-radius: 6px;
      color: #b91c1c; width: 30px; height: 30px; cursor: pointer; font-size: 0.9rem;
      transition: background 0.2s;
    }
    .admin-del-btn:hover { background: #fca5a5; }
    .emoji-picker { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
    .emoji-opt {
      font-size: 1.5rem; width: 44px; height: 44px; border: 1.5px solid var(--border);
      border-radius: 8px; cursor: pointer; display: flex; align-items: center;
      justify-content: center; transition: all 0.2s; background: white;
    }
    .emoji-opt.selected { border-color: var(--g400); background: var(--g50); box-shadow: 0 0 0 3px var(--g100); }
    .emoji-opt:hover { border-color: var(--g400); }

    /* ── FOOTER ── */
    .footer {
      background: var(--g900); color: rgba(255,255,255,0.7);
      padding: 60px 5% 32px;
    }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .footer-brand-name { font-family: 'Playfair Display', serif; color: white; font-size: 1.3rem; margin-bottom: 12px; }
    .footer-tagline { font-size: 0.88rem; line-height: 1.65; margin-bottom: 20px; }
    .footer-col h4 { color: white; font-size: 0.85rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 16px; }
    .footer-link {
      display: block; color: rgba(255,255,255,0.6); font-size: 0.88rem; margin-bottom: 10px;
      cursor: pointer; transition: color 0.2s; text-decoration: none;
    }
    .footer-link:hover { color: var(--g300); }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;
      display: flex; justify-content: space-between; align-items: center;
    }
    .footer-copy { font-size: 0.85rem; }
    .footer-legal { display: flex; gap: 20px; }
    .footer-legal span { font-size: 0.82rem; cursor: pointer; }
    .footer-legal span:hover { color: var(--g300); }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      .nav-links { display: none; }
      .detail-grid, .about-grid, .contact-grid, .footer-grid { grid-template-columns: 1fr; }
      .mv-grid { grid-template-columns: 1fr; }
      .stats-bar { grid-template-columns: 1fr 1fr; }
      .hero-visual { display: none; }
    }
    @media (max-width: 500px) {
      .stats-bar { grid-template-columns: 1fr; }
      .detail-info-grid { grid-template-columns: 1fr; }
    }
  `}</style>
);
