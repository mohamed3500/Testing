import React, { useEffect } from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  useEffect(() => {
    document.title = "home";
  }, []);

  return (
    <section className="home d-flex justify-content-center align-items-center">
      <div className="home-content text-center">
        <img src={avatar} alt="a boy's face" className="mb-4" />
        <h2 className="text-uppercase text-white fs-1 mb-3 fw-bolder">
          start Framework
        </h2>

        <div className="star-icon mb-3">
          <i className="fa-solid fa-star text-white"></i>
        </div>
        <div className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </section>
  );
}
