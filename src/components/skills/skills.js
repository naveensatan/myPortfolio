import React from "react";
import MongoLogo from "../../data/mongodb_logo.png";
import GraphQlLogo from "../../data/graphQLLogo";
import "./skills.css";

const skills = [
	{
		name: "HTML5",
		icon: <i className="fa-brands fa-html5"></i>,
	},
	{
		name: "CSS3",
		icon: <i className="fa-brands fa-css3"></i>,
	},
	{
		name: "JavaScript",
		icon: <i className="fa-brands fa-js"></i>,
	},
	{
		name: "React JS",
		icon: <i className="fa-brands fa-react"></i>,
	},
	{
		name: "Node JS",
		icon: <i className="fa-brands fa-node"></i>,
	},
	{
		name: "GraphQL",
		icon: <GraphQlLogo />,
	},
	{
		name: "MongoDB",
		icon: <img src={MongoLogo} className="fa-mongo" alt="mongodb logo" />,
	},
	{
		name: "Git",
		icon: <i className="fa-brands fa-git"></i>,
	},
	{
		name: "PHP",
		icon: <i className="fa-brands fa-php"></i>,
	},
	{
		name: "Wordpress",
		icon: <i className="fa-brands fa-wordpress"></i>,
	},
];

function Skills() {
	return (
		<div className="skills-container">
			<div className="skills-icons-container">
				{skills.map((skill, indx) => {
					return (
						<div className="skill-item" key={indx}>
							{skill.icon}
							<p>{skill.name}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skills;
