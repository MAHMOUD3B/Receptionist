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
        <h1 className="title my-3">Front Desk Receptionist</h1>
        <p className="subtitle">
          Receptionist with over 1 years of experience in the hospitality
          industry, adept at managing reservations and providing exceptional
          customer service. Strong communication and problem-solving skills,
          able to work under pressure and meet guest needs efficiently.
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
