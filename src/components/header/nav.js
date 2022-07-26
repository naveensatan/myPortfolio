import React from "react";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#summary" className="fa">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="fa">
            <i className="fa-solid fa-user"></i>
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#skills" className="fa">
            <i className="fa-solid fa-code"></i>
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="fa">
            <i className="fa-solid fa-folder"></i>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="fa">
            <i className="fa-solid fa-phone"></i>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
