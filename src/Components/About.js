import React from "react";
import "../CSS/About.css";
import {motion} from "framer-motion"
import ProfilePic from "../img/ProfilePic.jpg";

export default function About() {
  return (
    <div className="img-container vh-100 gridCenter">
      <article className="d-flex">
        <div className="center">
          <motion.img
            initial={{ scale:0 ,opacity: 0 }}
            whileInView={{ scale:1,opacity: 1, transition:{duration: .8}}}
            viewport={{once:true}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            
            }}
            className="hide rounded-circle img-fluid img-thumbnail m-4 spin"
            src={ProfilePic}
            alt="Myself"
          />
        </div>
        <motion.div
        initial={{opacity:0, x:"30%"}}
        whileInView={{opacity:1, x:0, transition:{duration:.75}}}
        viewport={{once:true}}
        
        
        
        className="m-5 mediaBox">
          <div className="articleBg p-4 rounded">
            <h1>Hey There!</h1>
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
              and send me a message or take a look at my LinkedIn and message me
              there!
            </p>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
