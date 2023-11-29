import React from "react";
import "../CSS/Header.css";


function NavTabs() {
  

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item up">
          <a
            
            href="#about"
            className="nav-link" 
          >
            About Me
          </a>
        </li>
        <li className="nav-item up">
          <a
            
            href="#skills"
            className="nav-link" 
          >
            Skills
          </a>
        </li>
        <li className="nav-item up">
          <a
            href="#portfolio"
            className={
             "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item up">
          <a
            href="#contact"
            className={
             "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
