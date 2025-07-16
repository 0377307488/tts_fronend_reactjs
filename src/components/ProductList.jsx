import { Link } from "react-router-dom";

function ProductItem({
  id,
  name,
  price,
  image,
  desc,
  product,
  toggleFavorite,
  isFavorite,
  handleView,
}) {
  return (
    <div className="mb-4 col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 product-card rounded-4 shadow">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {price.toLocaleString()} VND
          </h6>
          <p className="card-text">{desc}</p>
          <div>
            <Link
              to={`/products/${id}`}
              className="btn btn-success custom-btn"
              onClick={() => handleView(product)}
            >
              Xem chi tiết
            </Link>
            <button
              className={`btn ms-2 ${
                isFavorite ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => toggleFavorite(product)}
            >
              {isFavorite ? "💔 Bỏ yêu thích" : "❤️ Yêu thích"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
