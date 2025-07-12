import React from "react";
import NodeJS from "../image/c_1.jpg";
import "../index.css";

function HeroSection() {
  return (
    <section className="hero-section text-white position-relative">
      <div className="container">
        <div className="row align-items-center">
          {/* Bên trái */}
          <div className="col-md-6">
            <h1 className="display-5 fw-bold mb-3">
              HỌC LẬP TRÌNH CHO NGƯỜI <br />
              MỚI BẮT ĐẦU
              <span className="text-warning">
                {" "}
                KHÔNG KHÓ NHƯ MỌI NGƯỜI NGHĨ
              </span>
            </h1>
            <p className="lead mb-4">
              Từ con số 0 trở thành lập trình viên trong 6 tháng
            </p>
            <a href="#advisory" className="btn btn-warning btn-lg fw-semibold">
              TƯ VẤN LỘ TRÌNH
            </a>
          </div>

          {/* Bên phải */}
          <div className="col-md-6 mt-3 text-center">
            <img src={NodeJS} alt="Mentor" className="img-fluid hero-img" />
          </div>
        </div>
      </div>

      {/* Hình nền khối hoặc sóng */}
      <div className="hero-wave img-fluid"></div>
    </section>
  );
}

export default HeroSection;
