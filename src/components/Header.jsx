import React from "react";

function Header() {
  return (
    <div className="my-5">
      <nav className="navbar navbar-expand-lg py-3 fixed-top ">
        <div className="container">
          {/* LOGO */}
          <a className="navbar-brand fw-bold fs-4 text-white" href="/">
            My-App
          </a>

          {/* Nút toggle khi mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/">
                  Trang Chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Khoá Học Online
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Khoá Học Video
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Feedback
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Tutorial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/">
                  Web Chấm Bài
                </a>
              </li>
            </ul>

            {/* Nút Liên Hệ */}
            <a
              href="/"
              className="btn btn-light text-dark fw-semibold rounded-pill shadow-sm"
            >
              Liên Hệ
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
