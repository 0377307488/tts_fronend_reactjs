import React, { useState } from "react";

function PriceFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (filterType === "price") {
      onFilter({
        type: "price",
        value: {
          min: minPrice === "" ? 0 : Number(minPrice),
          max: maxPrice === "" ? Infinity : Number(maxPrice),
        },
      });
    } else if (filterType === "name") {
      onFilter({
        type: "name",
        value: {
          name: search.trim(),
        },
      });
    } else {
      onFilter({ type: "none", value: {} });
    }
  };

  return (
    <div>
      <form className="row g-3 mb-4" onSubmit={submit}>
        {/* Chọn kiểu lọc */}
        <div className="col-md-4">
          <label htmlFor="filterType" className="form-label fw-semibold">
            Bạn muốn tìm kiếm theo?
          </label>
          <select
            id="filterType"
            className="form-select custom-input"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">-- Chọn --</option>
            <option value="price">Lọc theo giá</option>
            <option value="name">Lọc theo tên</option>
          </select>
        </div>

        {/* Nếu lọc theo giá */}
        {filterType === "price" && (
          <>
            <div className="col-md-3">
              <label htmlFor="minPrice" className="form-label fw-semibold">
                Giá tối thiểu
              </label>
              <input
                type="number"
                id="minPrice"
                className="form-control custom-input"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="VD: 500000"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="maxPrice" className="form-label fw-semibold">
                Giá tối đa
              </label>
              <input
                type="number"
                id="maxPrice"
                className="form-control custom-input"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="VD: 2000000"
              />
            </div>

            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-search"></i> Lọc
              </button>
            </div>
          </>
        )}

        {/* Nếu lọc theo tên */}
        {filterType === "name" && (
          <>
            <div className="col-md-6">
              <label htmlFor="searchTerm" className="form-label fw-semibold">
                Tên sản phẩm
              </label>
              <input
                type="text"
                id="searchTerm"
                className="form-control custom-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="VD: React, Java..."
              />
            </div>

            <div className="col-md-2 d-flex align-items-end">
              <button type="submit" className="btn btn-primary w-100">
                <i className="bi bi-search"></i> Lọc
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default PriceFilter;
