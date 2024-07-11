import React from "react";
import "./education.css";

const Education = () => {
  return (
    <>
      <section className="education px-3" id="education">
        <div className="education-head text-center text-sm-start mb-5">
          <h3 className="fs-2 fw-bold">
            <i className="fa fa-user-graduate me-3 icon"></i>
            Education
          </h3>
        </div>
        <div className="education-content d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="education-info fs-5">
            <p>
              Minya University – Faculty of Tourism & Hotels, Technology
              Department
              <span className=" text-primary"> (2022-2026) </span>
            </p>
            <p>Total excellent grade in level two</p>
          </div>
          <div className="education-images d-flex gap-3 flex-wrap justify-content-center mt-3 m-md-0">
            <img
              src="./images/university.jpeg"
              alt=""
              className="d-block rounded shadow-lg"
            />
            <img
              src="./images/faculty.jpeg"
              alt=""
              className="d-block rounded shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
