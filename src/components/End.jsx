import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                EduLearn
              </h5>
              <p>
                EduLearn cung cấp nền tảng học tập trực tuyến chất lượng cao,
                giúp bạn chinh phục tri thức mọi lúc mọi nơi.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Khóa học
              </h5>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Lập trình
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Thiết kế
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Kinh doanh
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Marketing
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Liên kết
              </h5>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Về chúng tôi
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Hỗ trợ
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Điều khoản
                </a>
              </p>
              <p>
                <a
                  href="#"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  Bảo mật
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                Liên hệ
              </h5>
              <p>
                <i className="fas fa-home mr-3"></i> TP.HCM, Việt Nam
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> support@edulearn.vn
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +84 123 456 789
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +84 987 654 321
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-4">
            <div>
              <p className="text-center">
                &copy; 2025 EduLearn. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
