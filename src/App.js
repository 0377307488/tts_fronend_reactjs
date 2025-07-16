import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/End";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./data/Products";
import ProductItem from "./components/ProductList";
import Header from "./components/Header";
import ProductDetail from "./pages/ProductDetail";
import HeroSection from "./components/Section";
import PriceFilter from "./components/PriceFilter";
import FavoritesPage from "./pages/FavoritesPage";
import { getSuggestions } from "./api/suggestions"; // ✅ CHÍNH XÁC
import Pagination from "./components/Pagination";
import HistoryPage from "./pages/HistoryPage";
import Chatbot from "./components/Chatbot";

function App() {
  // lọc sản phẩm theo tên hoặc giá
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

  // Thêm vào yêu thích
  const [favorites, setFavorites] = useState(() => {
    const save = localStorage.getItem("favorites");
    return save ? JSON.parse(save) : [];
  });
  const toggleFavorite = (product) => {
    const isFavorite = favorites.some((item) => item.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ✅ Mỗi khi favorites thay đổi, lưu lại vào localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  //
  const handleSuggestions = async () => {
    const result = await getSuggestions(123); // userId giả lập
    setFilteredProducts(result);
  };

  const handleView = (product) => {
    const history = JSON.parse(localStorage.getItem("viewHistory")) || [];
    const updated = history.filter((item) => item.id !== product.id);
    updated.unshift(product);
    localStorage.setItem("viewHistory", JSON.stringify(updated.slice(0, 10)));
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
              <div className="text-center mb-3">
                <button className="btn btn-warning" onClick={handleSuggestions}>
                  🎯 Gợi ý sản phẩm phù hợp
                </button>
              </div>
              <div className="row">
                {currentProducts.map((product) => (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    desc={product.shortDesc}
                    product={product} // ✅ THÊM
                    toggleFavorite={toggleFavorite} // ✅ THÊM
                    isFavorite={favorites.some(
                      (item) => item.id === product.id
                    )} // ✅ THÊM
                    handleView={handleView}
                  />
                ))}
              </div>
            </div>
          }
        />

        {/* Trang chi tiết */}
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              isFavorite={true}
            />
          }
        />
        <Route
          path="/history"
          element={
            <HistoryPage
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              handleView={handleView}
            />
          }
        />
      </Routes>
      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Chatbot products={Products} />
      <Footer></Footer>
    </Router>
  );
}

export default App;
