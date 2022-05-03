import React from "react";
import profilePic from "../images/me.jpeg";
import githubIcon from "../images/github.svg";
import linkedinIcon from "../images/linkedin.svg";

const Home = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-11 col-md-8">
        <img
          id="profile-pic"
          src={profilePic}
          alt="Profile photo"
          width="250"
          height="250"
          className="img-fluid img-thumbnail rounded-circle mx-auto d-block"
        />
        <h1 className="text-center mt-3 mb-1">Leo Dubé</h1>
        <h4 className="text-center text-muted font-weight-light">
          Computer Engineer and Aspiring Adventurer
        </h4>
        <p className="text-center text-muted mt-4">
          I do full stack development, responsive web design, and more...
        </p>
        <div className="row pt-3 justify-content-center">
          <div className="col-lg-4 mb-1">
            <a
              href="https://github.com/leodube"
              target="_blank"
              role="button"
              className="btn btn-light btn-lg btn-block"
            >
              <span className="icon mr-3">
                <img src={githubIcon} height="35" width="35" alt=""></img>
              </span>
              <span className="pt-1">Code</span>
            </a>
          </div>
          <div className="col-lg-4 mb-1">
            <a
              href="https://www.linkedin.com/in/leodube/"
              target="_blank"
              role="button"
              className="btn btn-light btn-lg btn-block"
            >
              <span className="icon mr-3">
                <img src={linkedinIcon} height="35" width="35" alt=""></img>
              </span>
              <span className="pt-1">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
