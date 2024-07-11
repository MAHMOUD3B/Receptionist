import React from "react";
import "./languages.css";

const Language = () => {
  return (
    <>
      <section className="languages px-3" id="languages">
        <div className="languages-head text-center text-sm-start mb-5">
          <h3 className="fs-2 fw-bold">
            <i className="fa fa-language me-3 icon"></i>
            Languages
          </h3>
        </div>
        <div className="languages-content nav gap-3 justify-content-center justify-content-md-start">
          <div className="px-3 py-2 rounded shadow d-flex align-items-center">
            Arabic <span className="ms-3 fw-semibold">(Native)</span>
          </div>
          <div className="px-3 py-2 rounded shadow d-flex align-items-center">
            English <span className="ms-3 fw-semibold">(Intermidiate)</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Language;
