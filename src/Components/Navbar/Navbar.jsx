import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      document.getElementsByTagName("nav")[0].classList.remove("py-4");
    } else {
      document.getElementsByTagName("nav")[0].classList.add("py-4");
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top py-4">
        <div className="container ">
          <Link
            className="navbar-brand text-white fs-2 fw-bolder text-uppercase"
            to=""
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold me-3"
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold me-3"
                  to="portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
