import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="">
        <div className="footer  ">
          <div className="overflow-hidden">
            <div className="card-group mx-4 my-5">
              <div className="card">
                <div className="card-body text-center text-white">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="card text-white">
                <div className="card-body text-center">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons d-flex justify-content-center gap-2 flex-wrap">
                    <span>
                      <i className="fa-brands fa-facebook icon" />
                    </span>
                    <span>
                      <i className="fa-brands fa-twitter icon" />
                    </span>
                    <span>
                      <i className="fa-brands fa-linkedin-in icon" />
                    </span>
                    <span>
                      <i className="fa-solid fa-globe icon" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center text-white">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p overflow-hidden">
          <p className="text-white my-4">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
