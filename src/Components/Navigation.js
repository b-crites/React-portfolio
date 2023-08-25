import {useRef} from "react";
import "../CSS/Header.css";


function NavTabs() {
  
  const contact = useRef(null)


  const scrollToSection= (elementRef) => {

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth",
    })
  }

  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item up">
          <a
            
            href="About"
            className="nav-link" 
          >
            About Me
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
            onClick={() => scrollToSection(contact)}
            className={
             "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item up">
          <a
            href="#resume"
            className={
             "nav-link "
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
