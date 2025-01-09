import React, { useEffect, useState } from "react";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    document.title = "portfolio";
  }, []);

  return (
    <section className="portfolio">
      <div className="container overflow-hidden">
        <h2 className="mt-5 text-uppercase fs-1 mb-3 fw-bolder">
          portfolio component
        </h2>
        <div className="star-icon mb-3">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="row g-5 mb-5">
          <div className="col-md-6 col-lg-4 ">
            <div className="item position-relative ">
              <img src={port1} className="w-100 rounded-3" alt={port1} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port1)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item position-relative">
              <img src={port2} className="w-100 rounded-3" alt={port2} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port2)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item position-relative ">
              <img src={port3} className="w-100 rounded-3" alt={port3} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port3)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item position-relative ">
              <img src={port1} className="w-100 rounded-3" alt={port1} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port1)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item position-relative ">
              <img src={port2} className="w-100 rounded-3" alt={port2} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port2)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="item position-relative ">
              <img src={port3} className="w-100 rounded-3" alt={port3} />
              <div
                className="layer rounded-3"
                onClick={() => setImgSrc(port3)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i className="fa-solid fa-plus text-white "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <img src={imgSrc} alt={imgSrc} className="w-100" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
