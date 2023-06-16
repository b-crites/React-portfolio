import React from "react";
import "../CSS/Header.css";

export default function NavTabs({ currentPage, handlePageChange }) {

  
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item up">
          <a 
          href="#about" 
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item up">
          <a  
          href="#portfolio" 
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </li>
        <li className="nav-item up">
          <a  
          href="#contact" 
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </a>
        </li>
        <li className="nav-item up">
          <a  
          href="#resume" 
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

