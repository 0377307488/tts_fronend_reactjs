// src/components/FavoritesPage.js
import React from "react";
import ProductItem from "../components/ProductList";

function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-danger mb-4">Sản phẩm yêu thích</h1>

      {favorites.length === 0 ? (
        <p className="text-center">Bạn chưa có sản phẩm nào yêu thích.</p>
      ) : (
        <div className="row">
          {favorites.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              desc={product.shortDesc}
              product={product} // ✅ THÊM
              toggleFavorite={toggleFavorite} // ✅ THÊM
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
