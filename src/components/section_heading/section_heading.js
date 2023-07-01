import React from "react";
import "./section_heading.css";

function SectionHeading({ describe, heading, id }) {
	return (
		<div id={id} className="heading-container">
			<span className="describer">{describe}</span>
			<h3 className="heading">{heading}</h3>
		</div>
	);
}

export default SectionHeading;
