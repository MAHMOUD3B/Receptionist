import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    // contact us section
    <section className="contact px-3" id="contact">
      <div className="contact-head text-center text-sm-start mb-5">
        <h3 className="fs-2 fw-bold">
          <i className="fa fa-envelope me-3 icon"></i>
          Contact Me
        </h3>
      </div>
      {/* contact Content */}
      <div className="contact-content mb-3 d-flex align-items-center justify-content-center flex-wrap gap-3">
        <div className="text-center flex-grow-1 rounded p-3">
          <div className="icon mb-2 fs-4 mx-auto rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-user"></i>
          </div>
          <b>Mahmoud Mohamed Abbas</b>
        </div>
        <div className="text-center flex-grow-1 rounded p-3">
          <div className="icon mb-2 fs-4 mx-auto rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-location-dot"></i>
          </div>
          <b>Samaluat, Minya, Egypt</b>
        </div>
        <div className="text-center flex-grow-1 rounded p-3">
          <div className="icon mb-2 fs-4 mx-auto rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-phone"></i>
          </div>
          <b>01030012695</b>
        </div>
        <div className="text-center flex-grow-1 rounded p-3">
          <div className="icon mb-2 fs-4 mx-auto rounded d-flex align-items-center justify-content-center">
            <i className="fa fa-envelope"></i>
          </div>
          <a
            href="mailto:mahm0ud.m07amed.010@gmail.com?subject=Recepionist Job"
            className="text-decoration-none fw-bold"
          >
            mahm0ud.m07amed.010@gmail.com
          </a>
        </div>
        <div className="text-center flex-grow-1 rounded p-3">
          <div className="icon mb-2 fs-4 mx-auto rounded d-flex align-items-center justify-content-center">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <a
            href="https://linkedin.com/in/mahmoud-mohamed-4397bb318"
            target="blank"
            className="text-decoration-none fw-bold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
