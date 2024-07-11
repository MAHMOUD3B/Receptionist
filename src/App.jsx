import React from "react";

// import the main components
import Header from "./components/1-header/Header";
import Hero from "./components/2-about/Hero";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/10-footer/Footer";
import Education from "./components/5-education/Education";
import Skills from "./components/6-skills/Skills";
import Experiences from "./components/7-experiences/Experiences";
import Language from "./components/9-languages/Language";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <div className="separator" />
        <Contact />
        <div className="separator" />
        <Education />
        <div className="separator" />
        <Skills />
        <div className="separator" />
        <Experiences />
        <div className="separator" />
        <Language />
        <div className="separator" />
        <Footer />
      </div>
    </>
  );
};

export default App;
