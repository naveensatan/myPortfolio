import "./App.css";
import SectionHeading from "./components/section_heading/section_heading";
import Nav from "./components/header/nav.js";
import Summary from "./components/summary/summary";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Project from "./components/project/project";

import projectSS from "./data/projectss.png";

const queen = {
  title: `Queen of My Own Universe`,
  img: projectSS,
  tech: [`WordPress`, `WooCommerce`],
  content: [
    `Designed and developed a customized website using WordPress to achieve optimized goals.`,
    `Participated in pre-project analysis and technical assessments to develop a user-friendly interface and correct functionality.`,
    `Delivered end-user training on content management systems allowing the client to make easy updates and maintenance to the website without developer assistance`,
  ],
  link: `http://queenofmyownuniverse.com/`,
};

const respectTheAbility = {
  title: `Respect the Ability`,
  tech: [`ReactJS`, `CSS`],
  content: [
    `Designed front-end using React JS to meet good user experience`,
    `Optimised content to meet W3 Accessibility Guidelines`,
  ],
  repo: `https://github.com/naveensatan/portfolio2`,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <div className="body">
        <Summary />
        <SectionHeading id="about" describe="a bit" heading="about me" />
        <About />
        <SectionHeading id="skills" describe="some of" heading="my skills" />
        <Skills />
        <SectionHeading
          id="projects"
          describe="glance into"
          heading="my projects"
        />
        <Project {...queen} />
        <Project {...respectTheAbility} />
      </div>
    </div>
  );
}

export default App;
