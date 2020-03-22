import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";
import Section from "../components/Section"

function Projects() {
  return (
    <div>
      <Container>
        <Section>
          <h1>My Work</h1>

          <h2>Coding Projects</h2>
          <p>Click on an image to go to the code</p>

          <Project></Project>
          {/* //   <project className="project">
    //     <a href="https://github.com/ivargas1030/Multi-Media-Search-App" target="_blank"><img src="assets/imgs/MediaBuffet.JPG" alt="Media Buffet"></a>

    //     <h3>Media Buffet</h3>
    //   </project>
    //   <div className="work">
    //     <a href="https://github.com/ivargas1030/Group03_Project02" target="_blank"><img src="assets/imgs/LinkLibrary.JPG" alt="Link Library"></a>

    //     <h3>Link Library</h3>
    //   </div>
    //   <div className="work">
    //     <a href="https://github.com/ivargas1030/DiaryofFood" target="_blank"><img src="assets/imgs/cute_taco.png" alt="Comamos Tacos"></a>

    //     <h3>Comamos Tacos</h3>
    //   </div>
    //   <div className="work">
    //     <a href="https://github.com/ivargas1030/EmployeeTemplateEngine" target="_blank"><img src="assets/imgs/EmployeeTerminal.JPG" alt="Employee Template Engine"></a>

    //     <h3>Employee Template Engine</h3>
    //   </div>
    //   <div className="work">
    //     <a href="https://github.com/ivargas1030/EmployeeTracker" target="_blank"><img src="assets/imgs/EmployeeTracker.JPG" alt="Employee Tracker"></a>

    //     <h3>Employee Tracker</h3>
    //   </div>
    //   <div className="work">
    //     <a href="https://github.com/ivargas1030/DayPlanner" target="_blank"><img src="assets/imgs/PlannerProject.JPG" alt="Day Planner"></a>

    //     <h3>Day Planner</h3>
    //   </div> */}
        </Section>
      </Container>
    </div>
  );
}

export default Projects;
