import React from "react";
import "./style.css";
import Wrapper from "./";

function Project() {
  return (
    <div className="project">
      <work>
        <a
          href="https://github.com/ivargas1030/Multi-Media-Search-App"
          target="_blank"
        >
          <img
            className="projectimg"
            src={require("../assets/images/MediaBuffet.JPG")}
            alt="Media Buffet"
          ></img>
        </a>

        <h3>Media Buffet</h3>
      </work>
      <work>
        <a
          href="https://github.com/ivargas1030/Group03_Project02"
          target="_blank"
        >
          <img
            className="projectimg"
            src={require("../assets/images/LinkLibrary.JPG")}
            alt="Link Library"
          ></img>
        </a>

        <h3>Link Library</h3>
      </work>
      <work>
        <a href="https://github.com/ivargas1030/DiaryofFood" target="_blank">
          <img
            className="projectimg"
            src={require("../assets/images/cute_taco.png")}
            alt="Comamos Tacos"
          ></img>
        </a>

        <h3>Comamos Tacos</h3>
      </work>
      <work>
        <a
          href="https://github.com/ivargas1030/EmployeeTemplateEngine"
          target="_blank"
        >
          <img
            className="projectimg"
            src={require("../assets/images/EmployeeTerminal.JPG")}
            alt="Employee Template Engine"
          ></img>
        </a>

        <h3>Employee Template Engine</h3>
      </work>
      <work>
        <a
          href="https://github.com/ivargas1030/EmployeeTracker"
          target="_blank"
        >
          <img
            className="projectimg"
            src={require("../assets/images/EmployeeTracker.JPG")}
            alt="Employee Tracker"
          ></img>
        </a>

        <h3>Employee Tracker</h3>
      </work>
      <work>
        <a href="https://github.com/ivargas1030/DayPlanner" target="_blank">
          <img
            className="projectimg"
            src={require("../assets/images/PlannerProject.JPG")}
            alt="Day Planner"
          ></img>
        </a>

        <h3>Day Planner</h3>
      </work>
    </div>
  );
}

export default Project;
