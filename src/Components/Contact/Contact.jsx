import React, { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact";
  }, []);
  const [labelStyle, setLabelStyle] = useState([]);

  let liftLabel = (labelId, whichInput) => {
    {
      const theInput = document.getElementById(whichInput);
      if (theInput.value != "") {
        document.getElementById(labelId).style.cssText = `
      top:-25px;
      z-index:0;
       `;
      } else {
        document.getElementById(labelId).style.cssText = `
        top: 0;
        z-index:-1;
        `;
      }
    }
  };

  return (
    <section className="contact">
      <div className="container overflow-hidden">
        <h2 className="mt-5 text-uppercase fs-1 mb-3 fw-bolder">
          conatct section
        </h2>
        <div className="star-icon">
          <i className="fa-solid fa-star"></i>
        </div>

        <form action="" className="mt-5 overflow-hidden w-75 mx-auto">
          <div className="mb-5 mt-5">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="userName"
              onChange={() => {
                liftLabel("nameLbl", "name");
              }}
            />
            <label htmlFor="name" className="" id="nameLbl">
              userName :
            </label>
          </div>
          <div className="mb-5">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="userAge"
              onChange={() => {
                liftLabel("ageLbl", "age");
              }}
            />
            <label htmlFor="age" id="ageLbl">
              userAge :
            </label>
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="userEmail"
              onChange={() => {
                liftLabel("emailLbl", "email");
              }}
            />
            <label htmlFor="email" id="emailLbl">
              userEmail :
            </label>
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-control"
              id="pass"
              placeholder="userPassword"
              onChange={() => {
                liftLabel("passLbl", "pass");
              }}
            />
            <label htmlFor="pass" id="passLbl">
              userPassword :
            </label>
          </div>
          <button className="text-white mb-5 d-flex" type="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
