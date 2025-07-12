import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/End";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./data/Products";
import ProductItem from "./components/ProductList";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import HeroSection from "./components/Section";
import PriceFilter from "./components/PriceFilter";

function App() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const handleFilter = ({ type, value }) => {
    let result = [];

    if (type === "price") {
      const { min, max } = value;
      result = Products.filter((p) => p.price >= min && p.price <= max);
    } else if (type === "name") {
      const { name } = value;
      result = Products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    } else {
      result = Products; // Không lọc gì thì trả all
    }

    setFilteredProducts(result);
  };

  return (
    <Router>
      <Header />
      <HeroSection />

      <Routes>
        {/* Trang chính */}
        <Route
          path="/"
          element={
            <div className="container mt-4">
              <h1 className="text-center text-primary mb-4">
                Khóa học của chúng tôi
              </h1>
              <PriceFilter onFilter={handleFilter} />

              <div className="row">
                {filteredProducts.map((product) => (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    desc={product.shortDesc}
                  />
                ))}
              </div>
            </div>
          }
        />

        {/* Trang chi tiết */}
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
