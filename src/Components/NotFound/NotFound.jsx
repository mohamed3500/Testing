import React from "react";
import notFound from "../../assets/image.png";

export default function NotFound() {
  return (
    <section className="not-found d-flex align-items-center justify-content-center">
      <img src={notFound} alt="404" className="w-75" />
    </section>
  );
}
