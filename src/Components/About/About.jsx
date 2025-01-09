import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "about";
  }, []);

  return (
    <section className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="about-content">
          <h2 className="text-uppercase text-white fs-1 mb-3 fw-bolder">
            about component
          </h2>
          <div className="star-icon mb-3">
            <i className="fa-solid fa-star text-white"></i>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="item">
                <p className="text-white text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="item">
                <p className="text-white text-start">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
