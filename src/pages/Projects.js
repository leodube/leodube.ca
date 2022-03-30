import React from "react";
import { Card } from "../components";
import statstickImg from "../images/statstick.png";
import statstickMLImg from "../images/statstickML.png";
import websiteImg from "../images/website.png";
import skedoodleImg from "../images/skedoodle.png";
import penaltybiasImg from "../images/penaltybias.png"

const Projects = () => {

  return (
    <>
      <h1 className="text-left mt-3 mb-5">Projects</h1>
      <div className="row justify-content-start">
        <div className="col-lg-6 d-flex">
          <Card
            title="This website!"
            subtitle="Personal project"
            image={websiteImg}
            description="A responsive single-page application that showcases my projects. Built using React and Bootstrap."
            btnText="View Code"
            btnLink="https://github.com/leodube/portfolio"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="PenaltyBias"
            subtitle="Personal project"
            image={penaltybiasImg}
            description="A website that predicts which NHL team will get the next powerplay opportunity. Built using Flask, React and Bootstrap."
            twoBtns
            leftBtnText="Website"
            leftBtnLink="https://www.penaltybias.com/"
            rightBtnText="View Code"
            rightBtnLink="https://github.com/leodube/penalty-bias"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="Skedoodle"
            subtitle="Personal project"
            image={skedoodleImg}
            description="A website that generates random doodle ideas. Built using MERN stack and Bootstrap."
            twoBtns
            leftBtnText="Website"
            leftBtnLink="https://www.skedoodle.art"
            rightBtnText="View Code"
            rightBtnLink="https://github.com/leodube/skedoodle"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="StatStick iOS Application"
            image={statstickImg}
            subtitle="Computer Engineering Capstone Project"
            description="An iPad application that displays hockey stick action data from an API endpoint. Built using Swift."
            btnText="View Code"
            btnLink="https://github.com/leodube/statstick-app"
          />
        </div>
        <div className="col-lg-6 d-flex">
          <Card
            title="StatStick Algorithm"
            image={statstickMLImg}
            subtitle="Computer Engineering Capstone Project"
            description="A machine learning algorithm that takes raw sensor data and predicts hockey stick actions using dynamic time warping and fuzzy clustering. Built using Python."
            btnText="View Code"
            btnLink="https://github.com/leodube/statstick-ml"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
