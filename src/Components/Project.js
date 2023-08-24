import React from "react";
import "../CSS/Project.css";
import {motion} from 'framer-motion'

function Project(props) {
  return (
    <>
    <div className="py-4 gridCenter">
    <motion.div 
    
    initial={{opacity:0, x:'-30%'}}
       whileInView={{opacity:1, x:0, transition:{duration:2}}}
       viewport={{once:true}}
    className="card " style={{ width: "20rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        width="300px"
        alt="Projects Screenshot"
      />
      <div className="card-body icon">
        <h3 className="card-title">{props.title}</h3>
        <div className="container-md row">
          <a
            href={props.deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link link-secondary link-underline-opacity-0"
          >
            Deploy
          </a>

          <a
            href={props.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="link-secondary link-underline-opacity-0"
          >
            Github
          </a>
        </div>
      </div>
    </motion.div>
    <div className="d-flex">

      </div>
      </div>

    
    </>

  );
}

export default Project;
