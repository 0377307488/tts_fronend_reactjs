import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HistoryPage({ toggleFavorite, favorites, handleView }) {
  // Lấy lịch sử xem từ localStorage
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("viewHistory")) || [];
    setHistory(stored);
  }, []);

  // Kiểm tra sản phẩm có trong danh sách yêu thích hay không
  const isFavorite = (product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  // Lấy thời gian xem đã lưu trong item, nếu không có thì trả về "Không rõ"
  const getTimeViewed = (item) => {
    if (item.viewedAt) {
      const date = new Date(item.viewedAt);
      return (
        date.toLocaleDateString("vi-VN") +
        " " +
        date.toLocaleTimeString("vi-VN")
      );
    }
    return "Không rõ";
  };

  if (history.length === 0) {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">🕒 Lịch sử xem</h2>
        <p>Bạn chưa xem sản phẩm nào.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🕒 Lịch sử xem</h2>
      <div className="list-group">
        {history.map((product) => (
          <div
            key={product.id}
            className="list-group-item list-group-item-action d-flex align-items-center flex-wrap"
            style={{ borderRadius: "8px", marginBottom: "1rem" }}
          >
            {/* Ảnh sản phẩm */}
            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "80px",
                maxHeight: "80px",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "6px",
                marginRight: "1rem",
                marginBottom: "0.5rem",
              }}
              className="img-fluid"
            />

            {/* Thông tin chính */}
            <div className="flex-grow-1 me-3">
              <h5 className="mb-1 fw-bold">{product.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {product.price.toLocaleString()} VND
              </h6>
              <p className="card-text">{product.shortDesc}</p>
              <p className="card-text">{product.category}</p>
              <small className="text-muted">
                Thời gian xem: {getTimeViewed(product)}
              </small>
            </div>

            {/* Các nút thao tác */}
            <div
              className="d-flex flex-column flex-sm-row gap-2"
              style={{ minWidth: "180px" }}
            >
              <Link
                to={`/products/${product.id}`}
                className="btn btn-success custom-btn flex-grow-1"
                onClick={() => handleView(product)}
              >
                Xem chi tiết
              </Link>
              <button
                className={`btn ${
                  isFavorite(product) ? "btn-danger" : "btn-outline-danger"
                } flex-grow-1`}
                onClick={() => toggleFavorite(product)}
              >
                {isFavorite(product) ? "💔 Bỏ yêu thích" : "❤️ Yêu thích"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryPage;
