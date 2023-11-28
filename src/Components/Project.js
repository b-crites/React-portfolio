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
        <div className="container-md">
          <a href={props.deployLink}
            target="_blank"
            rel="noopener noreferrer">
          <button
            
            className=" w-100 bg-white btn-outline-dark btn"
          >
            Launch
          </button>
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
