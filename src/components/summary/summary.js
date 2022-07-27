import React from "react";
import "./summary.css";
import Headshot from "./headshot.JPG";
import Resume from "../../data/Naveen Satanarachchi.pdf";

function Summary() {
  return (
    <div id="summary" className="summary-container">
      <div className="headshot-container">
        <img className="headshot" src={Headshot} alt="headshot of author" />
      </div>
      <div className="bio-container">
        <h3 className="bio-salutation"> Hi there... I'm</h3>
        <h2 className="bio-header">Naveen Satanarachchi</h2>
        <p className="bio">
          A Software Engineering graduate eager to apply front-end development,
          time management and organizational skills in various environments.
          Seeking entry-level opportunities to expand skills while facilitating
          company growth.
        </p>
        <div className="bio-footer">
          <a className="bio-resume-btn btn" href={Resume} target="-blank">
            Resumé
          </a>
          <div className="bio-social">
            <a
              href="https://github.com/naveensatan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github bio-social-i btn"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/naveensatanarachchi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin bio-social-i btn"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
