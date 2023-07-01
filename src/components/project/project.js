import React from "react";
import "./project.css";

function Project({ title, img, tech, content, link, repo }) {
	return (
		<div className="project-container">
			{img && (
				<div className="project-img-container">
					<img className="project-ss" src={img} alt={title} />
				</div>
			)}
			<div className="project-content">
				<h3>{title}</h3>
				<p>
					Technologies used:
					<span> {tech.join(", ")}</span>
				</p>
				<ul>
					{content.map((item, key) => (
						<li key={key}>{item}</li>
					))}
				</ul>
			</div>
			<div className="project-links">
				{link && (
					<a href={link} target="_blank" rel="noopener noreferrer">
						Live
					</a>
				)}
				{repo && (
					<a href={repo} target="_blank" rel="noopener noreferrer">
						Repo
					</a>
				)}
			</div>
		</div>
	);
}

export default Project;
