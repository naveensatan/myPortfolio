import React from "react";
import "./section_heading.css";

function SectionHeading(props) {
  return (
    <div id={props.id} className="heading-container">
      <span className="describer">{props.describe}</span>
      <h3 className="heading">{props.heading}</h3>
    </div>
  );
}

export default SectionHeading;
