import React from "react";
import img1 from "../image/nodejs.png";
import img2 from "../image/springboot.png";

function Carousel() {
  return (
    <div className=" container-fluid px-0 mt-1">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          />
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100 img-fluid rounded"
              alt="Khoá học NodeJS"
              style={{ maxHeight: "70vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Khoá học NodeJS toàn tập</h5>
              <p>Xây dựng backend với NodeJS</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100 img-fluid rounded"
              alt="Khoá học Spring Boot"
              style={{ maxHeight: "70vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Khoá học Java Spring Boot</h5>
              <p>Xây dựng web app với Spring Boot</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)", width: "40px", height: "40px" }}
          />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "invert(1)", width: "40px", height: "40px" }}
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
