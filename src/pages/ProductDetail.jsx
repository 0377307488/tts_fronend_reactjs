import React from "react";
import { useParams, Link } from "react-router-dom";
import Products from "../data/Products";

function ProductDetail() {
  const { id } = useParams();
  const product = Products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container mt-4">
        <h2>Không tìm thấy sản phẩm</h2>
        <Link to="/" className="btn btn-primary">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row shadow-lg border rounded p-4">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <h4 style={{ color: "red" }}>
            {" "}
            Giá: {product.price.toLocaleString()} VND
          </h4>
          <p className="mt-3">Mô tả dài: {product.longDesc}</p>
          <p className="mt-3"> Mô tả ngắn: {product.shortDesc}</p>
          <div className="mt-4">
            <Link to="/" className="btn btn-secondary me-2 custom-btn">
              Quay về
            </Link>
            <button className="btn btn-success custom-btn">Mua ngay</button>
          </div>
        </div>

        {/* Ảnh bên phải */}
      </div>

      {/* Thêm style hover và bóng cho nút */}
      <style>{`
        .custom-btn {
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .custom-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
