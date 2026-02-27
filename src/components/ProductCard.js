function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="card-image" style={{ background: product.color || "#e8f5e9" }}>
        <span style={{ fontSize: "4rem" }}>{product.emoji}</span>
      </div>
      <div className="card-body">
        <div className="card-category">{product.category}</div>
        <div className="card-name">{product.name}</div>
        <div className="card-desc">{product.shortDesc}</div>
        <div className="card-footer">
          <button className="card-btn">View Details</button>
          <span className="card-arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
