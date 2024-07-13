import React from "react";
import "./experiences.css";

const Experiences = () => {
  return (
    <>
      <section className="experiences px-3" id="experiences">
        <div className="experiences-head mb-5">
          <h3 className="fs-2 fw-bold">
            <i class="fa-solid fa-briefcase me-3 icon"></i>
            Work Experiences
          </h3>
        </div>
        <div className="experiences-content nav gap-3 justify-content-center">
          <div className="card shadow overflow-hidden">
            <img src="./images/lavista.jpg" alt="" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">Housekeeping at LA vista Pay</h4>
              <p className="card-text">
                I used to work cleaning chalets, and I acquired the skill of
                communicating with the owners, and I also learned to work under
                pressure during peak hours
              </p>
              <p className="card-link fw-bold text-end">
                (Jul 2023 – Sep 2023)
              </p>
            </div>
          </div>
          <div className="card shadow overflow-hidden">
            <img
              src="./images/university-hotel.jpeg"
              alt=""
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">
                Receptionist training at University Hotel
              </h4>
              <p className="card-text">
                I received training from the college at the Minya University
                Hotel as a receptionist, where I gained some experience in
                reservation systems such as fidelio and how to deal with guests.
              </p>
              <p className="card-link fw-bold text-end">
                (Oct 2023 – Jan 2023)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;
