import React, { useRef } from "react";
import Lottie from "lottie-react";
import animatedReception from "../../../public/animated-images/reception.json";
import "./hero.css";

const Hero = () => {
  const lottieRef = useRef();
  return (
    // hero section
    <section
      className="hero d-flex align-items-center px-2 px-sm-5 mt-3"
      id="about"
    >
      <div className="info">
        <div className="profile d-flex align-items-end">
          <div className="profile-image overflow-hidden rounded-circle border">
            <img src="./images/photo1.jpg" alt="profile-img" />
          </div>
          <span className="icon ms-2 mb-2">
            <i className="fa fa-certificate"></i>
          </span>
        </div>
        <h1 className="title my-3">Reservations Agent</h1>
        <p className="subtitle">
          Experienced Hotel Reservation Agent with over one year in the
          hospitality industry.
          <br />
          Possesses excellent communication skills and the ability to
          efficiently handle customer interactions. <br />
          Proficient in using hotel management systems and modern technology to
          ensure high-quality service and guest satisfaction.
        </p>
      </div>
      <div className="image d-none d-lg-flex align-items-center justify-content-end">
        {/* this element is imported from lottie-react library */}
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          style={{ width: "400px", marginRight: "-50px" }}
          animationData={animatedReception}
        />
      </div>
    </section>
  );
};

export default Hero;
