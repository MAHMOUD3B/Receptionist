import React, { useEffect, useState } from "react";
import "./footer.css";
const Footer = () => {
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrl = scrollY;
      scrl >= 300 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);
  return (
    <>
      {/* footer section */}
      <footer className="text-center px-3 pb-4">
        <p className="footer-text">
          {" "}
          &copy; 2024, All rights are reversed. Developed by{" "}
          <span className="fw-bold">70da</span>
        </p>
      </footer>

      {/* scroll to top button */}
      <button
        style={{ opacity: showBtn ? 1 : 0 }}
        onClick={() => {
          scroll(0, 0);
        }}
        className="scroll-btn position-fixed bottom-0 mb-4 end-0 me-4 rounded-circle"
      >
        <i className="fa fa-arrow-up" />
      </button>
    </>
  );
};

export default Footer;
