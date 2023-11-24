import React from "react";
import "../CSS/About.css";
import {motion} from "framer-motion"
import ProfilePic from "../img/NewHeader.jpg";

export default function About() {
  return (
    <div id="about" className="mb-5">
    <div className="img-container vh-100 gridCenter">
      <article className="d-flex">
        <div className="center">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ scale:1,opacity: 1, transition:{duration: 2.5}}}
            viewport={{once:true}}
            className="hide rounded-circle img-fluid img-thumbnail m-4 spin"
            src={ProfilePic}
            alt="Picture of myself"
          />
        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration:1}}}
        viewport={{once:true}}
        
        
        
        className="m-5 mediaBox">
          <div className="articleBg p-4 rounded">
          
            <p className="fs-3">
              Welcome to my portfolio website! Take a look around and explore
              some of my projects I have created!
            </p>
            <p className="fs-3">
              I am a Frontend Developer whose work ethic and eagerness to learn
              makes me ready to take on any project that comes my way!
            </p>
            <p className="fs-3">
              To get in touch with me you can either head to the Contact section
              or take a look at my LinkedIn and message me
              there!
            </p>
          </div>
        </motion.div>
      </article>
    </div>
    </div>
  );
}
