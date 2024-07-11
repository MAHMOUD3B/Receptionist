import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <>
      <section className="skills px-3" id="skills">
        <div className="skills-head mb-5 text-center text-sm-start">
          <h3 className="fs-2 fw-bold">
            <i className="fa fa-list-check me-3 icon"></i>
            Skills
          </h3>
        </div>
        <div className="skills-content">
          <ul className="list-unstyled nav gap-3 justify-content-center justify-content-md-start">
            <li className="skill rounded px-3 py-2 shadow">Fidelio</li>
            <li className="skill rounded px-3 py-2 shadow">Opera</li>
            <li className="skill rounded px-3 py-2 shadow">Word</li>
            <li className="skill rounded px-3 py-2 shadow">Excel</li>
            <li className="skill rounded px-3 py-2 shadow">Communication</li>
            <li className="skill rounded px-3 py-2 shadow">Time Management</li>
            <li className="skill rounded px-3 py-2 shadow">
              Customer’s service
            </li>
            <li className="skill rounded px-3 py-2 shadow">
              Work Under Pressure
            </li>
            <li className="skill rounded px-3 py-2 shadow">Good Attendance</li>
            <li className="skill rounded px-3 py-2 shadow">
              Stratigic Planning
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Skills;
