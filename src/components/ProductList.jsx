import { Link } from "react-router-dom";

function ProductItem({ id, name, price, image, desc }) {
  return (
    <div className="mb-4 col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 product-card shadow-sm">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {price.toLocaleString()} VND
          </h6>
          <p className="card-text">{desc}</p>
          <Link to={`/products/${id}`} className="btn btn-success custom-btn">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
