import { useState, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { GlobalStyle } from "./components/GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import { INITIAL_PRODUCTS } from "./data/products";

export default function App() {
  const [page, setPage] = useState("Home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(() => {
    try {
      const stored = localStorage.getItem("virida_products");
      return stored ? JSON.parse(stored) : INITIAL_PRODUCTS;
    } catch { return INITIAL_PRODUCTS; }
  });

  useEffect(() => {
    try { localStorage.setItem("virida_products", JSON.stringify(products)); } catch {}
  }, [products]);

  const addProduct = (p) => setProducts(prev => [...prev, p]);
  const deleteProduct = (id) => setProducts(prev => prev.filter(p => p.id !== id));

  const renderPage = () => {
    switch (page) {
      case "Home":    return <HomePage setPage={setPage} setSelectedProduct={setSelectedProduct} />;
      case "Products":return <ProductsPage setPage={setPage} setSelectedProduct={setSelectedProduct} />;
      case "ProductDetail": return <ProductDetailPage product={selectedProduct} setPage={setPage} />;
      case "About":   return <AboutPage />;
      case "Contact": return <ContactPage />;
      case "Admin":   return <AdminPage />;
      default:        return <HomePage setPage={setPage} setSelectedProduct={setSelectedProduct} />;
    }
  };

  return (
    <AppContext.Provider value={{ products, addProduct, deleteProduct }}>
      <GlobalStyle />
      <Navbar page={page} setPage={setPage} />
      <main style={{ paddingTop: "72px" }}>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />
    </AppContext.Provider>
  );
}
